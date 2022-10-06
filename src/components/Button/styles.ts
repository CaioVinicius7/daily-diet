import { Text, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export interface ButtonStylesProps {
  marginTop?: "auto" | `${number}px`;
  variant?: "PRIMARY" | "SECONDARY";
}

export interface ButtonTextStylesProps {
  variant?: "PRIMARY" | "SECONDARY";
}

export const Container = styled(TouchableOpacity)<ButtonStylesProps>`
  padding: 16px 24px;
  border-width: 1px;
  border-radius: 6px;

  ${({ theme, marginTop, variant }) => css`
    margin-top: ${marginTop === "auto" ? "auto" : marginTop};
    border-color: ${variant === "PRIMARY"
      ? theme.colors.gray_600
      : theme.colors.gray_700};
    background: ${variant === "PRIMARY"
      ? theme.colors.gray_600
      : theme.colors.gray_100};
  `}

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled(Text)<ButtonTextStylesProps>`
  ${({ theme, variant }) => css`
    font-size: ${theme.font_size.MD}px;
    font-family: ${theme.font_family.bold};
    color: ${variant === "PRIMARY"
      ? theme.colors.white
      : theme.colors.gray_700};
  `}
`;
