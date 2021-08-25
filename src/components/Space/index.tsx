import React from "react";
import styled from "@emotion/styled/macro";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  style?: React.CSSProperties;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  gap?: "none" | "small" | "middle" | "large" | number;
};

const spaceGap = {
  none: 0,
  small: 4,
  middle: 8,
  large: 12,
};

const Space: React.FC<Props> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default Space;

const Container = styled.div<Props>`
  display: inline-flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => (props.justify ? props.justify : "normal")};
  align-items: ${(props) => (props.align ? props.align : "normal")};
  gap: ${(props) =>
    `${typeof props.gap === "string" ? spaceGap[props.gap] : props.gap}px`};
`;
