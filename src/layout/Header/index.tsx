import React, { useMemo } from "react";
import styled from "@emotion/styled/macro";
import BrandSvg from "assets/images/Brand.svg";
import { useNavigate, useLocation } from "react-router";
import Space from "components/Space";
import NavTabs, { NavTab } from "components/NavTabs";

import { lightBackgroundColor } from "styles/colors";

import { GetComponentProps } from "utils";

const nabtabs: GetComponentProps<typeof NavTab>[] = [
  {
    tabKey: "/",
    title: "首页",
  },
  {
    tabKey: "/self",
    title: "自选",
  },
  {
    tabKey: "/market",
    title: "行情",
  },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navtabsActiveKey = useMemo(() => {
    return location.pathname;
  }, [location]);

  const handleTabClick = (key: string) => {
    navigate(key);
  };

  return (
    <Container>
      <Brand src={BrandSvg} />

      <NavTabs
        tabs={nabtabs}
        activeKey={navtabsActiveKey}
        onTabClick={handleTabClick}
      />

      <Space align="center" gap={20}>
        <NavSearch />
        <Avatar src="https://avatars.githubusercontent.com/u/52498784?s=60&v=4" />
      </Space>
    </Container>
  );
};

export default Header;

const NavSearch = styled.div`
  width: 208px;
  height: 38px;
  background-color: ${lightBackgroundColor};
  border-radius: 19px;
`;

const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

const Brand = styled.img`
  margin: 0 44px;
  line-height: 44px;
  cursor: pointer;
`;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px 16px;
`;
