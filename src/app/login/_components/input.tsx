'use client'

import { InputProps } from "@/type"

export const LoginInput = (props: InputProps) => {
    const {type, placeholder } = props;

    return(
        <div className="w-[100%]">
            <input type={type} placeholder={placeholder} className="inset-y-2 px-3 py-2 border leading-6 rounded-md w-[100%]" />
        </div>
    )
}