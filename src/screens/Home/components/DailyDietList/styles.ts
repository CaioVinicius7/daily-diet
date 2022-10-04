import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.LG}px;
    font-family: ${theme.font_family.bold};
  `}
`;

export const DietCard = styled(TouchableOpacity)`
  width: 100%;
  margin: 4px 0;
  padding: 14px 10px;
  border-radius: 6px;
  border: 1.5px solid ${({ theme }) => theme.colors.gray_300};

  flex-direction: row;
  align-items: center;
`;

export const Hour = styled.Text`
  padding-right: 4px;
  border-right-width: 1.5px;

  ${({ theme }) => css`
    border-right-color: ${theme.colors.gray_300};
    font-size: ${theme.font_size.SM}px;
    font-family: ${theme.font_family.bold};
  `}
`;

export const Food = styled.Text`
  flex: 1;
  padding-left: 4px;
  padding-right: 20px;

  white-space: nowrap
    ${({ theme }) => css`
      font-size: ${({ theme }) => theme.font_size.LG}px;
      font-family: ${({ theme }) => theme.font_family.regular};
    `};
`;

interface StatusIndicatorProps {
  variant: "PRIMARY" | "SECONDARY";
}

export const StatusIndicator = styled.View<StatusIndicatorProps>`
  width: 16px;
  height: 16px;

  border-radius: 999px;
  background-color: ${({ theme, variant }) =>
    variant === "PRIMARY" ? theme.colors.green_mid : theme.colors.red_mid};
`;
