import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { Title } from "../../ui/title/Title";
import styles from "../information-page/InformationPage.module.css";
import { TabOne } from "../../features/tabs/TabOne";
import { TabTwo } from "../../features/tabs/TabTwo";
import { TabThree } from "../../features/tabs/TabThree";
import { Tabs } from "../../features/tabs/Tabs";
import { useState } from "react";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

const tabs: TabsType = [
  {
    label: "Tab One",
    index: 1,
    Component: TabOne,
  },
  {
    label: "Tab Two",
    index: 2,
    Component: TabTwo,
  },
  {
    label: "Tab Three",
    index: 3,
    Component: TabThree,
  },
];

type InformationPageProps = {};

export const InformationPage: React.FC<InformationPageProps> = () => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  return (
    <div className={styles.wrapper}>
      <ContentTemplate
        title={<Title className={styles.title}>Information</Title>}
      >
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </ContentTemplate>
    </div>
  );
};
