import { Container, NotFoundImage, SubTitle, Title } from "./styles";

import notFound from "../../../../assets/not-found.png";

export function ListEmpty() {
  return (
    <Container>
      <NotFoundImage source={notFound} />
      <Title> Nenhum registro encontrado! </Title>
      <SubTitle>
        clique no botão "Nova Refeição" e comece a registar sua dieta agora
        mesmo.
      </SubTitle>
    </Container>
  );
}
