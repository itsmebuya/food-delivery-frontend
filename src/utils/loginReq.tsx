import { loginRequestParams } from "@/type";
import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const instance = axios.create({ baseURL: BASE_URL });

export const loginRequest = async ({ email, password }: loginRequestParams) => {
    const { data } = await instance.post("/login", { email, password })
    return data
}

export const signUpRequest = async ({ email, password }: loginRequestParams) => {
    console.log(email);
    
    const  data  = await instance.post("/users", { email, password })
    console.log(data);
    
    return data
}

export const checkEmail = async (email: string) => {
    const { data } = await instance.post("/users/check", {email})
    
    return data
}