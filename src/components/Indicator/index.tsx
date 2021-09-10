import React from "react";
import styled from "@emotion/styled/macro";

import { useTheme } from "context/ThemeContext";

import {
  dangerColor,
  darkBackground2Color,
  lightBackground2Color,
} from "styles/colors";
import { transitionStyles } from "styles/common";

type Props = {
  activeIndex: number;
  total: number;
  onDotClick?: (index: number) => void;
};

const Indicator: React.FC<Props> = ({ activeIndex, total, onDotClick }) => {
  const { themeType } = useTheme();

  const handleDotClick = (index: number) => {
    onDotClick && onDotClick(index);
  };

  return (
    <Container>
      {Array.from(new Array(total).keys()).map((item, index) => (
        <Dot
          key={index}
          active={activeIndex === index}
          themeType={themeType}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </Container>
  );
};

export default Indicator;

const Dot = styled.div<{ themeType: Theme.ThemeType; active?: boolean }>`
  --indicator-size: 8px;

  width: var(--indicator-size);
  height: var(--indicator-size);
  border-radius: calc(var(--indicator-size) / 2);
  background-color: ${(props) =>
    props.themeType === "light" ? darkBackground2Color : lightBackground2Color};
  background-color: ${(props) => props.active && dangerColor};
  opacity: ${(props) => !props.active && 0.5};
  cursor: pointer;
  ${transitionStyles}
`;

const Container = styled.div`
  display: inline-flex;
  gap: 8px;
  padding: 12px;
`;
