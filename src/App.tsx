import React from "react";
import styled from "@emotion/styled/macro";

function App() {
  return (
    <Container>
      <Regular>Init FundsBox</Regular>
      <Medium>Init FundsBox</Medium>
      <Bold>Init FundsBox</Bold>

      <Regular>初始化项目</Regular>
      <Medium>初始化项目</Medium>
      <Bold>初始化项目</Bold>

      <Regular>1234567890</Regular>
      <Medium>1234567890</Medium>
      <Bold>1234567890</Bold>
    </Container>
  );
}

export default App;

const Bold = styled.p`
  font-weight: 700;
`;

const Medium = styled.p`
  font-weight: 500;
`;

const Regular = styled.p`
  font-weight: 400;
`;

const Container = styled.div`
  font-size: 32px;
  line-height: 40px;
`;
