'use client'

import { useRouter } from "next/navigation"
import { ForgotPassword } from "../_components/forgotPassword"
import { LoginInput } from "../_components/input"
import { LoginButton } from "../_components/loginButton"
import { loginRequest } from "@/utils/loginReq"

export const Login = () => {
    const router = useRouter();

    const handleLogin = async (values: {email: string, password: string}) => {
        const {email, password} = values;

        try {
            const response = await loginRequest({email, password})
            if(response) {
                console.log(response);
                
            }
        } catch (error) {
            console.log("Error fetching data: ", error);
        }
    };

    return (
        <div className="flex flex-col gap-6 w-[100%]">
            <div>
                <p className="text-2xl font-semibold">Log in</p>
                <p className="text-base font-normal text-[#71717A]">Log in enjoy your favorite dishes.</p>
            </div>
            <div className="flex flex-col gap-4">
                <LoginInput type="email" placeholder="Enter your email" />
                <LoginInput type="password" placeholder="Enter your password" />
                <ForgotPassword />
            </div>
            <LoginButton handleLogin={handleLogin} />
            <div className="flex justify-center">
                Don't have an account?
            </div>
        </div>
    )
}