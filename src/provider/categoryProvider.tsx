"use client"

import { CategoryContextType, CategoryType } from "@/type/providerType";
import { getCategory } from "@/utils/categoryRequest";
import { createContext, useContext, useEffect, useState } from "react"


const CategoryContext = createContext<CategoryContextType>({} as CategoryContextType);

export const CategoryProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [categories, setCategories] = useState<CategoryType[]>([])
    const fetchCategory = async () => {
        try {
            const response = await getCategory()
            setCategories(response)
            console.log(response);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetchCategory
    }, [])

    return (
        <CategoryContext.Provider value={{ categories: categories, refetch: fetchCategory }}>

            {categories ? children : <div>...Loading categories</div>}
        </CategoryContext.Provider>

    );
};

export const useCategories = () => {
    const context = useContext(CategoryContext);
    return context
}