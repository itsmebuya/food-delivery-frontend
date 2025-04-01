"use client"

import { FoodContextType, FoodType } from "@/type/providerType";
import { getFood } from "@/utils/foodRequest";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react"

const FoodContext = createContext<FoodContextType>({} as FoodContextType);

export const FoodProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const fetchFoods = async() => {
        const foodData = await getFood();
        return foodData
    }

    const {
        data: foods 
    } = useQuery({ queryKey: ['foods'], queryFn: fetchFoods });


    // const [foods, setFoods] = useState<FoodType[]>([])
    // const fetchFoods = async () => {
    //     try {
    //         const response = await getFood()
    //         setFoods(response)
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     fetchFoods
    // }, [])

    return (
        <FoodContext.Provider value={{ foods: foods, refetch: fetchFoods }}>
            {foods ? children : <div>...Loading foods</div>}
        </FoodContext.Provider>
    );
};

export const useFoods = () => {
    const context = useContext(FoodContext);
    return context
}