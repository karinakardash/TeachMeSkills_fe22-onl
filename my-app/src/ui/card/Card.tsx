import React, { Children } from "react";
import { LikeDislike } from "../../features/posts/like-dislike/ui/like-dislike/LikeDislike";
import { PrimaryButton } from "../button/primary-button/PrimaryButton";
import styles from "./Card.module.css";

type CardProps = {
  id: string | number;
  image?: string | undefined;
  text: string;
  date: string;
  title: string;
  className?: string;
  onPreviewClick?: (id: string | number) => void;
  LikeDislike?: React.ComponentType<{ id: string | number }>;
  Marker?: React.ComponentType<{ id: string | number }>;
  children?: React.ReactNode;
};
export const Card: React.FC<CardProps> = ({
  id,
  image = "https://avatanplus.com/files/resources/mid/59463e2888b1a15cba62ce70.jpg",
  text,
  date,
  title,
  className = " ",
  onPreviewClick,
  LikeDislike,
  Marker,
  children,
}) => {
  return (
    <article className={`${styles.card} ${className}`} id={`card.${id}`}>
      {children}
      <img src={image} alt={`postpicture${id}`} className={styles.card__img} />
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__text}>{text}</p>
      <p className={styles.card__date}>{date}</p>
      <PrimaryButton
        onClick={(event) => {
          onPreviewClick?.(id);
          event.preventDefault();
        }}
      >
        Preview
      </PrimaryButton>
      <div className={styles.footer}>
        {LikeDislike ? <LikeDislike id={id} /> : null}
        {Marker ? <Marker id={id} /> : null}
      </div>
    </article>
  );
};
