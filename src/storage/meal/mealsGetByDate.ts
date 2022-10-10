import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storageConfig";
import { Meals } from "./MealsStorageDTO";

export async function mealsGetByDate(date: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: Meals[] = storage ? JSON.parse(storage) : [];

    const mealsInCurrentDate = meals.find(
      (dailyMeals) => dailyMeals.title === date
    );

    return mealsInCurrentDate;
  } catch (error) {
    throw error;
  }
}
