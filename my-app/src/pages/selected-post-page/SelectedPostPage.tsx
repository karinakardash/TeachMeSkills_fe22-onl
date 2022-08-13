import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { Card } from "../../ui/card/Card";
import { Title } from "../../ui/title/Title";
import styles from "../selected-post-page/SelectedPostPage.module.css";
import { useParams } from "react-router-dom";
import { PostsLikeDislike } from "../../features/posts/like-dislike/posts-like-dislike";
import { PostsMarker } from "../../features/posts/marker";
import { getSelectedPostFetch } from "./selectedPostSlice";

type SelectedPostPageProps = {};

export const SelectedPostPage: React.FC<SelectedPostPageProps> = () => {
  const post = useAppSelector((state) => state.post.post);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getSelectedPostFetch({ id }));
    }
  }, [dispatch, id]);

  return (
    <div className={styles.wrapper}>
      <ContentTemplate
        title={<Title className={styles.posts__title}>Selected Post</Title>}
      ></ContentTemplate>
      <Card
        className={styles.cardSelected}
        id={post.id}
        image={post.image}
        text={post.text}
        date={post.date}
        title={post.title}
        LikeDislike={PostsLikeDislike}
        Marker={PostsMarker}
      ></Card>
    </div>
  );
};
