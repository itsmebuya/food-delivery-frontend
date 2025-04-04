"use client";

import { useFoods } from "@/provider/foodProvider";

export const Menu = () => {
  const { foods, isLoading } = useFoods();
  if (isLoading) {
    return <div>Foods loading ...</div>;
  }

  return (
    <div>
      foods here
      {foods.map((food) => (
        <p key={food._id}>{food.foodName}</p>
      ))}
    </div>
  );
};
