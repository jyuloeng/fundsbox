import React from "react";
import styled from "@emotion/styled/macro";
import { HeadingText } from "@styles/typography";

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <HeadingText bold>Not Found</HeadingText>
    </Container>
  );
};

export default NotFoundPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
