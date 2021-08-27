import React from "react";
import styled from "@emotion/styled/macro";
import { HeadingText } from "../../styles/typography";

const SelfSelectedPage: React.FC = () => {
  return (
    <Container>
      <HeadingText bold>SelfSelectedPage</HeadingText>
    </Container>
  );
};

export default SelfSelectedPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
