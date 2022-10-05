import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

interface ContainerAndCardStylesProps {
  variant: "PRIMARY" | "SECONDARY";
}

export const Container = styled(SafeAreaView)<ContainerAndCardStylesProps>`
  flex: 1;
  background: ${({ theme, variant }) =>
    variant === "PRIMARY" ? theme.colors.green_light : theme.colors.red_light};
`;

export const HeaderContainer = styled.View`
  padding: 7.5px 32px 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.xl2}px;
    font-family: ${theme.font_family.bold};
  `}

  text-align: center;
  margin-top: -10px;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.font_size.MD}px;
    font-family: ${theme.font_family.regular};
  `}

  text-align: center;
  margin-top: 5px;
`;

export const StatsContainer = styled.View`
  flex: 1;

  padding: 0 32px;
  margin-top: 40px;

  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: ${({ theme }) => theme.colors.gray_100};
`;

export const StatsTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_700};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.MD}px;

    text-align: center;
    margin: 30px 0 20px;
  `}
`;

export const Card = styled.View`
  width: 100%;
  margin-bottom: 15px;

  background: ${({ theme }) => theme.colors.gray_200};
  border-radius: 8px;
  padding: 20px;
  text-align: center;
`;

export const CardTitle = styled.Text`
  font-size: 24px;
  text-align: center;
  font-family: ${({ theme }) => theme.font_family.bold};

  padding: 5px 0;
`;

export const SecondaryCardsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ColoredCard = styled.View<ContainerAndCardStylesProps>`
  width: 47.5%;
  padding: 17.5px;

  border-radius: 8px;
  background: ${({ theme, variant }) =>
    variant === "PRIMARY" ? theme.colors.green_light : theme.colors.red_light};
`;
