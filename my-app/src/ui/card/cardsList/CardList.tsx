import styles from "./CardList.module.css";
import { Card } from "../Card";

export const CardList: React.FC = () => {
  const posts = [
    {
      id: 1,
      image: "https://ktonanovenkogo.ru/image/finik.jpg",
      text: "Text text text text text text texext text text text text text texext text text text text text texext text text text text text texext text text text text text text text text text text",
      date: "12.05.2022",
      title: "Title title title",
    },
    {
      id: 2,
      image:
        "https://cdnn21.img.ria.ru/images/155066/99/1550669906_0:206:2907:1841_600x0_80_0_0_a828272434b06c6c5a3be36d8dae65b4.jpg",
      text: "Text bla bla ext text text text text text texext text text text text text texbext text text text text text texla t text text",
      date: "20.05.2022",
      title: "Title title title",
    },
    {
      id: 3,
      image:
        "https://www.belanta.vet/vet-blog/wp-content/uploads/2019/09/5-4.jpg",
      text: "Text text ffvfv fvfvfv fvvfvf fvvffv ext text text text text text texext text text text text text texjb fkfkg fljglfgj lfjgl ext",
      date: "22.04.2022",
      title: "Title title title",
    },
    {
      id: 4,
      text: "Text textjnjn fjndfjnf rfvvfvdfv dfvdfvfd fvdfvdf dfvfvdfv fjb fkfkg fljglfgj lfjgl ext",
      date: "02.05.2022",
      title: "Title title title",
    },
    {
      id: 5,
      image:
        "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1101236/e1e09992d39f539b736c891a42960a39/960x540",
      text: "Text text fjbfffv fvfvfv fvfvfv fvfvfv fvfvfv fvfvfv fvfvf fvfvf fvfvfv fvfvfv fvffv fvfvf  fkfkg fljglfgj lfjgl ext",
      date: "10.05.2022",
      title: "Title title title",
    },
  ];
  return (
    <div className={styles.cardList}>
      {posts.map((post) => (
        <Card
          id={post.id}
          key={post.id}
          image={post.image}
          text={post.text}
          date={post.date}
          title={post.title}
        ></Card>
      ))}
    </div>
  );
};
