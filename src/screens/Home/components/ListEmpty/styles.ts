import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 40px;

  flex: 1;
`;

export const NotFoundImage = styled.Image`
  align-self: center;
`;

export const Title = styled.Text`
  margin-top: 10px;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.font_size.LG}px;
    font-family: ${theme.font_family.bold};
  `}
`;

export const SubTitle = styled.Text`
  margin-top: 4px;
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.font_size.MD}px;
    font-family: ${theme.font_family.regular};
  `}
`;
