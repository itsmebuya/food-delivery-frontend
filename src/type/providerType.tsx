export type UserContextType = {
    email: string | undefined
    role: string | undefined
}

export type CategoryType = {
    name: string;
    _id: string;
}

export type CategoryContextType = {
    categories: CategoryType[];
    refetch: () => Promise<void>
}