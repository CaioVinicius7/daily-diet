import styled, { css } from "styled-components/native";

interface InsideDietButtonStylesProps {
  variant: "PRIMARY" | "SECONDARY";
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;

  padding: 25px 32px;
  margin-top: 20px;

  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: ${({ theme }) => theme.colors.gray_100};
`;

export const Label = styled.Text`
  width: 100%;
  margin-top: 25px;

  ${({ theme }) => css`
    color: ${theme.colors.gray_600};
    font-size: ${theme.font_size.MD}px;
    font-family: ${theme.font_family.bold};
  `}
`;

export const DoubleColumnContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const InputGroup = styled.View`
  width: 47%;
`;

export const InsideDietButton = styled.TouchableOpacity<InsideDietButtonStylesProps>`
  margin-top: 6px;
  padding: 16px;

  width: 47.5%;
  border-radius: 6px;
  border-width: 1px;

  ${({ theme, variant, isActive }) => css`
    background: ${isActive === false
      ? theme.colors.gray_200
      : variant === "PRIMARY"
      ? theme.colors.green_light
      : theme.colors.red_light};

    border-color: ${isActive === false
      ? theme.colors.gray_200
      : variant === "PRIMARY"
      ? theme.colors.green_dark
      : theme.colors.red_dark};
  `}

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface ButtonCircleStyleProps {
  variant: "PRIMARY" | "SECONDARY";
}

export const ButtonCircle = styled.View<ButtonCircleStyleProps>`
  margin-right: 4px;

  width: 8px;
  height: 8px;
  border-radius: 9999px;

  background: ${({ theme, variant }) =>
    variant === "PRIMARY" ? theme.colors.green_dark : theme.colors.red_dark};
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.MD}px;
    color: ${theme.colors.gray_700};
  `}
`;

export const ErrorText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.SM}px;
    color: ${theme.colors.red_error};
  `}
`;
