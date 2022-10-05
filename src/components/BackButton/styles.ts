import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export type BackButtonStylesProps = "PRIMARY" | "SECONDARY" | "TERTIARY";

interface BackButtonProps {
  variant: BackButtonStylesProps;
}

export const Container = styled(TouchableOpacity)`
  padding: 8px;
  width: 50px;
  height: 50px;

  align-items: center;
  justify-content: center;
`;

const iconColor = {
  PRIMARY: "#639339",
  SECONDARY: "#bf3b44",
  TERTIARY: "#333638"
};

export const Icon = styled(ArrowLeft).attrs<BackButtonProps>(
  ({ theme, variant }) => ({
    size: 28,
    color: iconColor[variant]
  })
)<BackButtonProps>``;
