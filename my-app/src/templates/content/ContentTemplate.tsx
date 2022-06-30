import { Title } from "../../ui/title/Title";
import styles from "../content/ContentTemplate.module.css";
import { Header } from "../../features/header/Header";

type ContentTemplateProps = {
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

export const ContentTemplate: React.FC<ContentTemplateProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div className={styles.container}>
      {title}
      <div className={className}>{children}</div>
    </div>
  );
};
