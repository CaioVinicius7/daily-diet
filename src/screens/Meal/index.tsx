import { BackButton } from "@components/BackButton";
import { ButtonIcon } from "@components/ButtonIcon";
import { InsideDietStatus } from "./components/InsideDietStatus";

import {
  Container,
  DataContainer,
  Title,
  MealTitle,
  MealSubTitle,
  MealText
} from "./styles";

export function Meal() {
  return (
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

        <ButtonIcon icon="edit" text="Editar refeição" marginTopAuto={true} />
        <ButtonIcon icon="delete" text="Excluir refeição" variant="SECONDARY" />
      </DataContainer>
    </Container>
  );
}
