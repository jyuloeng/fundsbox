import React from "react";
import styled from "@emotion/styled/macro";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  min-height: 100vh;
`;
