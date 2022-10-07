import { MaskedTextInput, MaskedTextInputProps } from "react-native-mask-text";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";

interface InputProps extends MaskedTextInputProps {}

export function MaskedInput({ ...props }: InputProps) {
  const { colors, font_size, font_family } = useTheme();

  return (
    <Container>
      <MaskedTextInput
        {...props}
        style={{
          color: colors.gray_700,
          fontSize: font_size.LG,
          fontFamily: font_family.regular
        }}
      />
    </Container>
  );
}
