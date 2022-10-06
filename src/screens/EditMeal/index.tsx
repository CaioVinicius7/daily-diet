import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Input } from "@components/Input";
import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";

import {
  Container,
  Form,
  DoubleColumnContainer,
  Label,
  Title,
  InputGroup,
  InsideDietButton,
  ButtonText,
  ButtonCircle
} from "./styles";

interface RouteParams {
  id: string;
}

export function EditMeal() {
  const [insideDiet, setInsideDiet] = useState<"yes" | "no">("yes");

  const route = useRoute();
  const navigation = useNavigation();

  const { id } = route.params as RouteParams;

  function handleEditMeal() {
    navigation.navigate("meal", {
      id
    });
  }

  return (
    <Container>
      <Title> Editar refeição </Title>

      <BackButton
        variant="TERTIARY"
        style={{
          marginTop: -37.5,
          marginLeft: 32
        }}
      />

      <Form>
        <Label> Nome </Label>
        <Input />

        <Label> Descrição </Label>
        <Input
          isTextarea={true}
          multiline={true}
          style={{
            textAlignVertical: "top"
          }}
        />

        <DoubleColumnContainer>
          <InputGroup>
            <Label> Data </Label>
            <Input />
          </InputGroup>

          <InputGroup>
            <Label> Hora </Label>
            <Input />
          </InputGroup>

          <Label> Está dentro da dieta? </Label>
          <InsideDietButton
            variant="PRIMARY"
            isActive={insideDiet === "yes"}
            onPress={() => setInsideDiet("yes")}
          >
            <ButtonCircle variant="PRIMARY" />
            <ButtonText> Sim </ButtonText>
          </InsideDietButton>

          <InsideDietButton
            variant="SECONDARY"
            isActive={insideDiet === "no"}
            onPress={() => setInsideDiet("no")}
          >
            <ButtonCircle variant="SECONDARY" />
            <ButtonText> Não </ButtonText>
          </InsideDietButton>
        </DoubleColumnContainer>

        <Button
          text="Salvar alterações"
          marginTop="auto"
          onPress={handleEditMeal}
        />
      </Form>
    </Container>
  );
}
