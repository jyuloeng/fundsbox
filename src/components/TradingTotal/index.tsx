import React from "react";
import styled from "@emotion/styled/macro";
import Space from "../Space";

import { CaptionText, IntroText, MediumText } from "../../styles/typography";
import { dangerColor, successColor } from "../../styles/colors";
import { transitionStyles } from "../../styles/common";

import { formatAmount } from "../../utils/format";

type Props = {
  riseTotal: number;
  unchangeTotal: number;
  fellTotal: number;
  amountTotal: string;
};

const TradingTotal: React.FC<Props> = ({
  riseTotal,
  unchangeTotal,
  fellTotal,
  amountTotal,
}) => {
  const renderAmountTotalSummary = () => {
    if (+amountTotal > 1000000000000) {
      return "很 🔥 爆嘛！";
    } else if (+amountTotal > 800000000000) {
      return "还行还行 🌝";
    } else {
      return "一般般喔 🍜";
    }
  };

  return (
    <Space direction="column" gap="small">
      <Space align="baseline">
        <CaptionText bold>两市合计成交额达：</CaptionText>
        <AmountTotal bold>{`${formatAmount(amountTotal)}，`}</AmountTotal>

        <MediumText>{renderAmountTotalSummary()}</MediumText>
      </Space>

      <Space align="baseline">
        <RiseTotal bold>{riseTotal}</RiseTotal>
        <CaptionText bold>&nbsp;上涨，</CaptionText>

        <UnChangeTotal bold>{unchangeTotal}</UnChangeTotal>
        <CaptionText bold>&nbsp;平盘，</CaptionText>

        <FellTotal bold>{fellTotal}</FellTotal>
        <CaptionText bold>&nbsp;下跌，</CaptionText>

        <MediumText>你的呢？🤔</MediumText>
      </Space>
    </Space>
  );
};

const FellTotal = styled(CaptionText)`
  color: ${successColor};
  ${transitionStyles}
`;

const UnChangeTotal = styled(CaptionText)`
  color: ${(props) => props.theme.colors.text2};
  ${transitionStyles}
`;

const RiseTotal = styled(CaptionText)`
  color: ${dangerColor};
  ${transitionStyles}
`;

const AmountTotal = styled(IntroText)`
  ${transitionStyles}
`;

export default TradingTotal;
