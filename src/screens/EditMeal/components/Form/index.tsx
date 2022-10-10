import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useNavigation } from "@react-navigation/native";

import { Meal } from "@storage/meal/MealsStorageDTO";

import { Button } from "@components/Button";
import { Input } from "@components/Input";

import {
  ButtonCircle,
  ButtonText,
  Container,
  DoubleColumnContainer,
  ErrorText,
  InputGroup,
  InsideDietButton,
  Label
} from "./styles";
import { MaskedInput } from "@components/MaskedInput";

type FormData = {
  name: string;
  description: string;
  date: string;
  hour: string;
};

interface FormProps {
  meal: Meal;
}

export function Form({ meal }: FormProps) {
  const [insideDiet, setInsideDiet] = useState<"yes" | "no">(
    meal.insideDiet ? "yes" : "no"
  );

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      name: meal.name,
      description: meal.description,
      hour: meal.hour,
      date: meal.date
    }
  });

  function handleEditMeal() {
    navigation.navigate("meal", {
      id: meal.id,
      date: meal.date
    });
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
        text="Salvar alterações"
        marginTop="auto"
        onPress={handleSubmit(handleEditMeal)}
      />
    </Container>
  );
}
