import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { ButtonIconStyleProps, Container, Icon, Text } from "./styles";

interface ButtonIconProps extends TouchableOpacityProps {
  text: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: ButtonIconStyleProps;
  marginTopAuto?: boolean;
}

export function ButtonIcon({
  text,
  icon,
  variant = "PRIMARY",
  marginTopAuto,
  ...props
}: ButtonIconProps) {
  return (
    <Container variant={variant} marginTopAuto={marginTopAuto} {...props}>
      <Icon variant={variant} name={icon} />
      <Text variant={variant}> {text} </Text>
    </Container>
  );
}
