import styles from "./Card.module.css";

type CardProps = {
  id: string | number;
  image: string | undefined;
  text: string;
  date: string;
  title: string;
  className?: string;
};
export const Card: React.FC<CardProps> = ({
  id,
  image = "https://avatanplus.com/files/resources/mid/59463e2888b1a15cba62ce70.jpg",
  text,
  date,
  title,
  className = " ",
}) => {
  return (
    <article className={`{styles.card} ${className}`} id={`card.${id}`}>
      <img src={image} alt={`postpicture${id}`} className={styles.card__img} />
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__text}>{text}</p>
      <p className={styles.card__date}>{date}</p>
    </article>
  );
};
