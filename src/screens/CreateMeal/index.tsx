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
import { mealsCreate } from "@storage/meal/mealsCreate";

export function CreateMeal() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [hour, setHour] = useState("");
  const [date, setDate] = useState("");
  const [insideDiet, setInsideDiet] = useState<"yes" | "no" | "">("");

  const navigation = useNavigation();

  async function handleCreateMeal() {
    await mealsCreate({
      id: new Date().toISOString(),
      name,
      description,
      date,
      hour,
      insideDiet: insideDiet === "yes" ? true : false
    });

    navigation.navigate("feedback", {
      insideDiet: insideDiet === "yes" ? true : false
    });

    setName("");
    setDescription("");
    setHour("");
    setDate("");
    setInsideDiet("");
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
        <Input value={name} onChangeText={setName} />

        <Label> Descrição </Label>
        <Input
          value={description}
          onChangeText={setDescription}
          isTextarea={true}
          multiline={true}
          style={{
            textAlignVertical: "top"
          }}
        />

        <DoubleColumnContainer>
          <InputGroup>
            <Label> Data </Label>
            <Input value={date} onChangeText={setDate} />
          </InputGroup>

          <InputGroup>
            <Label> Hora </Label>
            <Input value={hour} onChangeText={setHour} />
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
