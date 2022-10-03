import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  padding: 0 32px;

  flex: 1;
  background: ${({ theme }) => theme.colors.gray_100};
`;
