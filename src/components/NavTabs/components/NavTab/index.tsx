import React from "react";
import styled from "@emotion/styled/macro";

import { CaptionText } from "../../../../styles/typography";
import { transitionStyles } from "../../../../styles/common";

type Props = {
  tabKey: string;
  title: string;
  active?: boolean;
  onClick?: (key: string) => void;
};

const NavTab: React.FC<Props> = ({ tabKey, active, title, onClick }) => {
  const handleTabClick = () => {
    onClick && onClick(tabKey);
  };

  return (
    <Container onClick={handleTabClick}>
      <Title bold active={active}>
        {title}
      </Title>
      <Line active={active} />
    </Container>
  );
};

export default NavTab;

const Line = styled.div<Partial<Props>>`
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.primary : "transparent"};
  ${transitionStyles}
`;

const Title = styled(CaptionText)<Partial<Props>>`
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.text2};
  ${transitionStyles}
`;

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${Title} {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
