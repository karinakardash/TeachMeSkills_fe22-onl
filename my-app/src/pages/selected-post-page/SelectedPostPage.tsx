import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { Card } from "../../ui/card/Card";
import styles from "../selected-post-page/SelectedPostPage.module.css";

type SelectedPostPageProps = {};

export const SelectedPostPage: React.FC<SelectedPostPageProps> = () => {
  return (
    <div className={styles.wrapper}>
      <ContentTemplate title="Selected Post"></ContentTemplate>
      <Card
        className={styles.cardSelected}
        id="5"
        image="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101236/e1e09992d39f539b736c891a42960a39/960x540"
        text="Text text fjbfffv fvfvfv fvfvfv fvfvfv fvfvfv fvfvfv fvfvf fvfvf fvfvfv fvfvfv fvffv fvfvf  fkfkg fljglfgj lfjgl ext"
        date="10.05.2022"
        title="Title title title"
      ></Card>
    </div>
  );
};
