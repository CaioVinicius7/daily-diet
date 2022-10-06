import { TouchableOpacityProps } from "react-native";

import { ButtonStylesProps, ButtonText, Container } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  marginTop: ButtonStylesProps;
}

export function Button({ text, marginTop, ...props }: ButtonProps) {
  return (
    <Container marginTop={marginTop} {...props}>
      <ButtonText> {text} </ButtonText>
    </Container>
  );
}
