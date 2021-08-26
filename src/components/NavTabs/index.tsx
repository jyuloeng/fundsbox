import React from "react";
import Space from "../Space";
import NavTab from "./components/NavTab";

import { GetComponentProps } from "../../utils";

type Props = {
  activeKey: string;
  tabs: GetComponentProps<typeof NavTab>[];
  onTabClick?: (key: string) => void;
};

const NavTabs: React.FC<Props> = ({ activeKey, tabs, onTabClick }) => {
  const handleTabClick = (key: string) => {
    onTabClick && onTabClick(key);
  };

  return (
    <Space gap={48}>
      {tabs.map((tab) => (
        <NavTab
          key={tab.tabKey}
          {...tab}
          active={tab.tabKey === activeKey}
          onClick={handleTabClick}
        />
      ))}
    </Space>
  );
};

export default NavTabs;

export { default as NavTab } from "./components/NavTab";
