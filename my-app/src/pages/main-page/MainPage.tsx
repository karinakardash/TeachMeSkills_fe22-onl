import { PrimaryButton } from "../../ui/button/primary-button/PrimaryButton";
import { Picture } from "../../ui/picture/Picture";
import { Title } from "../../ui/title/Title";
import photo from "../../ui/picture/pictureimg.png";

import styles from "../main-page/MainPage.module.css";
import { ContentTemplate } from "../../templates/content/ContentTemplate";

export const MainPage: React.FC = () => {
  return (
    <section className={styles.main}>
      <ContentTemplate
        className={styles.container}
        title={<Title className={styles.title}>Make Your Blog Onilne</Title>}
      >
        <div className={styles.item}>
          <p className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            at nostrum provident quos nulla quasi. Nemo enim doloremque, quasi
            neque dicta, nesciunt, consectetur explicabo velit tenetur tempora
            non laborum aspernatur? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Repellat at nostrum provident quos nulla quasi.
            Nemo enim doloremque, quasi neque dicta, nesciunt, consectetur
            explicabo velit tenetur tempora non laborum aspernatur?
          </p>
          <PrimaryButton onClick={() => console.log(1234)}>
            Learn More
          </PrimaryButton>
        </div>
        <div className={styles.item}>
          <Picture src={photo}></Picture>
        </div>
      </ContentTemplate>
    </section>
  );
};
