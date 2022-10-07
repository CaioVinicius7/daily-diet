import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { Meals } from "./MealsStorageDTO";

export async function mealGetByIdAndDate(id: string, date: string) {
  try {
    const storageMeals = await mealsGetAll();

    const mealsFilteredByDate = storageMeals.find(
      (meals) => meals.title === date
    );

    const meal = mealsFilteredByDate?.data.find((meal) => {
      return meal.id === id;
    });

    return meal;
  } catch (error) {
    throw error;
  }
}
