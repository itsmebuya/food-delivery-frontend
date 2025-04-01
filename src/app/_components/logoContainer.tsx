import Link from "next/link"
import Logo from "@/assets/logo"

export const LogoContainer = () => {
    return (
        <Link href={"/"} className="flex gap-2.5 w-fit">
            <Logo />
            <div className="flex flex-col ">
                <p className="text-lg font-semibold text-white">Nom<span className="text-[#EF4444]">Nom</span></p>
                <p className="text-[#71717A] text-xs font-normal leading-4">Swift delivery</p>
            </div>
        </Link>
    )
}