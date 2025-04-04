"use client";

import { FoodContextType, FoodType } from "@/type/providerType";
import { getFood } from "@/utils/foodRequest";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";

const FoodContext = createContext<FoodContextType>({} as FoodContextType);

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const fetchFoods = async () => {
    const foodData = await getFood();
    return foodData;
  };

  const { data: foods, isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: fetchFoods,
  });

  return (
    <FoodContext.Provider
      value={{ foods: foods, refetch: fetchFoods, isLoading }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export const useFoods = () => {
  const context = useContext(FoodContext);
  return context;
};
