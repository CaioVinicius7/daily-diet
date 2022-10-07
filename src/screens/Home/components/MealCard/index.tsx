import { useNavigation } from "@react-navigation/native";

import { Container, DietCard, Food, Hour, StatusIndicator } from "./styles";

interface MealCardProps {
  meal: {
    id: string;
    name: string;
    description: string;
    date: string;
    hour: string;
    insideDiet: boolean;
  };
}

export function MealCard({
  meal: { id, name, description, date, hour, insideDiet }
}: MealCardProps) {
  const navigation = useNavigation();

  function handleViewMealInformation() {
    navigation.navigate("meal", {
      id,
      date
    });
  }

  return (
    <Container>
      <DietCard key={name} onPress={handleViewMealInformation}>
        <Hour> {hour} </Hour>
        <Food numberOfLines={1}> {name} </Food>
        <StatusIndicator variant={insideDiet ? "PRIMARY" : "SECONDARY"} />
      </DietCard>
    </Container>
  );
}
