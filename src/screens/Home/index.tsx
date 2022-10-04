import { Header } from "./components/Header";
import { Highlight } from "./components/Highlight";

import { ButtonIcon, Container, Icon, SummaryContainer } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />

      <SummaryContainer variant="PRIMARY">
        <ButtonIcon>
          <Icon variant="PRIMARY" />
        </ButtonIcon>

        <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
      </SummaryContainer>
    </Container>
  );
}
