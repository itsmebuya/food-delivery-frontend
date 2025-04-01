'use client'

import { useCategories } from "@/provider/categoryProvider"
import { LogoContainer } from "../_components/logoContainer"

export const Footer = () => {
    const { categories } = useCategories()
    console.log(categories);
    
    return (
        <div className="bg-[#18181B] w-full ">
            <div className="w-full bg-red-500 h-[100px]"></div>
            <div className="flex justify-between gap-[220px] px-[88px] mt-[228px]">
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
                        {categories.map((cate) => (
                            <p key={cate._id} className="cursor-pointer leading-6">{cate.categoryName}</p>
                        ))}
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}