import React from "react";
import styled from "@emotion/styled/macro";
import Space from "@components/Space";
import ProgressBar from "@components/ProgressBar";

import { CaptionText, HeadingText, MediumText } from "@styles/typography";
import { dangerColor, successColor } from "@styles/colors";
import { transitionStyles } from "@styles/common";

import { formatAmount } from "@utils/format";

type Props = {
  type?: "rise" | "fell";
  title: string;
  caption?: string;
  amountChange: string;
  percentChange: number;
};

const BoardCard: React.FC<Props> = ({
  type = "rise",
  title,
  caption,
  amountChange,
  percentChange,
}) => {
  const renderPercent = () => {
    return type === "rise" ? `+${percentChange}%` : `-${percentChange}%`;
  };

  const renderCaption = () => {
    if (!caption) {
      return type === "rise" ? "主力净流入：" : "主力净流出：";
    }
    return caption;
  };

  const renderProgress = () => {
    return type === "rise" ? dangerColor : successColor;
  };

  return (
    <Container type={type}>
      <PercentChange bold>{renderPercent()}</PercentChange>
      <Space direction="column" gap="small">
        <Title medium>{title}</Title>

        <Space style={{ marginBottom: 16 }}>
          <Caption>{renderCaption()}</Caption>
          <AmountChange>{formatAmount(amountChange)}</AmountChange>
        </Space>
      </Space>

      <ProgressBar percent={percentChange} strokeColor={renderProgress()} />
    </Container>
  );
};

export default BoardCard;

const AmountChange = styled(MediumText)`
  font-weight: 600;
  color: inherit;
  ${transitionStyles}
`;

const Caption = styled(MediumText)`
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  ${transitionStyles}
`;

const Title = styled(CaptionText)`
  color: ${({ theme }) => theme.colors.text};
  ${transitionStyles}
`;

const PercentChange = styled(HeadingText)`
  margin-bottom: 12px;
  color: inherit;
  ${transitionStyles}
`;

const Container = styled.div<Partial<Props>>`
  width: 244px;
  padding: 12px;
  color: ${({ type }) => (type === "rise" ? dangerColor : successColor)};
  border-radius: 6px;
  cursor: pointer;
  ${transitionStyles}

  &:hover {
    transform: scale(1.06);
    box-shadow: ${({ theme }) => theme.colors.cardShadow};
  }
`;
