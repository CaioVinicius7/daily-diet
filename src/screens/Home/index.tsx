import { useState, useCallback } from "react";
import { SectionList, Alert } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { IStats, useStats } from "@hooks/useStats";

import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { Meals } from "@storage/meal/MealsStorageDTO";

import { Header } from "./components/Header";
import { Highlight } from "./components/Highlight";
import { MealCard } from "./components/MealCard";
import { ListEmpty } from "./components/ListEmpty";
import { ButtonIcon } from "@components/ButtonIcon";
import { Loader } from "@components/Loader";

import {
  StatsButton,
  Container,
  Icon,
  SummaryContainer,
  Title,
  SectionTitle
} from "./styles";

export function Home() {
  const [stats, setStats] = useState<IStats>();
  const [meals, setMeals] = useState<Meals[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  async function fetchStats() {
    try {
      setIsLoading(true);

      const data = await useStats();
      setStats(data);
    } catch (error) {
      Alert.alert(
        "Erro ao buscar dados das refeições.",
        "Ocorreu um erro inesperado ao buscar os dados das refeições."
      );
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
      fetchStats();
    }, [])
  );

  return (
    <Container>
      <Header />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SummaryContainer variant={stats!.theme}>
            <StatsButton onPress={handleGoToStats}>
              <Icon variant={stats!.theme} />
            </StatsButton>

            <Highlight
              title={`${stats!.inDietPercent}`}
              subtitle="das refeições dentro da dieta"
            />
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
        </>
      )}
    </Container>
  );
}
