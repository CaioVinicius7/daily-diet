import { useCallback, useState } from "react";
import { Alert } from "react-native";

import { IStats, useStats } from "@hooks/useStats";

import { BackButton } from "@components/BackButton";
import { Loader } from "@components/Loader";

import {
  Card,
  CardTitle,
  ColoredCard,
  Container,
  HeaderContainer,
  SecondaryCardsContainer,
  StatsContainer,
  StatsTitle,
  SubTitle,
  Title
} from "./styles";
import { useFocusEffect } from "@react-navigation/native";

export function Stats() {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<IStats>();

  async function fetchStats() {
    try {
      setIsLoading(true);

      const data = await useStats();

      setStats(data);
    } catch (error) {
      Alert.alert(
        "Erro ao buscar as estatísticas.",
        "Ocorreu um erro inesperado ao buscar as estatísticas."
      );
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchStats();
    }, [])
  );

  return isLoading ? (
    <Loader />
  ) : (
    <Container variant={stats!.theme}>
      <HeaderContainer>
        <BackButton variant={stats!.theme} />
        <Title> {stats!.inDietPercent} </Title>
        <SubTitle> das refeições dentro da dieta </SubTitle>
      </HeaderContainer>

      <StatsContainer>
        <StatsTitle>Estatísticas gerais</StatsTitle>

        <Card>
          <CardTitle> {stats!.bestSequence} </CardTitle>
          <SubTitle> melhor sequência de pratos dentro da dieta </SubTitle>
        </Card>

        <Card>
          <CardTitle> {stats!.quantity} </CardTitle>
          <SubTitle> refeições registradas </SubTitle>
        </Card>

        <SecondaryCardsContainer>
          <ColoredCard variant="PRIMARY">
            <CardTitle> {stats!.inDiet} </CardTitle>
            <SubTitle> refeições dentro da dieta </SubTitle>
          </ColoredCard>
          <ColoredCard variant="SECONDARY">
            <CardTitle> {stats!.offDiet} </CardTitle>
            <SubTitle> refeições fora da dieta </SubTitle>
          </ColoredCard>
        </SecondaryCardsContainer>
      </StatsContainer>
    </Container>
  );
}
