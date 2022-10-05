import { TextInputProps } from "react-native";

import { Container } from "./styles";

interface InputProps extends TextInputProps {
  isTextarea?: boolean;
}

export function Input({ isTextarea = false, ...props }: InputProps) {
  return <Container isTextarea={isTextarea} {...props} />;
}
