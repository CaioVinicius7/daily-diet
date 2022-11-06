import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storageConfig";
import { Meals } from "./MealsStorageDTO";

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: Meals[] = storage ? JSON.parse(storage) : [];

    const mealsSortedByDate = meals.sort((a, b): any => {
      return a.title < b.title;
    });

    return mealsSortedByDate;
  } catch (error) {
    throw error;
  }
}
