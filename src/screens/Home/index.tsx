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
  foods: {
    hour: string;
    name: string;
    status: "PRIMARY" | "SECONDARY";
  }[];
}

const dietsMock: Diet[] = [
  {
    date: "12.08.22",
    foods: [
      {
        hour: "10:30",
        name: "Vitamina de banana com abacate",
        status: "PRIMARY"
      }
    ]
  },
  {
    date: "12.09.22",
    foods: [
      {
        hour: "09:30",
        name: "X-tudo",
        status: "SECONDARY"
      }
    ]
  }
];

export function Home() {
  const navigation = useNavigation();

  function handleViewStats() {
    navigation.navigate("stats");
  }

  return (
    <Container>
      <Header />

      <SummaryContainer variant="PRIMARY">
        <StatsButton onPress={handleViewStats}>
          <Icon variant="PRIMARY" />
        </StatsButton>

        <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
      </SummaryContainer>

      <Title> Refeições </Title>

      <ButtonIcon text="Nova Refeição" variant="PRIMARY" icon="add" />

      <FlatList
        data={dietsMock}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <DailyDietList date={item.date} foods={item.foods} />
        )}
        ListEmptyComponent={<ListEmpty />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
