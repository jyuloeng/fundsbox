import React from "react";
import styled from "@emotion/styled/macro";

import { transitionStyles } from "@styles/common";

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
  width: 100%;
  height: var(--progress-hegiht);
  border-radius: calc(var(--progress-hegiht) / 2);
  background-color: ${({ theme, strokeColor }) =>
    strokeColor ? strokeColor : theme.colors.primary};
  transform: ${(props) => `translateX(${props.percent * 10 - 100}%)`};
  will-change: transform;
  ${transitionStyles}
`;

const Container = styled.div<Partial<Props>>`
  --progress-hegiht: 12px;

  position: relative;
  width: 100%;
  height: var(--progress-hegiht);
  border-radius: calc(var(--progress-hegiht) / 2);
  background-color: ${({ theme, trailColor }) =>
    trailColor ? trailColor : theme.colors.background};
  overflow: hidden;
  ${transitionStyles}
`;
