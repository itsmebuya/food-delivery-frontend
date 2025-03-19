'use client'

import { LoginInput } from "../_components/input"

export const Login = () => {

    return (
        <div className="flex flex-col gap-6">
            <div>
                <p className="text-2xl font-semibold">Log in</p>
                <p className="text-base font-normal text-[#71717A]">Log in enjoy your favorite dishes.</p>
            </div>
            <div className="flex flex-col gap-4">
                <LoginInput type="email" placeholder="Enter your email" />
                <LoginInput type="password" placeholder="Enter your password" />
            </div>

            <div>
                Don't have an account?
            </div>
        </div>
    )
}