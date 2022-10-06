import styled, { css } from "styled-components/native";

interface InsideDietStatusStyleProps {
  insideDiet: boolean;
}

export const Container = styled.View`
  margin-top: 20px;
  padding: 8px 16px;
  width: 150px;
  border-radius: 9999px;
  background: ${({ theme }) => theme.colors.gray_200};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StatusCircle = styled.View<InsideDietStatusStyleProps>`
  margin-right: 10px;
  width: 8px;
  height: 8px;
  border-radius: 9999px;

  background-color: ${({ theme, insideDiet }) =>
    insideDiet ? theme.colors.green_dark : theme.colors.red_dark};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.MD}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_700};
  `}
`;
