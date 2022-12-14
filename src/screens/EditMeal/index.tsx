import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { useFocusEffect, useRoute } from "@react-navigation/native";

import { Meal } from "@storage/meal/MealsStorageDTO";
import { mealGetByIdAndDate } from "@storage/meal/mealGetByIdAndDate";

import { Form } from "./components/Form";
import { Loader } from "@components/Loader";
import { Header } from "@components/Header";

import { Container } from "./styles";

interface RouteParams {
  id: string;
  date: string;
}

export function EditMeal() {
  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState<Meal>({} as Meal);

  const route = useRoute();

  const { id, date } = route.params as RouteParams;

  async function fetchMeal() {
    try {
      setIsLoading(true);

      const data = await mealGetByIdAndDate(id, date);

      setMeal(data!);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Erro ao buscar dados da refeição.",
        "Ocorreu um erro inesperado ao buscar os dados da refeição."
      );
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  return (
    <Container>
      <Header title="Editar refeição" />

      {isLoading ? <Loader /> : <Form id={id} date={date} meal={meal} />}
    </Container>
  );
}
