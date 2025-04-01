'use client'

import { useRouter } from "next/navigation"
import { Login } from "./_features/login";

export default function Home() {
    const router = useRouter();

    return (
        <div className="w-screen flex h-screen items-center justify-around gap-6 bg-white" >
            <div className="w-[20%]">
                <Login />
            </div>

            <div className="w-[60%] h-[90%]">
                <img
                    src="https://res.cloudinary.com/dodusdyxv/image/upload/v1743491982/loginimage_ttzjb1.jpg"
                    alt="NomNom"
                    className="w-[100%] h-[100%] rounded-3xl object-cover"
                />
            </div>

        </div>
    )
}