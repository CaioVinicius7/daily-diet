import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.gray_700};
    font-size: ${theme.font_size.xl2}px;
    font-family: ${theme.font_family.bold};
  `}
`;

export const Subtitle = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.font_size.MD}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_600};
  `}
`;
