import { loginRequestParams } from "@/type";
import axios from "axios"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const instance = axios.create({ baseURL: BASE_URL });

export const loginRequest = async ({ email, password}: loginRequestParams) => {
    const { data } = await instance.post("/login", {email, password})
    return data
}