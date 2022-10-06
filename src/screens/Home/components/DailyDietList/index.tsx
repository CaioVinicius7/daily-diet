import { useNavigation } from "@react-navigation/native";

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
  meals: {
    hour: string;
    name: string;
    insideDiet: boolean;
  }[];
}

export function DailyDietList({ date, meals }: DailyDietListProps) {
  const navigation = useNavigation();

  function handleViewMealInformation(id: string) {
    navigation.navigate("meal", {
      id
    });
  }

  return (
    <Container>
      <Title> {date} </Title>

      {meals.map((meal) => (
        <DietCard
          key={meal.name}
          onPress={() => handleViewMealInformation("1")}
        >
          <Hour> {meal.hour} </Hour>
          <Food numberOfLines={1}> {meal.name} </Food>
          <StatusIndicator
            variant={meal.insideDiet ? "PRIMARY" : "SECONDARY"}
          />
        </DietCard>
      ))}
    </Container>
  );
}
