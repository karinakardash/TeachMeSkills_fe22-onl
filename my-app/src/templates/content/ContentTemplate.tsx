import { Title } from "../../ui/title/Title";
import styles from "../content/ContentTemplate.module.css";
import { Header } from "../../features/header/Header";

type ContentTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const ContentTemplate: React.FC<ContentTemplateProps> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.content}>
        <Title className={styles.posts__title}>{title}</Title>
        <div>{children}</div>
      </div>
    </div>
  );
};
