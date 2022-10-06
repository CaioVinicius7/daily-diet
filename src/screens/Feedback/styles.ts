import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface FeedbackTitleStyleProps {
  variant: "PRIMARY" | "SECONDARY";
}

export const Container = styled(SafeAreaView)`
  padding: 0 32px;
  background: ${({ theme }) => theme.colors.gray_100};

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<FeedbackTitleStyleProps>`
  ${({ theme, variant }) => css`
    font-size: ${theme.font_size.XL2}px;
    font-family: ${theme.font_family.bold};
    color: ${variant === "PRIMARY"
      ? theme.colors.green_dark
      : theme.colors.red_dark};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_700};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.LG}px;
  `}

  text-align: center;
`;

export const BoldText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_700};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.LG}px;
  `}
`;

export const FeedbackImage = styled.Image`
  margin-top: 50px;
`;
