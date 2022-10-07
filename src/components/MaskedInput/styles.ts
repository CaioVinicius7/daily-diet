import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 6px;
  height: 42px;
  padding: 4px 14px;
  border-radius: 6px;

  ${({ theme }) => css`
    color: ${theme.colors.gray_700};
    font-size: ${theme.font_size.LG}px;
    font-family: ${theme.font_family.regular};
    border: 1px solid ${theme.colors.gray_300};
  `}

  justify-content: center;
`;
