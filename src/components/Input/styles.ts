import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface InputProps {
  isTextarea: boolean;
}

export const Container = styled(TextInput)<InputProps>`
  border-radius: 6px;

  ${({ theme, isTextarea }) => css`
    height: ${isTextarea ? "122px" : "42px"};
    padding: ${isTextarea ? "8px 14px" : "4px 14px"};
    color: ${theme.colors.gray_700};
    font-size: ${theme.font_size.LG}px;
    font-family: ${theme.font_family.bold};
    border: 1px solid ${theme.colors.gray_300};
  `}
`;
