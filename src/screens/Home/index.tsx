import { useState, useCallback } from "react";
import { SectionList, Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { Meals } from "@storage/meal/MealsStorageDTO";

import { Header } from "./components/Header";
import { Highlight } from "./components/Highlight";
import { MealCard } from "./components/MealCard";
import { ListEmpty } from "./components/ListEmpty";
import { ButtonIcon } from "@components/ButtonIcon";

import {
  StatsButton,
  Container,
  Icon,
  SummaryContainer,
  Title,
  SectionTitle
} from "./styles";

export function Home() {
  const [meals, setMeals] = useState<Meals[]>([]);
  const navigation = useNavigation();

  function handleGoToStats() {
    navigation.navigate("stats");
  }

  function handleGoToCreateMeal() {
    navigation.navigate("createMeal");
  }

  async function fetchMeals() {
    try {
      const data = await mealsGetAll();

      setMeals(data);
    } catch (error) {
      Alert.alert(
        "Erro ao buscar dados das refeições.",
        "Ocorreu um erro inesperado ao buscar os dados das refeições."
      );
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header />

      <SummaryContainer variant="PRIMARY">
        <StatsButton onPress={handleGoToStats}>
          <Icon variant="PRIMARY" />
        </StatsButton>

        <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
      </SummaryContainer>

      <Title> Refeições </Title>

      <ButtonIcon
        text="Nova Refeição"
        variant="PRIMARY"
        icon="add"
        onPress={handleGoToCreateMeal}
      />

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle> {title} </SectionTitle>
        )}
        renderItem={({ item }) => <MealCard meal={item} />}
        ListEmptyComponent={<ListEmpty />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
