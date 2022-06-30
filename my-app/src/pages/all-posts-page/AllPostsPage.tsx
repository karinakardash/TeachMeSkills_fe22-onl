import { ContentTemplate } from "../../templates/content/ContentTemplate";
import styles from "../my-posts-page/MypostsPage.module.css";
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

type AllPostsPageProps = {};

const TABS_LIST = Object.values(TabButtons);

export const AllPostsPage: React.FC<AllPostsPageProps> = () => {
  const [selectedTab, setSelectedTab] = useState(TabButtons.ALL);
  const favoritePosts = useAppSelector((state) => state.markedPost);
  const allPosts = useAppSelector((state) => state.allPosts.allPosts);
  const [modal, setModal] = useState(true);
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
      *{" "}
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
                    console.log(selectedPostId);
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
        <TabList
          tabs={TABS_LIST}
          selectedTab={selectedTab}
          onTabClick={setSelectedTab}
        />
        <AllPostsList
          onPreviewClick={(id) => {
            dispatch(setSelectedPost(id));
            setModal(true);
          }}
          allPosts={getSelectedTabPosts(selectedTab, allPosts)}
        />
      </ContentTemplate>
    </div>
  );
};
