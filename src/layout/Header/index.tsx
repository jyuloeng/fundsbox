import React from "react";
import styled from "@emotion/styled/macro";

type Props = {};

const Header: React.FC<Props> = () => {
  return <Container>header</Container>;
};

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
