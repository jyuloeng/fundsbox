import styled from "@emotion/styled/macro";

export type TypographyProps = {
  bold?: boolean;
};

const BasicText = styled.span<TypographyProps>`
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  color: ${(props) => props.theme.colors.text};
`;

export const HeadingText = styled(BasicText)`
  font-size: 32px;
  line-height: 40px;
`;

export const IntroText = styled(BasicText)`
  font-size: 24px;
  line-height: 32px;
`;

export const CaptionText = styled(BasicText)`
  font-size: 20px;
  line-height: 28px;
`;

export const MediumText = styled(BasicText)`
  font-size: 16px;
  line-height: 24px;
`;

export const InfoText = styled(BasicText)`
  font-size: 14px;
  line-height: 22px;
`;

export const SmallText = styled(BasicText)`
  font-size: 10px;
  line-height: 18px;
`;
