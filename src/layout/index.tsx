import React from "react";
import styled from "@emotion/styled/macro";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

import { containerStyles } from "../styles/common";

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </Wrapper>
  );
};

export default Layout;

const Container = styled.div`
  ${containerStyles}
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background2};
`;
