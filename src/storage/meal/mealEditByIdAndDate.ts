import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";
import { mealGetByIdAndDate } from "./mealGetByIdAndDate";
import { mealsGetAll } from "./mealsGetAll";
import { mealsGetByDate } from "./mealsGetByDate";

interface NewMealData {
  name: string;
  description: string;
  hour: string;
  insideDiet: boolean;
}

export async function mealEditByIdAndDate(
  id: string,
  date: string,
  data: NewMealData
) {
  try {
    const meal = await mealGetByIdAndDate(id, date);

    const updatedMeal = {
      ...meal!,
      name: data.name,
      description: data.description,
      hour: data.hour,
      insideDiet: data.insideDiet
    };

    const storageMeals = await mealsGetAll();

    const mealsInCurrentDate = await mealsGetByDate(date);

    const updatedMealsInCurrentDate = mealsInCurrentDate!.data.map((meal) => {
      if (meal.id === id) {
        meal = updatedMeal;
      }

      return meal;
    });

    storageMeals.map((dailyMeals) => {
      if (dailyMeals.title === date) {
        dailyMeals.data = updatedMealsInCurrentDate;
      }

      return dailyMeals;
    });

    const storage = JSON.stringify(storageMeals);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
