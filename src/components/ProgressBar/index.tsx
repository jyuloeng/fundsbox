import React from "react";
import styled from "@emotion/styled/macro";

import { transitionStyles } from "../../styles/common";

type Props = {
  percent: number;
  strokeColor?: string;
  trailColor?: string;
};

const ProgressBar: React.FC<Props> = ({ percent, strokeColor, trailColor }) => {
  return (
    <Container trailColor={trailColor}>
      <Progress percent={percent} strokeColor={strokeColor} />
    </Container>
  );
};

export default ProgressBar;

const Progress = styled.div<Props>`
  position: absolute;
  width: ${(props) => `${props.percent * 10}%`};
  height: var(--progress-hegiht);
  border-radius: calc(var(--progress-hegiht) / 2);
  background-color: ${(props) =>
    props.strokeColor ? props.strokeColor : props.theme.colors.primary};
  ${transitionStyles}
`;

const Container = styled.div<Partial<Props>>`
  --progress-hegiht: 12px;

  position: relative;
  width: 100%;
  height: var(--progress-hegiht);
  border-radius: calc(var(--progress-hegiht) / 2);
  background-color: ${(props) =>
    props.trailColor ? props.trailColor : props.theme.colors.background};
  ${transitionStyles}
`;
