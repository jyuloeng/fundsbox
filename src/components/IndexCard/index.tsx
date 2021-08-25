import React from "react";
import styled from "@emotion/styled/macro";
import Space from "../Space";
import Icon from "../Icon";

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
  return (
    <Container direction="column" gap={24}>
      <Header align="center" gap="large">
        <Logo>{logo}</Logo>

        <Space direction="column">
          <Title>{title}</Title>
          <Code>{code}</Code>
        </Space>
      </Header>

      <Footer justify="space-between">
        <Space direction="column">
          <CurrentIndex type={type}>{currentIndex.toFixed(2)}</CurrentIndex>
          <LastUpdatedTime>数据更新于：2021/8/24 11:30</LastUpdatedTime>
        </Space>

        <Change align="center" gap="small" type={type}>
          <IconChange type={type}>
            <Icon name="round-arrow" />
          </IconChange>
          <Space direction="column" align="center">
            <IndexChange>{indexChange.toFixed(2)}</IndexChange>
            <PercentChange>{percentChange.toFixed(2)}%</PercentChange>
          </Space>
        </Change>
      </Footer>
    </Container>
  );
};

export default IndexCard;

const PercentChange = styled.span`
  font-size: 14px;
  line-height: 22px;
  font-weight: 500;
  transition: all 0.3s;
`;

const IndexChange = styled.span`
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  transition: all 0.3s;
`;

const IconChange = styled.div<Partial<Props>>`
  transition: all 0.3s;
  transform: ${(props) => props.type === "fell" && "rotate(180deg)"};
`;

const Change = styled(Space)<Partial<Props>>`
  color: ${(props) => (props.type === "rise" ? "#ff6f6f" : "#5AD380")};
`;

const LastUpdatedTime = styled.span`
  font-size: 10px;
  line-height: 18px;
  color: rgba(77, 83, 85, 0.5);
`;

const CurrentIndex = styled.span<Partial<Props>>`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: ${(props) => (props.type === "rise" ? "#ff6f6f" : "#5AD380")};
  transition: all 0.3s;
`;

const Code = styled.span`
  font-size: 14px;
  line-height: 22px;
  color: rgba(77, 83, 85, 0.6);
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  color: #2d3436;
`;

const Logo = styled.div`
  width: 48px;
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  background-color: #f4f5f7;
  border-radius: 50%;
`;

const Footer = styled(Space)`
  width: 100%;
`;

const Header = styled(Space)`
  width: 100%;
`;

const Container = styled(Space)`
  width: 296px;
  padding: 16px;
  box-shadow: 0px 8px 16px -6px rgba(77, 83, 85, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
`;
