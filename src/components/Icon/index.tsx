import React from "react";
import styled from "@emotion/styled/macro";
import { getIconUnicodeByName } from "./lib";

type Props = {
  name: IconName;
  size?: number;
};

const Icon: React.FC<Props> = ({ name, size = 16 }) => {
  return (
    <Container
      size={size}
      dangerouslySetInnerHTML={{ __html: getIconUnicodeByName(name) }}
    ></Container>
  );
};

export default Icon;

const Container = styled.i<Partial<Props>>`
  font-family: "iconfont" !important;
  font-size: ${({ size }) => `${size}px`};
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
`;
