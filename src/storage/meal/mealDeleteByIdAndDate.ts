import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";

import { mealsGetAll } from "./mealsGetAll";

export async function mealDeleteByIdAndDate(id: string, date: string) {
  try {
    const storageMeals = await mealsGetAll();

    const mealsFilteredByDate = storageMeals.find(
      (meals) => meals.title === date
    );

    if (mealsFilteredByDate?.data.length === 1) {
      return await AsyncStorage.removeItem(MEAL_COLLECTION);
    }

    const newMealsStorage = mealsFilteredByDate?.data.filter((meal) => {
      return meal.id !== id;
    });

    const newStorage = storageMeals.map((meals) => {
      if (meals.title === date) {
        meals.data = newMealsStorage!;
      }
    });

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newStorage));
  } catch (error) {
    throw error;
  }
}
