import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconStyleProps = "PRIMARY" | "SECONDARY";

interface ButtonIconProps {
  variant: ButtonIconStyleProps;
  marginTopAuto?: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonIconProps>`
  margin-top: ${({ theme, marginTopAuto }) => (marginTopAuto ? "auto" : "6px")};
  margin-bottom: 6px;

  width: 100%;
  padding: 18px;
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ theme, variant }) =>
    variant === "PRIMARY"
      ? css`
          border: 1px solid transparent;
          background-color: ${theme.colors.gray_600};
        `
      : css`
          border: 1px solid ${theme.colors.gray_600};
          background-color: ${theme.colors.gray_100};
        `};
`;

export const Icon = styled(MaterialIcons).attrs<ButtonIconProps>(
  ({ theme, variant }) => ({
    size: 24,
    color: variant === "PRIMARY" ? theme.colors.white : theme.colors.gray_700
  })
)`
  padding-right: 4px;
`;

export const Text = styled.Text<ButtonIconProps>`
  ${({ theme, variant }) => css`
  font-size: ${({ theme }) => theme.font_size.LG}px;
  font-family: ${({ theme }) => theme.font_family.bold};
  color: ${variant === "PRIMARY" ? theme.colors.white : theme.colors.gray_700};}
`}
`;
