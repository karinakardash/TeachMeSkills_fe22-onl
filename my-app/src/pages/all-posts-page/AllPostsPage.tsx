import { ContentTemplate } from "../../templates/content/ContentTemplate";
import styles from "./AllPostsPage.module.css";
import { useEffect, useState } from "react";
import { Title } from "../../ui/title/Title";
import { setSelectedPost } from "../../features/posts/selectedPostSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Card } from "../../ui/card/Card";
import { AllPostsList } from "../../features/posts/alll-posts/allPostsList";
import { getAllPostsFetch } from "../../features/posts/alll-posts/allPostsSlice";
import { Post, TabButtons } from "../../types";
import { TabList } from "../../features/tabs/tab-list/TabList";
import { getUser } from "../../features/user/userSlice";
import { Header } from "../../features/header/Header";
import { SortingBar } from "../../features/sorting/sorting-bar/SortingBar";
import { actions } from "../../features/sorting/sortingSlice";
import { sorting } from "../../features/sorting";
import { Pagination } from "../../features/posts/pagination/Pagination";
import { getAllPostsWithPaginationFetch } from "../../features/posts/pagination/paginationSlice";

type AllPostsPageProps = {};

const TABS_LIST = Object.values(TabButtons);

export const AllPostsPage: React.FC<AllPostsPageProps> = () => {
  const [selectedTab, setSelectedTab] = useState(TabButtons.ALL);
  const sortedPostsList = useAppSelector((state) => state.sorting.sortedPosts);
  const allPostsList = useAppSelector((state) => state.allPosts.allPosts);
  const paginationPosts = useAppSelector(
    (state) => state.paginationPosts.postsPerPage
  );
  let allPosts = sortedPostsList.length ? sortedPostsList : paginationPosts;
  const favoritePosts = useAppSelector((state) => state.markedPost);
  const [modal, setModal] = useState(true);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const popularPosts = useAppSelector((state) => state.likeDislike);
  const dispatch = useAppDispatch();
  let selectedPostId = useAppSelector((state) => state.selectedPost.id);
  let selectedPost =
    selectedPostId != null
      ? allPosts?.find((post) => post.id === selectedPostId)
      : null;

  useEffect(() => {
    dispatch(getAllPostsFetch());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getAllPostsWithPaginationFetch({
        limit: postsPerPage,
        offset: (currentPage - 1) * postsPerPage,
      })
    );
  }, [dispatch, currentPage]);

  useEffect(() => {
    dispatch(
      sorting({
        text: filter,
        limit: postsPerPage,
        offset: (currentPage - 1) * postsPerPage,
      })
    );
  }, [dispatch, filter, currentPage]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const displayAllPosts = (post: Post) => true;
  const displayFavoritePosts = (post: Post) => favoritePosts[post.id];
  const displayPopular = (post: Post) =>
    popularPosts[post.id]?.state === "like";

  const getSelectedTabPosts = (
    selectedTab: TabButtons,
    allPosts: Post[]
  ): Post[] => {
    switch (selectedTab) {
      case TabButtons.ALL:
        return allPosts;
      case TabButtons.MY_FAVORITIES:
        return allPosts.filter(displayFavoritePosts);
      case TabButtons.POPULAR:
        return allPosts.filter(displayPopular);
    }
  };
  return (
    <div className={styles.wrapper}>
      {" "}
      {selectedPostId != null ? (
        <div
          className={
            modal
              ? `${styles.overlayContainer}`
              : `${styles.overlayContainerClose}`
          }
        >
          <div className={styles.overlay}>
            {selectedPost ? (
              <Card className={styles.card} {...selectedPost}>
                <div
                  className={styles.cross}
                  role="button"
                  onClick={(event) => {
                    setModal(false);
                    event.preventDefault();
                  }}
                >
                  X
                </div>
              </Card>
            ) : null}
          </div>
        </div>
      ) : null}
      <Header isLogin={true}></Header>
      <ContentTemplate
        title={
          <div className={styles.titleWrapper}>
            <Title className={styles.posts__title}>Blog</Title>
          </div>
        }
      >
        <div className={styles.supPostsBox}>
          <TabList
            tabs={TABS_LIST}
            selectedTab={selectedTab}
            onTabClick={setSelectedTab}
          />
          <SortingBar
            onChange={(e) => {
              setFilter(e.currentTarget.value);
              setCurrentPage(1);
              console.log(currentPage);
              /*dispatch(
                actions.sorting({
                  text: e.currentTarget.value,
                  limit: postsPerPage,
                  offset: (currentPage - 1) * postsPerPage,
                })
              );*/
            }}
          />
        </div>
        <AllPostsList
          onPreviewClick={(id) => {
            dispatch(setSelectedPost(id));
            setModal(true);
          }}
          allPosts={getSelectedTabPosts(selectedTab, allPosts)}
        />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={allPostsList.length}
          onClick={(e) => {
            setCurrentPage(+e.target.innerText);
          }}
        />
      </ContentTemplate>
    </div>
  );
};
