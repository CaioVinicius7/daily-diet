import { Container, StatusCircle, Text } from "./styles";

interface InsideDietStatusProps {
  insideDiet: boolean;
}

export function InsideDietStatus({ insideDiet }: InsideDietStatusProps) {
  return (
    <Container>
      <StatusCircle insideDiet={insideDiet} />
      <Text>{insideDiet ? "Dentro da dieta" : "Fora da dieta"}</Text>
    </Container>
  );
}
