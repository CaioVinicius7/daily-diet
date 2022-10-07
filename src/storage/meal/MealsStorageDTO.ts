export interface Meal {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  insideDiet: boolean;
}

export interface Meals {
  title: string;
  data: Meal[];
}
