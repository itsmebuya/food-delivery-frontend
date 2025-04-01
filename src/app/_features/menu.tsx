'use client'

import { useFoods } from "@/provider/foodProvider"

export const Menu = () => {
    const { foods } = useFoods()
    console.log(foods)
    return (
        <div>
            foods here
            {foods.map((food) => (
                <p key={food._id}>{food.foodName}</p>
            ))}
        </div>
    )
}