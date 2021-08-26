import React from "react";
import styled from "@emotion/styled/macro";
import Space from "../Space";
import Icon from "../Icon";

import { useTheme } from "../../context/ThemeContext";

import {
  CaptionText,
  InfoText,
  IntroText,
  SmallText,
} from "../../styles/typography";
import { transitionStyles } from "../../styles/common";
import { dangerColor, darkTextColor, successColor } from "../../styles/colors";

type Props = {
  type?: "rise" | "fell";
  logo: string;
  title: string;
  code: string;
  currentIndex: number;
  indexChange: number;
  percentChange: number;
  lastUpdatedTime: number;
};

const IndexCard: React.FC<Props> = ({
  type = "rise",
  logo,
  title,
  code,
  currentIndex,
  indexChange,
  percentChange,
  lastUpdatedTime,
}) => {
  const { themeType } = useTheme();

  return (
    <Container direction="column" gap={24} themeType={themeType}>
      <Header align="center" gap="large">
        <Logo>{logo}</Logo>

        <Space direction="column">
          <Title>{title}</Title>
          <Code>{code}</Code>
        </Space>
      </Header>

      <Footer justify="space-between">
        <Space direction="column">
          <CurrentIndex type={type} bold>
            {currentIndex.toFixed(2)}
          </CurrentIndex>
          <LastUpdatedTime>数据更新于：2021/8/24 11:30</LastUpdatedTime>
        </Space>

        <Change align="center" gap="small" type={type}>
          <IconChange type={type}>
            <Icon name="round-arrow" />
          </IconChange>
          <Space direction="column" align="center">
            <IndexChange bold>{indexChange.toFixed(2)}</IndexChange>
            <PercentChange>{percentChange.toFixed(2)}%</PercentChange>
          </Space>
        </Change>
      </Footer>
    </Container>
  );
};

export default IndexCard;

const PercentChange = styled(InfoText)`
  font-weight: 500;
  ${transitionStyles}
`;

const IndexChange = styled(CaptionText)`
  ${transitionStyles}
`;

const IconChange = styled.div<Partial<Props>>`
  ${transitionStyles}
  transform: ${(props) => props.type === "fell" && "rotate(180deg)"};
`;

const Change = styled(Space)<Partial<Props>>`
  color: ${(props) => (props.type === "rise" ? dangerColor : successColor)};
`;

const LastUpdatedTime = styled(SmallText)`
  color: ${(props) => props.theme.colors.text2};
  opacity: 0.5;
`;

const CurrentIndex = styled(IntroText)<Partial<Props>>`
  color: ${(props) => (props.type === "rise" ? dangerColor : successColor)};
  ${transitionStyles}
`;

const Code = styled(InfoText)`
  color: ${(props) => props.theme.colors.text2};
  opacity: 0.6;
`;

const Title = styled(CaptionText)`
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
`;

const Logo = styled.div`
  width: 48px;
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 50%;
`;

const Footer = styled(Space)`
  width: 100%;
`;

const Header = styled(Space)`
  width: 100%;
`;

const Container = styled(Space)<{ themeType: Theme.ThemeType }>`
  width: 296px;
  padding: 16px;
  background-color: ${(props) =>
    props.themeType === "light"
      ? darkTextColor
      : props.theme.colors.background2};
  box-shadow: ${(props) => props.theme.colors.cardShadow};
  border-radius: 6px;
  cursor: pointer;
  ${transitionStyles}

  &:hover {
    transform: translateY(-8px);
  }
`;
