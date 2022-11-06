import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin: 24px 32px 24px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.XL}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `}
`;
