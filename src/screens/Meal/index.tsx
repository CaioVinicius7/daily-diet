import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { BackButton } from "@components/BackButton";
import { ButtonIcon } from "@components/ButtonIcon";
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

interface RouteParams {
  id: string;
}

export function Meal() {
  const [modalVisible, setModalVisible] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();

  const { id } = route.params as RouteParams;

  function handleChangeModalVisibility() {
    setModalVisible((state) => !state);
  }

  function handleEditMeal() {
    navigation.navigate("editMeal", {
      id
    });
  }

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
          <MealTitle> Sanduíche </MealTitle>
          <MealText>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </MealText>

          <MealSubTitle> Data e hora </MealSubTitle>
          <MealText>12/08/2022 às 16:00</MealText>

          <InsideDietStatus insideDiet={true} />

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
        </DataContainer>
      </Container>

      <DeleteMealModal
        isVisible={modalVisible}
        handleChangeModalVisibility={handleChangeModalVisibility}
      />
    </>
  );
}
