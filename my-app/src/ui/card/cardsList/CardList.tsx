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
    lesson_num?: number;
    title: string;
    author?: number;
  }>;
  onPreviewClick?: (id: string | number) => void;
  onClick?: (id: string | number) => void;
  LikeDislike?: React.ComponentType<{ id: string | number }>;
  Marker?: React.ComponentType<{ id: string | number }>;
};
export const CardList: React.FC<CardListProps> = ({
  data,
  onPreviewClick,
  LikeDislike,
  Marker,
  onClick,
}) => {
  return (
    <div className={styles.cardList}>
      {data.map((post) => (
        <Link to={`${AppPages.POST_PAGE}/${post.id}`} key={post.id}>
          <Card
            id={post.id}
            image={post.image}
            text={post.text}
            date={post.date}
            title={post.title}
            onPreviewClick={onPreviewClick}
            LikeDislike={LikeDislike}
            Marker={Marker}
            onClick={onClick}
          ></Card>
        </Link>
      ))}
    </div>
  );
};
