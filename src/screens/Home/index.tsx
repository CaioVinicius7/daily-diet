import { SectionList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "./components/Header";
import { Highlight } from "./components/Highlight";
import { MealCard } from "./components/MealCard";
import { ButtonIcon } from "@components/ButtonIcon";

import {
  StatsButton,
  Container,
  Icon,
  SummaryContainer,
  Title,
  SectionTitle
} from "./styles";
import { ListEmpty } from "./components/ListEmpty";

interface Diet {
  title: string;
  data: {
    id: string;
    hour: string;
    name: string;
    insideDiet: boolean;
  }[];
}

const dietsMock: Diet[] = [
  {
    title: "12.08.22",
    data: [
      {
        id: "2022-10-06T18:03:19.853Z",
        hour: "10:30",
        name: "Vitamina de banana com abacate",
        insideDiet: true
      }
    ]
  },
  {
    title: "12.09.22",
    data: [
      {
        id: "2022-10-06T18:03:41.233Z",
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

      <SectionList
        sections={dietsMock}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle> {title} </SectionTitle>
        )}
        renderItem={({ item }) => <MealCard meal={item} />}
        ListEmptyComponent={<ListEmpty />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
