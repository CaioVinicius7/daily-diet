import {
  Container,
  DietCard,
  Food,
  Hour,
  StatusIndicator,
  Title
} from "./styles";

interface DailyDietListProps {
  date: string;
  foods: {
    hour: string;
    name: string;
    status: "PRIMARY" | "SECONDARY";
  }[];
}

export function DailyDietList({ date, foods }: DailyDietListProps) {
  return (
    <Container>
      <Title> {date} </Title>

      {foods.map((food) => (
        <DietCard key={food.name}>
          <Hour> {food.hour} </Hour>
          <Food numberOfLines={1}> {food.name} </Food>
          <StatusIndicator variant={food.status} />
        </DietCard>
      ))}
    </Container>
  );
}
