import React from "react";
import styled from "@emotion/styled/macro";
import Space from "../../components/Space";
import Icon from "../../components/Icon";

import { MediumText } from "../../styles/typography";
import { containerStyles } from "../../styles/common";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Space direction="column" gap={24}>
          <Space direction="column" gap="small">
            <LightMediumText>本网站仅供娱乐使用～</LightMediumText>
            <Sponsor>当然你也可以请作者喝一杯咖啡 ☕️</Sponsor>
          </Space>

          <LightMediumText>Copyright @ 2021 odd.</LightMediumText>
        </Space>

        <Space>
          <Space align="center" gap={24}>
            <Contact align="center" gap="large">
              <Icon name="github" size={24} />
              <MediumText>Github</MediumText>
            </Contact>

            <Contact align="center" gap="large">
              <Icon name="wechat" size={24} />
              <MediumText>Wechat</MediumText>
            </Contact>
          </Space>
        </Space>
      </Container>
    </Wrapper>
  );
};

export default Footer;

const Contact = styled(Space)`
  color: ${(props) => props.theme.colors.text};
  opacity: 0.5;
  cursor: pointer;
`;

const LightMediumText = styled(MediumText)`
  opacity: 0.5;
`;

const Sponsor = styled(LightMediumText)`
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 44px 184px;
  ${containerStyles}
`;

const Wrapper = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.background};
`;
