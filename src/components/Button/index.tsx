import { TouchableOpacityProps } from "react-native";
import { ButtonText, Container } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

export function Button({ text, ...props }: ButtonProps) {
  return (
    <Container {...props}>
      <ButtonText> {text} </ButtonText>
    </Container>
  );
}
