import React from "react";
import styled from "@emotion/styled/macro";

import { MediumText } from "@/styles/typography";

import hex2Rgba from "hex-to-rgba";

const Introduction: React.FC = () => {
  return (
    <Container>
      <MediumText>
        🤣
        <Crap> 在这里你可能可以看到你想要的或不想要的</Crap>
      </MediumText>
      <MediumText style={{ textDecoration: "line-through" }}>
        💪
        <Crap> 投资其实就是一次心态锻炼，稳住心态长期投资都会有收益的！</Crap>
      </MediumText>
      <MediumText>
        <Crap>股市有风险，入市需谨慎啊家人们~ </Crap>
        🤧
      </MediumText>
    </Container>
  );
};

export default Introduction;

const Crap = styled(MediumText)`
  color: ${({ theme }) => hex2Rgba(theme.colors.text, 0.6)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
