import { css } from "@emotion/react";

export const transitionStyles = () => css`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const containerStyles = () => css`
  margin: 0 auto;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  @media (min-width: 1536px) {
    max-width: 1536px;
  }
`;
