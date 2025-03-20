'use client'

import { LoginButtonProps } from "@/type"

export const LoginButton = (props: LoginButtonProps) => {
    const {handleLogin} = props;

    return (
        <button className="rounded-md px-8 py-1.5 text-white bg-[#d1d1d1]" onClick={handleLogin}>
            Let's Go
        </button>
    )
}