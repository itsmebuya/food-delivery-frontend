"use client";

import { CategoryContextType } from "@/type/providerType";
import { getCategory } from "@/utils/categoryRequest";
import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

const CategoryContext = createContext<CategoryContextType>(
  {} as CategoryContextType
);

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const fetchCategories = async () => {
    const categoryData = await getCategory();
    return categoryData;
  };

  const {
    data: categories,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({ queryKey: ["categories"], queryFn: fetchCategories });

  return (
    <CategoryContext.Provider
      value={{ categories: categories, refetch: refetch }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategories = () => {
  const context = useContext(CategoryContext);
  return context;
};
