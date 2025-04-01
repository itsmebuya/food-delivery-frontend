'use client'

import { LogoutButton } from "@/components/logOutButton"
import { LogoContainer } from "../_components/logoContainer"

export const Header = () => {

    return (
        <div className="w-full">
            <div className="bg-[#18181B] py-3 flex justify-between px-[88px] ">
                <LogoContainer />
                <div className="flex gap-3">
                    <LogoutButton />
                </div>

            </div>
            <img src="https://res.cloudinary.com/dodusdyxv/image/upload/v1743492134/BG_orojcu.png" alt="Today's offer" />
        </div>
    )
}