import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { CardList } from "../../ui/card/cardsList/CardList";
import styles from "../content-main-page/MypostsPage.module.css";
import { PrimaryButton } from "../../ui/button/primary-button/PrimaryButton";

type MypostsPageProps = {};

export const MypostsPage: React.FC<MypostsPageProps> = () => {
  return (
    <div className={styles.wrapper}>
      <ContentTemplate title="My posts">
        <PrimaryButton>+Add</PrimaryButton>
      </ContentTemplate>
      <CardList></CardList>
    </div>
  );
};
