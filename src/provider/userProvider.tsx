"use client";

import { UserContextType, UserType } from "@/type/providerType";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>({} as UserType);

  useEffect(() => {
    const user = localStorage.getItem("userData");
    setUser(JSON.parse(user || "{}"));
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
