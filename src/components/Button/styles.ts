import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  margin-top: auto;

  border-radius: 6px;
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.gray_600};

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
