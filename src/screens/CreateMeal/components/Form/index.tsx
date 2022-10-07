import { useState } from "react";
import { Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

import { mealsCreate } from "@storage/meal/mealsCreate";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { MaskedInput } from "@components/MaskedInput";

import {
  ButtonCircle,
  ButtonText,
  Container,
  DoubleColumnContainer,
  InputGroup,
  InsideDietButton,
  Label
} from "./styles";

type FormData = {
  name: string;
  description: string;
  date: string;
  hour: string;
};

export function Form() {
  const [insideDiet, setInsideDiet] = useState<"yes" | "no" | "">("");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      description: "",
      hour: "",
      date: ""
    }
  });

  const navigation = useNavigation();

  async function handleCreateMeal({ name, description, date, hour }: FormData) {
    if (insideDiet === "") {
      return Alert.alert(
        "Erro ao cadastrar nova refeição",
        'Escolha Sim ou Não para opção "está dentro da dieta?"'
      );
    }

    const insideDietBoolean = insideDiet === "yes" ? true : false;

    await mealsCreate({
      id: new Date().toISOString(),
      name,
      description,
      date,
      hour,
      insideDiet: insideDietBoolean
    });

    navigation.navigate("feedback", {
      insideDiet: insideDietBoolean
    });

    setInsideDiet("");
    reset();
  }

  return (
    <Container>
      <Label> Nome </Label>
      <Controller
        name="name"
        control={control}
        rules={{
          required: "Preencha o campo nome",
          minLength: 4
        }}
        render={({ field: { value, onChange } }) => (
          <Input value={value} onChangeText={onChange} />
        )}
      />

      <Label> Descrição </Label>
      <Controller
        name="description"
        control={control}
        rules={{
          required: "Preencha o campo descrição",
          minLength: 4
        }}
        render={({ field: { value, onChange } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            isTextarea={true}
            multiline={true}
            style={{
              textAlignVertical: "top"
            }}
          />
        )}
      />

      <DoubleColumnContainer>
        <InputGroup>
          <Label> Data </Label>
          <Controller
            name="date"
            control={control}
            rules={{
              required: "Preencha o campo Data",
              minLength: 10,
              maxLength: 10
            }}
            render={({ field: { value, onChange } }) => (
              <MaskedInput
                value={value}
                onChangeText={(text: string) => {
                  onChange(text);
                }}
                mask="99/99/9999"
                keyboardType="numeric"
              />
            )}
          />
        </InputGroup>

        <InputGroup>
          <Label> Hora </Label>
          <Controller
            name="hour"
            control={control}
            rules={{
              required: "Preencha o campo Hora",
              minLength: 5,
              maxLength: 5
            }}
            render={({ field: { value, onChange } }) => (
              <MaskedInput
                value={value}
                onChangeText={(text: string) => {
                  onChange(text);
                }}
                mask="99:99"
                keyboardType="numeric"
              />
            )}
          />
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
        onPress={handleSubmit(handleCreateMeal)}
      />
    </Container>
  );
}
