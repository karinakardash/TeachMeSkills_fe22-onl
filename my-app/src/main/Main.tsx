import { H1 } from "./h1/H1";
import { Paragraph } from "./paragraph/Paragraph";
import { Button } from "./button/Button";
import { Picture } from "./picture/Picture";
import photo from "./picture/pictureimg.png";

import styles from "../main/Main.module.css";

export const Main: React.FC = () => {
  return (
    <section className={styles.main}>
      <div className={styles.item}>
        <H1>Lorem ipsum dolor sit amet.</H1>
        <Paragraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat at
          nostrum provident quos nulla quasi. Nemo enim doloremque, quasi neque
          dicta, nesciunt, consectetur explicabo velit tenetur tempora non
          laborum aspernatur?
        </Paragraph>
        <Button onClick={() => console.log(1234)}>Click me</Button>
      </div>
      <div className={styles.item}>
        <Picture src={photo}></Picture>
      </div>
    </section>
  );
};
