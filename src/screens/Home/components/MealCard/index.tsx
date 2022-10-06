import { useNavigation } from "@react-navigation/native";

import { Container, DietCard, Food, Hour, StatusIndicator } from "./styles";

interface MealCardProps {
  meal: {
    id: string;
    hour: string;
    name: string;
    insideDiet: boolean;
  };
}

export function MealCard({ meal }: MealCardProps) {
  const navigation = useNavigation();

  function handleViewMealInformation(id: string) {
    navigation.navigate("meal", {
      id
    });
  }

  return (
    <Container>
      <DietCard key={meal.name} onPress={() => handleViewMealInformation("1")}>
        <Hour> {meal.hour} </Hour>
        <Food numberOfLines={1}> {meal.name} </Food>
        <StatusIndicator variant={meal.insideDiet ? "PRIMARY" : "SECONDARY"} />
      </DietCard>
    </Container>
  );
}
