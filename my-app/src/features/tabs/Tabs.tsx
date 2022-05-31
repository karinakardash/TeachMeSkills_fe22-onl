import { useState } from "react";
import { PrimaryButton } from "../../ui/button/primary-button/PrimaryButton";
import style from "./Tabs.module.css";

type TabsProps = {
  tabs: {
    label: string;
    index: number;
    Component: React.FC<{ index: number }>;
  }[];
  selectedTab: number;
  onClick: (index: number) => void;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs = [],
  selectedTab = 0,
  onClick,
}) => {
  const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

  return (
    <div>
      <div className={style.buttons}>
        {tabs.map((tab) => (
          <PrimaryButton
            className={
              selectedTab === tab.index
                ? `${style.btn__active}`
                : `${style.btn}`
            }
            onClick={() => onClick(tab.index)}
            key={tab.index}
            type="button"
          >
            {tab.label}
          </PrimaryButton>
        ))}
      </div>
      <div>{Panel && <Panel.Component index={selectedTab} />}</div>
    </div>
  );
};
