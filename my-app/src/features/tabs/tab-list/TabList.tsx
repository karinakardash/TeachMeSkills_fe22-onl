import { TabButtons } from "../../../types";
import { Tab } from "../tab/Tab";
import styles from "./TabList.module.css";

type TabListProps = {
  tabs: TabButtons[];
  selectedTab: TabButtons;
  onTabClick: (selectedTab: TabButtons) => void;
};

export const TabList: React.FC<TabListProps> = ({
  tabs,
  selectedTab,
  onTabClick,
}) => {
  return (
    <div className={styles.buttons}>
      {tabs.map((tab) => (
        <Tab
          onClick={() => onTabClick(tab)}
          key={tab}
          selected={selectedTab === tab}
        >
          {tab}
        </Tab>
      ))}
    </div>
  );
};
