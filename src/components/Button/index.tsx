import { TouchableOpacityProps } from "react-native";

import { ButtonStylesProps, ButtonText, Container } from "./styles";

interface ButtonProps extends ButtonStylesProps, TouchableOpacityProps {
  text: string;
}

export function Button({
  text,
  marginTop,
  variant = "PRIMARY",
  ...props
}: ButtonProps) {
  return (
    <Container marginTop={marginTop} variant={variant} {...props}>
      <ButtonText variant={variant}> {text} </ButtonText>
    </Container>
  );
}
