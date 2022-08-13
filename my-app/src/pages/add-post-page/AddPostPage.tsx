import styles from "./AddPostPage.module.css";

import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { AddPostForm } from "../../features/posts/add-post";
import { useAppDispatch } from "../../hooks";
import { Header } from "../../features/header/Header";

type AddPostPageProps = {};

export const AddPostPage: React.FC<AddPostPageProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Header isLogin={true} />
      <ContentTemplate title="Add Post">
        <AddPostForm></AddPostForm>
      </ContentTemplate>
    </div>
  );
};
