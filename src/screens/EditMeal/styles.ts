import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.colors.gray_300};
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
