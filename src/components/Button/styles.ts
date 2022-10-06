import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonStylesProps = "auto" | `${number}px`;
interface ButtonProps {
  marginTop: ButtonStylesProps;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  border-radius: 6px;
  padding: 16px 24px;

  ${({ theme, marginTop }) => css`
    margin-top: ${marginTop};
    background: ${theme.colors.gray_600};
  `}

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.MD}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.white};
  `}
`;
