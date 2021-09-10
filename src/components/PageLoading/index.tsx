import React from "react";
import styled from "@emotion/styled/macro";
import { Player } from "@lottiefiles/react-lottie-player";

import { CaptionText } from "styles/typography";

import { GetComponentProps } from "utils";

const lottiePlayProps: GetComponentProps<Player> = {
  src: "https://assets3.lottiefiles.com/packages/lf20_dFnnfb.json",
  autoplay: true,
  loop: true,
  speed: 0.5,
  style: { width: 300, height: 300 },
};

const PageLoading: React.FC = () => {
  return (
    <Container>
      <Player {...lottiePlayProps} />
      <CaptionText>正在打开 fundsbox 中...</CaptionText>
    </Container>
  );
};

export default PageLoading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
