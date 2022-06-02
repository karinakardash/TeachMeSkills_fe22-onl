import styles from "./CardList.module.css";
import { Card } from "../Card";
import { Link } from "react-router-dom";
import { AppPages } from "../../../types";

type CardListProps = {
  data: Array<{
    id: string | number;
    image?: string | undefined;
    text: string;
    date: string;
    title: string;
  }>;
};
export const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <div className={styles.cardList}>
      {data.map((post) => (
        <Link to={AppPages.POSTS_ITEM}>
          <Card
            id={post.id}
            key={post.id}
            image={post.image}
            text={post.text}
            date={post.date}
            title={post.title}
          ></Card>
        </Link>
      ))}
    </div>
  );
};
