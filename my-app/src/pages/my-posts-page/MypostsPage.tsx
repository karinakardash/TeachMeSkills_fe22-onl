import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { CardList } from "../../ui/card/cardsList/CardList";
import styles from "../my-posts-page/MypostsPage.module.css";
import { PrimaryButton } from "../../ui/button/primary-button/PrimaryButton";
import data from "./data.json";
import { useEffect, useState } from "react";
import { Title } from "../../ui/title/Title";
import { setSelectedPost } from "../../features/posts/selectedPostSlice";
import { useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { Card } from "../../ui/card/Card";
import { PostsCardList } from "../../features/posts/card-list/CardList";

type MypostsPageProps = {};

export const MypostsPage: React.FC<MypostsPageProps> = () => {
  const [posts, setPosts] = useState<typeof data | null>(null);
  const [modal, setModal] = useState(true);
  let selectedPostId = useAppSelector((state) => state.selectedPost.id);
  let selectedPost =
    selectedPostId != null
      ? posts?.find((item) => item.id === selectedPostId)
      : null;
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      setPosts(data);
    }, 100);
  }, []);
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
      <ContentTemplate
        title={
          <div className={styles.titleWrapper}>
            <Title className={styles.posts__title}>My Posts</Title>
            <PrimaryButton>+Add</PrimaryButton>
          </div>
        }
      >
        <PostsCardList
          onPreviewClick={(id) => {
            dispatch(setSelectedPost(id));
            setModal(true);
          }}
        ></PostsCardList>
      </ContentTemplate>
    </div>
  );
};
