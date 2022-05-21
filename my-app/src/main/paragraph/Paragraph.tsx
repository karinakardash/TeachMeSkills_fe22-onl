import styles from "../paragraph/Paragraph.module.css";

type ParagraphProps = {
  children: React.ReactNode;
};

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};
