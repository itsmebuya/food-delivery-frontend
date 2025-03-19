'use client'

import { InputProps } from "@/type"

export const LoginInput = (props: InputProps) => {
    const {type, placeholder } = props
    return(
        <div>
            <input type={type} placeholder={placeholder} className="inset-y-2 px-3" />
        </div>
    )
}