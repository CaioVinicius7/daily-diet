import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { ButtonIconStyleProps, Container, Icon, Text } from "./styles";

interface ButtonIconProps extends TouchableOpacityProps {
  text: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: ButtonIconStyleProps;
}

export function ButtonIcon({
  text,
  icon,
  variant = "PRIMARY",
  ...props
}: ButtonIconProps) {
  return (
    <Container variant={variant} {...props}>
      <Icon variant={variant} name={icon} />
      <Text variant={variant}> {text} </Text>
    </Container>
  );
}
