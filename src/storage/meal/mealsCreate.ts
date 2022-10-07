import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "../storageConfig";
import { mealsGetAll } from "./mealsGetAll";
import { Meal } from "./MealsStorageDTO";

export async function mealsCreate(meal: Meal) {
  try {
    const storageMeals = await mealsGetAll();

    const mealsInCurrentDate = storageMeals.find(
      (dailyMeals) => dailyMeals.title === meal.date
    );

    if (mealsInCurrentDate) {
      storageMeals.map((dailyMeals) => {
        if (dailyMeals.title === meal.date) {
          dailyMeals.data.unshift(meal);
        }

        return dailyMeals;
      });
    } else {
      storageMeals.unshift({
        title: meal.date,
        data: [meal]
      });
    }

    const storage = JSON.stringify(storageMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
