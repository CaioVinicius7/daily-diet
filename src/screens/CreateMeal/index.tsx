import { BackButton } from "@components/BackButton";

import { Input } from "@components/Input";

import { Container, Form, Label, Title } from "./styles";

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

      <Form>
        <Label> Nome </Label>
        <Input />

        <Label> Descrição </Label>
        <Input
          isTextarea={true}
          multiline={true}
          style={{
            textAlignVertical: "top"
          }}
        />
      </Form>
    </Container>
  );
}
