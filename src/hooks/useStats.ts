import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { Meal } from "@storage/meal/MealsStorageDTO";

export interface IStats {
  quantity: number;
  inDiet: number;
  offDiet: number;
  bestSequence: number;
  inDietPercent: string;
  theme: "PRIMARY" | "SECONDARY";
}

function bestSequence(meals: Meal[]) {
  let sequence = 0;
  let bestSequence = 0;

  meals.forEach((meal) => {
    if (meal.insideDiet) {
      sequence++;
    } else {
      sequence = 0;
    }
    if (sequence > bestSequence) {
      bestSequence = sequence;
    }
  });

  return bestSequence;
}

async function useStats() {
  const dailyMeals = await mealsGetAll();

  const allMeals: Meal[] = dailyMeals.map((meal) => meal.data).flat();

  const stats = allMeals.reduce(
    (acc, meal) => {
      if (meal.insideDiet) {
        acc.inDiet++;
      } else {
        acc.offDiet++;
      }

      acc.quantity++;
      acc.inDietPercent = (acc.inDiet / acc.quantity) * 100;

      return acc;
    },
    {
      quantity: 0,
      inDiet: 0,
      offDiet: 0,
      inDietPercent: 0
    }
  );

  const statsFormatted: IStats = {
    quantity: stats.quantity,
    inDiet: stats.inDiet,
    offDiet: stats.offDiet,
    bestSequence: bestSequence(allMeals),
    inDietPercent: `${stats.inDietPercent.toFixed(2)}%`,
    theme: stats.inDietPercent >= 50 ? "PRIMARY" : "SECONDARY"
  };

  return statsFormatted;
}

export { useStats };
