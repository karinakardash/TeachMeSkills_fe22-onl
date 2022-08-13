import { ContentTemplate } from "../../templates/content/ContentTemplate";
import styles from "../my-posts-page/MypostsPage.module.css";
import { PrimaryButton } from "../../ui/button/primary-button/PrimaryButton";
import { useEffect, useState } from "react";
import { Title } from "../../ui/title/Title";
import { setSelectedPost } from "../../features/posts/selectedPostSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Card } from "../../ui/card/Card";
import { PostsCardList } from "../../features/posts/card-list/CardList";
import { getMyPostsFetch } from "../../features/posts/my-posts/myPostsSlice";
import { MyPostsList } from "../../features/posts/my-posts/myPostsList";

type MypostsPageProps = {};

export const MypostsPage: React.FC<MypostsPageProps> = () => {
  const myPosts = useAppSelector((state) => state.myPosts.myPosts);
  const [modal, setModal] = useState(true);
  let selectedPostId = useAppSelector((state) => state.selectedPost.id);
  let selectedPost =
    selectedPostId != null
      ? myPosts?.find((item) => item.id === selectedPostId)
      : null;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMyPostsFetch());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {selectedPostId != null ? (
        <div
          className={
            modal
              ? `${styles.overlayContainer}`
              : `${styles.overlayContainerClose}`
          }
        >
          <div
            className={styles.overlay}
            onClick={() => {
              setModal(false);
            }}
          >
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
      <ContentTemplate
        title={
          <div className={styles.titleWrapper}>
            <Title className={styles.posts__title}>My Posts</Title>
            <PrimaryButton>+Add</PrimaryButton>
          </div>
        }
      >
        <MyPostsList
          onPreviewClick={(id) => {
            dispatch(setSelectedPost(id));
            setModal(true);
          }}
          myPosts={myPosts}
        ></MyPostsList>
      </ContentTemplate>
    </div>
  );
};
