import React from "react";
import styled from "@emotion/styled/macro";
import { HeadingText } from "styles/typography";

const MarketPage: React.FC = () => {
  return (
    <Container>
      <HeadingText bold>MarketPage</HeadingText>
    </Container>
  );
};

export default MarketPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
