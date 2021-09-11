import React, { useState } from "react";
import styled from "@emotion/styled/macro";

import IndexCard from "@components/IndexCard";
import Indicator from "@components/Indicator";
import Icon from "@components/Icon";

import { transitionStyles } from "@styles/common";

import { GetComponentProps } from "@utils/index";

type Props = {
  total: number;
};

type CompoundComponentProps = {
  Card: React.FC<GetComponentProps<typeof IndexCard>>;
};

const IndexScroller: React.FC<Props> & CompoundComponentProps = ({
  total,
  children,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  const handlePrev = (number: number) => {
    if (activeIndex === 0) return;
    const index = activeIndex - number;
    setActiveIndex(index);
    // 三个 IndexCard 一组进行切换
    setTranslateX(translateX + 960 * number);
  };

  const handleNext = (number: number) => {
    if (activeIndex === total - 1) return;
    const index = activeIndex + number;
    setActiveIndex(index);
    // 三个 IndexCard 一组进行切换
    setTranslateX(translateX - 960 * number);
  };

  const handleIndicatorClick = (index: number) => {
    if (index === activeIndex) return;

    if (index < activeIndex) {
      handlePrev(activeIndex - index);
    } else if (index > activeIndex) {
      handleNext(index - activeIndex);
    }
  };

  return (
    <Container>
      <Body>
        <PrevButton disabled={activeIndex === 0} onClick={() => handlePrev(1)}>
          <Icon name="arrow" />
        </PrevButton>

        <CardsWrapper>
          <CardsContainer style={{ transform: `translateX(${translateX}px)` }}>
            {children}
          </CardsContainer>
        </CardsWrapper>

        <NextButton
          disabled={activeIndex === total - 1}
          onClick={() => handleNext(1)}
        >
          <Icon name="arrow" />
        </NextButton>
      </Body>

      <Indicator
        activeIndex={activeIndex}
        total={total}
        onDotClick={handleIndicatorClick}
      />
    </Container>
  );
};

IndexScroller.Card = IndexCard;

export default IndexScroller;

const CardsContainer = styled.div`
  white-space: nowrap;
  ${transitionStyles}

  & > div:not(:last-of-type) {
    margin-right: 24px;
  }
`;

const CardsWrapper = styled.div`
  position: relative;
  width: 944px;
  padding: 12px 4px;
  overflow-x: hidden;
`;

const Button = styled.div<{ disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text2};
  background-color: ${({ theme }) => theme.colors.background2};
  border-radius: 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: 0;
  ${transitionStyles}
`;

const NextButton = styled(Button)`
  & i {
    transform: rotate(180deg);
  }
`;

const PrevButton = styled(Button)``;

const Body = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  &:hover {
    ${NextButton},
    ${PrevButton} {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
