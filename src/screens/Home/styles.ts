import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gray_100};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_700};
    font-size: ${theme.font_size.xl2}px;
    font-family: ${theme.font_family.bold};
  `}
`;
