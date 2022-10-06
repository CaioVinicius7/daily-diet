import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type MealStylesProps = "PRIMARY" | "SECONDARY";

interface MealProps {
  variant: MealStylesProps;
}

export const Container = styled(SafeAreaView)<MealProps>`
  flex: 1;
  background: ${({ theme, variant }) =>
    variant === "PRIMARY" ? theme.colors.green_light : theme.colors.red_light};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.XL}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `}

  padding: 27.5px 32px 0;
  text-align: center;
`;

export const DataContainer = styled.View`
  flex: 1;

  padding: 45px 32px 10px;
  margin-top: 20px;

  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: ${({ theme }) => theme.colors.gray_100};
`;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.XL}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `}
`;

export const MealSubTitle = styled.Text`
  margin-top: 30px;

  ${({ theme }) => css`
    font-size: ${theme.font_size.MD}px;
    font-family: ${theme.font_family.bold};
    color: ${theme.colors.gray_700};
  `}
`;

export const MealText = styled.Text`
  padding: 5px;

  ${({ theme }) => css`
    font-size: ${theme.font_size.LG}px;
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.gray_600};
  `}
`;
