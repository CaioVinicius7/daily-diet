import { TouchableOpacityProps } from "react-native";

import { BackButtonStylesProps, Container, Icon } from "./styles";

interface BackButtonProps extends TouchableOpacityProps {
  variant: BackButtonStylesProps;
}

export function BackButton({ variant, ...props }: BackButtonProps) {
  return (
    <Container {...props}>
      <Icon variant={variant} />
    </Container>
  );
}
