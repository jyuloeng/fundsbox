import React from "react";
import styled from "@emotion/styled/macro";
import { getIconUnicodeByName } from "./lib";

type Props = {
  name: IconName;
  size?: number;
};

const Icon: React.FC<Props> = ({ name, size }) => {
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
  font-size: ${({ size }) => (size ? `${size}px` : "inherit")};
  font-style: normal;
  line-height: ${({ size }) => (size ? `${size}px` : "inherit")};
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
`;
