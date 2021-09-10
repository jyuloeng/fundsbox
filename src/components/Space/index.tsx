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
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => (justify ? justify : "normal")};
  align-items: ${({ align }) => (align ? align : "normal")};
  gap: ${({ gap }) => `${typeof gap === "string" ? spaceGap[gap] : gap}px`};
`;
