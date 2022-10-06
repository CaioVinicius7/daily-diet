import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Stats } from "@screens/Stats";
import { CreateMeal } from "@screens/CreateMeal";
import { Feedback } from "@screens/Feedback";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="stats" component={Stats} />
      <Screen name="createMeal" component={CreateMeal} />
      <Screen name="feedback" component={Feedback} />
    </Navigator>
  );
}
