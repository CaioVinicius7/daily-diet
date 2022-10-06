import { useNavigation } from "@react-navigation/native";

import { Header } from "./components/Header";
import { Highlight } from "./components/Highlight";
import { DailyDietList } from "./components/DailyDietList";
import { ButtonIcon } from "@components/ButtonIcon";

import {
  StatsButton,
  Container,
  Icon,
  SummaryContainer,
  Title
} from "./styles";
import { FlatList } from "react-native";
import { ListEmpty } from "./components/ListEmpty";

interface Diet {
  date: string;
  meals: {
    hour: string;
    name: string;
    insideDiet: boolean;
  }[];
}

const dietsMock: Diet[] = [
  {
    date: "12.08.22",
    meals: [
      {
        hour: "10:30",
        name: "Vitamina de banana com abacate",
        insideDiet: true
      }
    ]
  },
  {
    date: "12.09.22",
    meals: [
      {
        hour: "09:30",
        name: "X-tudo",
        insideDiet: false
      }
    ]
  }
];

export function Home() {
  const navigation = useNavigation();

  function handleGoToStats() {
    navigation.navigate("stats");
  }

  function handleGoToCreateMeal() {
    navigation.navigate("createMeal");
  }

  return (
    <Container>
      <Header />

      <SummaryContainer variant="PRIMARY">
        <StatsButton onPress={handleGoToStats}>
          <Icon variant="PRIMARY" />
        </StatsButton>

        <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
      </SummaryContainer>

      <Title> Refeições </Title>

      <ButtonIcon
        text="Nova Refeição"
        variant="PRIMARY"
        icon="add"
        onPress={handleGoToCreateMeal}
      />

      <FlatList
        data={dietsMock}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <DailyDietList date={item.date} meals={item.meals} />
        )}
        ListEmptyComponent={<ListEmpty />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
