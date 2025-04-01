import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

export type UserType = {
    email: string;
    role: string
}

export type UserContextType = {
    user: UserType
}

export type CategoryType = {
    categoryName: string;
    _id: string;
}

export type CategoryContextType = {
    categories: CategoryType[];
    refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<any, Error>>;
}

export type FoodType = {
    _id: string
    foodName: string
    price: number
    image: string
    ingredients: string
    category: string
}

export type FoodContextType = {
    foods: FoodType[]
    refetch: () => Promise<void>
}