import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { mealsGetByDate } from "./mealsGetByDate";

export async function mealDeleteByIdAndDate(id: string, date: string) {
  try {
    const storageMeals = await mealsGetAll();

    const mealsInCurrentDate = await mealsGetByDate(date);

    if (mealsInCurrentDate?.data.length === 1) {
      const newStorage = storageMeals.filter(
        (dailyMeals) => dailyMeals.title !== date
      );

      return await AsyncStorage.setItem(
        MEAL_COLLECTION,
        JSON.stringify(newStorage)
      );
    }

    const newMealsStorage = mealsInCurrentDate?.data.filter((meal) => {
      return meal.id !== id;
    });

    const newStorage = storageMeals.map((meals) => {
      if (meals.title === date) {
        meals.data = newMealsStorage!;
      }

      return meals;
    });

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(newStorage));
  } catch (error) {
    throw error;
  }
}
