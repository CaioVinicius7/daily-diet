import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { BackButtonStylesProps, Container, Icon } from "./styles";

interface BackButtonProps extends TouchableOpacityProps {
  variant: BackButtonStylesProps;
}

export function BackButton({ variant, ...props }: BackButtonProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container onPress={handleGoBack} {...props}>
      <Icon variant={variant} />
    </Container>
  );
}
