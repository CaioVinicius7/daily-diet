import { useState } from "react";
import { Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
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
  Label,
  ErrorText
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
  }

  return (
    <Container>
      <Label> Nome </Label>
      <Controller
        name="name"
        control={control}
        rules={{
          required: "Preencha o campo nome",
          minLength: {
            value: 4,
            message: "Preencha o campo com pelo menos 4 caracteres"
          }
        }}
        render={({ field: { value, onChange } }) => (
          <Input value={value} onChangeText={onChange} />
        )}
      />

      <ErrorMessage
        name="name"
        errors={errors}
        render={({ message }) => <ErrorText> {message} </ErrorText>}
      />

      <Label> Descrição </Label>
      <Controller
        name="description"
        control={control}
        rules={{
          required: "Preencha o campo descrição",
          minLength: {
            value: 4,
            message: "Preencha o campo com pelo menos 4 caracteres"
          }
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

      <ErrorMessage
        name="description"
        errors={errors}
        render={({ message }) => <ErrorText> {message} </ErrorText>}
      />

      <DoubleColumnContainer>
        <InputGroup>
          <Label> Data </Label>
          <Controller
            name="date"
            control={control}
            rules={{
              required: "Preencha o campo Data",
              maxLength: {
                value: 10,
                message: "Preencha corretamente"
              },
              minLength: {
                value: 10,
                message: "Preencha corretamente"
              }
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

          <ErrorMessage
            name="date"
            errors={errors}
            render={({ message }) => <ErrorText> {message} </ErrorText>}
          />
        </InputGroup>

        <InputGroup>
          <Label> Hora </Label>
          <Controller
            name="hour"
            control={control}
            rules={{
              required: "Preencha o campo Hora",
              maxLength: {
                value: 5,
                message: "Preencha corretamente"
              },
              minLength: {
                value: 5,
                message: "Preencha corretamente"
              }
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

          <ErrorMessage
            name="hour"
            errors={errors}
            render={({ message }) => <ErrorText> {message} </ErrorText>}
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
