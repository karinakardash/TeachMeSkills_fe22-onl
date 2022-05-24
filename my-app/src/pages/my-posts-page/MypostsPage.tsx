import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { CardList } from "../../ui/card/cardsList/CardList";
import styles from "../my-posts-page/MypostsPage.module.css";
import { PrimaryButton } from "../../ui/button/primary-button/PrimaryButton";
import data from "./data.json";
import { useEffect, useState } from "react";
import { Title } from "../../ui/title/Title";

type MypostsPageProps = {};

export const MypostsPage: React.FC<MypostsPageProps> = () => {
  const [posts, setPosts] = useState<typeof data | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setPosts(data);
    }, 1000);
  }, []);
  return (
    <div className={styles.wrapper}>
      <ContentTemplate
        title={
          <div className={styles.titleWrapper}>
            <Title className={styles.posts__title}>My posts</Title>
            <PrimaryButton>+Add</PrimaryButton>
          </div>
        }
      >
        <CardList data={posts ?? []}></CardList>
      </ContentTemplate>
    </div>
  );
};
