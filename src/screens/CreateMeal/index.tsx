import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { BackButton } from "@components/BackButton";

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
import { Button } from "@components/Button";

export function CreateMeal() {
  const [insideDiet, setInsideDiet] = useState<"yes" | "no" | "">("");

  const navigation = useNavigation();

  function handleCreateMeal() {
    navigation.navigate("feedback", {
      insideDiet: insideDiet === "yes" ? true : false
    });
  }

  return (
    <Container>
      <Title> Nova refeição </Title>

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
          text="Cadastrar Refeição"
          marginTop="auto"
          onPress={handleCreateMeal}
        />
      </Form>
    </Container>
  );
}
