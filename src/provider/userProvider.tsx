'use client'

import { UserContextType } from "@/type/providerType"
import { createContext, useContext, useEffect, useState } from "react"

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserContextType | undefined>(undefined)

    useEffect(() => {
        const user = localStorage.getItem("userData");
        setUser(JSON.parse(user || "{}"));
    }, []);

    return (
        <UserContext.Provider value={{ email: user?.email, role: user?.role }}>
            {user ? children : <div>...Loading </div>}
        </UserContext.Provider>
    )
};

export const useUser = () => {
    const context = useContext(UserContext)
    return context
}