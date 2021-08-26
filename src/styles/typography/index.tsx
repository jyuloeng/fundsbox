import styled from "@emotion/styled/macro";
import { css } from "@emotion/react";

export type TypographyProps = {
  bold?: boolean;
};

const dynamicStyles = (props: TypographyProps) =>
  css`
    font-weight: ${props.bold ? "700" : "400"};
  `;

export const HeadingText = styled.h4`
  font-size: 32px;
  line-height: 40px;
  ${dynamicStyles}
`;

export const IntroText = styled.span`
  font-size: 24px;
  line-height: 32px;
  ${dynamicStyles}
`;

export const CaptionText = styled.span`
  font-size: 20px;
  line-height: 28px;
  ${dynamicStyles}
`;

export const MediumText = styled.span`
  font-size: 16px;
  line-height: 24px;
  ${dynamicStyles}
`;

export const InfoText = styled.span`
  font-size: 14px;
  line-height: 22px;
  ${dynamicStyles}
`;

export const SmallText = styled.span`
  font-size: 10px;
  line-height: 18px;
  ${dynamicStyles}
`;
