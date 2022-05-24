import styles from "./CardList.module.css";
import { Card } from "../Card";

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
        <Card
          id={post.id}
          key={post.id}
          image={post.image}
          text={post.text}
          date={post.date}
          title={post.title}
        ></Card>
      ))}
    </div>
  );
};
