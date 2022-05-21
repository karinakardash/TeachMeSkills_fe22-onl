import styles from "../picture/Picture.module.css";

type PictureProps = {
  src: string;
};

export const Picture: React.FC<PictureProps> = ({ src }) => {
  return <img className={styles.img} src={src}></img>;
};
