import { BackButton } from "@components/BackButton";

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

export function Stats() {
  return (
    <Container variant="PRIMARY">
      <HeaderContainer>
        <BackButton variant="PRIMARY" />
        <Title> 90,86% </Title>
        <SubTitle> das refeições dentro da dieta </SubTitle>
      </HeaderContainer>

      <StatsContainer>
        <StatsTitle>Estatísticas gerais</StatsTitle>

        <Card>
          <CardTitle> 22 </CardTitle>
          <SubTitle> melhor sequência de pratos dentro da dieta </SubTitle>
        </Card>

        <Card>
          <CardTitle> 109 </CardTitle>
          <SubTitle> refeições registradas </SubTitle>
        </Card>

        <SecondaryCardsContainer>
          <ColoredCard variant="PRIMARY">
            <CardTitle> 99 </CardTitle>
            <SubTitle> refeições dentro da dieta </SubTitle>
          </ColoredCard>
          <ColoredCard variant="SECONDARY">
            <CardTitle> 10 </CardTitle>
            <SubTitle> refeições fora da dieta </SubTitle>
          </ColoredCard>
        </SecondaryCardsContainer>
      </StatsContainer>
    </Container>
  );
}
