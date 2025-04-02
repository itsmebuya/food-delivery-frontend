'use client'

import { useCategories } from "@/provider/categoryProvider"
import { LogoContainer } from "../_components/logoContainer"
import FacebookSVG from "@/assets/fbsvg"
import InstaSVG from "@/assets/instasvg"
import { motion } from "motion/react"

export const Footer = () => {
    const { categories } = useCategories()

    return (
        <div className="bg-[#18181B] w-full ">
            <div className="w-full bg-red-500 h-[100px]">
            </div>
            <div className="flex justify-around gap-[220px] px-[88px] mt-[228px]">
                <LogoContainer />
                <div className="flex gap-[112px]">
                    <div className="flex flex-col text-white">
                        <p className="text-[#71717A] text-base">NomNom</p>
                        <p className="cursor-pointer leading-6">Home</p>
                        <p className="cursor-pointer leading-6">Contact us</p>
                        <p className="cursor-pointer leading-6">Delivery zone</p>
                    </div>
                    <div className="flex flex-col text-white">
                        <p className="text-[#71717A] text-base">Menu</p>
                        <div className="grid grid-cols-2 ">
                            {categories.map((cate) => (
                                <p key={cate._id} className="cursor-pointer leading-6">{cate.categoryName}</p>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-[#71717A] text-base">Follow us</p>
                        <div className="flex gap-4">
                            <FacebookSVG />
                            <InstaSVG />
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}