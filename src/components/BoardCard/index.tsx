import React from "react";
import styled from "@emotion/styled/macro";
import Space from "../Space";
import ProgressBar from "../ProgressBar";

import { CaptionText, HeadingText, MediumText } from "../../styles/typography";
import { dangerColor, successColor } from "../../styles/colors";
import { transitionStyles } from "../../styles/common";

import { formatAmount } from "../../utils/format";

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
        <Title>{title}</Title>

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
  ${transitionStyles}
`;

const Caption = styled(MediumText)`
  color: ${(props) => props.theme.colors.text};
  opacity: 0.6;
  ${transitionStyles}
`;

const Title = styled(CaptionText)`
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  ${transitionStyles}
`;

const PercentChange = styled(HeadingText)`
  margin-bottom: 12px;
  ${transitionStyles}
`;

const Container = styled.div<Partial<Props>>`
  width: 244px;
  padding: 12px;
  color: ${(props) => (props.type === "rise" ? dangerColor : successColor)};
  ${transitionStyles}
`;
