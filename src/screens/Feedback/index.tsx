import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "@components/Button";

import { Container, Title, SubTitle, BoldText, FeedbackImage } from "./styles";

import positiveFeedback from "../../assets/positive-feedback.png";
import negativeFeedback from "../../assets/negative-feedback.png";

interface RouteParams {
  insideDiet: boolean;
}

export function Feedback() {
  const route = useRoute();
  const navigation = useNavigation();

  const { insideDiet } = route.params as RouteParams;

  function handleGoToHome() {
    navigation.navigate("home");
  }

  return insideDiet ? (
    <Container>
      <Title variant="PRIMARY"> Continue assim! </Title>
      <SubTitle>
        Você continua<BoldText> dentro da dieta</BoldText>. Muito bem!
      </SubTitle>
      <FeedbackImage source={positiveFeedback} />
      <Button
        text="Ir para a página inicial"
        marginTop="30px"
        onPress={handleGoToHome}
      />
    </Container>
  ) : (
    <Container>
      <Title variant="SECONDARY"> Que pena! </Title>
      <SubTitle>
        Você<BoldText> saiu da dieta </BoldText>dessa vez, mas continue se
        esforçando e não desista!
      </SubTitle>
      <FeedbackImage source={negativeFeedback} />
      <Button
        text="Ir para a página inicial"
        marginTop="30px"
        onPress={handleGoToHome}
      />
    </Container>
  );
}
