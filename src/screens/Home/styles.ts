import styled, { css } from "styled-components/native";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowUpRight } from "phosphor-react-native";

interface SummaryVariantStyleProps {
  variant: "PRIMARY" | "SECONDARY";
}

export const Container = styled(SafeAreaView)`
  padding: 0 32px;

  flex: 1;
  background: ${({ theme }) => theme.colors.gray_100};
`;

export const SummaryContainer = styled.View<SummaryVariantStyleProps>`
  margin-top: 20px;
  border-radius: 8px;

  background: ${({ theme, variant }) =>
    variant === "PRIMARY" ? theme.colors.green_light : theme.colors.red_light};
`;

export const StatsButton = styled(TouchableOpacity)`
  position: absolute;
  top: 8px;
  right: 8px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(ArrowUpRight).attrs<SummaryVariantStyleProps>(
  ({ theme, variant }) => ({
    size: 32,
    color:
      variant === "PRIMARY" ? theme.colors.green_dark : theme.colors.red_dark
  })
)<SummaryVariantStyleProps>``;

export const Title = styled.Text`
  margin-top: 42px;

  ${({ theme }) => css`
    font-size: ${theme.font_size.LG}px;
    font-family: ${theme.font_family.regular};
  `}
`;

export const SectionTitle = styled.Text`
  margin-top: 20px;

  ${({ theme }) => css`
    font-size: ${theme.font_size.LG}px;
    font-family: ${theme.font_family.bold};
  `}
`;
