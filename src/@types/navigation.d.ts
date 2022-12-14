export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      stats: undefined;
      createMeal: undefined;
      feedback: {
        insideDiet: boolean;
      };
      meal: {
        id: string;
        date: string;
      };
      editMeal: {
        id: string;
        date: string;
      };
    }
  }
}
