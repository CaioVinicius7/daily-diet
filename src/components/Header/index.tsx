import { BackButton } from "@components/BackButton";
import { EmptyBox } from "@components/EmptyBox";

import { Container, Title } from "./styles";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <Container>
      <BackButton variant="TERTIARY" />

      <Title>{title}</Title>

      <EmptyBox />
    </Container>
  );
}
