import { Header } from "./components/Header";
import { Highlight } from "./components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";

import {
  StatsButton,
  Container,
  Icon,
  SummaryContainer,
  Title
} from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <SummaryContainer variant="PRIMARY">
        <StatsButton>
          <Icon variant="PRIMARY" />
        </StatsButton>

        <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
      </SummaryContainer>

      <Title> Refeições </Title>

      <ButtonIcon text="Nova Refeição" variant="PRIMARY" icon="add" />
    </Container>
  );
}
