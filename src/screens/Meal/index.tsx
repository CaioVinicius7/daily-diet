import { useState, useCallback } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute
} from "@react-navigation/native";

import type { Meal as MealType } from "@storage/meal/MealsStorageDTO";
import { mealGetByIdAndDate } from "@storage/meal/mealGetByIdAndDate";

import { BackButton } from "@components/BackButton";
import { ButtonIcon } from "@components/ButtonIcon";
import { Loader } from "@components/Loader";
import { InsideDietStatus } from "./components/InsideDietStatus";
import { DeleteMealModal } from "./components/DeleteMealModal";

import {
  Container,
  DataContainer,
  Title,
  MealTitle,
  MealSubTitle,
  MealText
} from "./styles";
import { mealDeleteByIdAndDate } from "@storage/meal/mealDeleteByIdAndDate";

interface RouteParams {
  id: string;
  date: string;
}

export function Meal() {
  const [meal, setMeal] = useState<MealType>();
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();

  const { id, date } = route.params as RouteParams;

  async function fetchMeal() {
    try {
      setIsLoading(true);

      const data = await mealGetByIdAndDate(id, date);

      setMeal(data);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  function handleChangeModalVisibility() {
    setModalVisible((state) => !state);
  }

  function handleEditMeal() {
    navigation.navigate("editMeal", {
      id,
      date
    });
  }

  async function handleDeleteMeal() {
    try {
      await mealDeleteByIdAndDate(id, date);

      navigation.navigate("home");
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  return (
    <>
      <Container variant="PRIMARY">
        <Title> Refeição </Title>

        <BackButton
          variant="TERTIARY"
          style={{
            marginTop: -37.5,
            marginLeft: 32
          }}
        />

        <DataContainer>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <MealTitle> {meal!.name} </MealTitle>
              <MealText>{meal!.description}</MealText>

              <MealSubTitle> Data e hora </MealSubTitle>
              <MealText>
                {meal!.date} às {meal!.hour}
              </MealText>

              <InsideDietStatus insideDiet={meal!.insideDiet} />

              <ButtonIcon
                icon="edit"
                text="Editar refeição"
                marginTopAuto={true}
                onPress={handleEditMeal}
              />
              <ButtonIcon
                icon="delete"
                text="Excluir refeição"
                variant="SECONDARY"
                onPress={handleChangeModalVisibility}
              />
            </>
          )}
        </DataContainer>
      </Container>

      <DeleteMealModal
        isVisible={modalVisible}
        handleChangeModalVisibility={handleChangeModalVisibility}
        handleDeleteMeal={handleDeleteMeal}
      />
    </>
  );
}
