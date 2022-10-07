import { BackButton } from "@components/BackButton";
import { Form } from "./components/Form";

import { Container, Title } from "./styles";

export function CreateMeal() {
  return (
    <Container>
      <Title> Nova refeição </Title>

      <BackButton
        variant="TERTIARY"
        style={{
          marginTop: -37.5,
          marginLeft: 32
        }}
      />

      <Form />
    </Container>
  );
}
