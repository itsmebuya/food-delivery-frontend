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
                    src="https://s3-alpha-sig.figma.com/img/5d86/e6a2/488bb31d983ecd581caec983f3a32842?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MtQhWLq4iJ3a5GCMvNPJOlVNyU6GRaKN8feHC-nYhVizyafq9o-avL0avE-U09rds6E57rNMgzaE-7uHFJ4hMnxv6E3jiUYq23e0YK2j8Y6IUouWic53JLCoEgYDqiOJK0eSu~R0GAZmaT1FjTXY9fYX1lSqLGcRgIZu88VAVNf4ffogUfR~m1rFAKJAPqKcTqtRKkvwS6jYbiZrMaGkEfvwarx-LrcO6pIdbO4KFVXbhdEQxtszODNDCCxOi-peizyqM2n54eHNxOkK4PSEl2ZQ~Nj7u5sJq4B9x1BLkjlY-4Jk9Ud-UWpMm2-MYXWPPCNRUj0DfFe5n62LRCtagg__"
                    alt="NomNom"
                    className="w-[100%] h-[100%] rounded-3xl"
                />
            </div>

        </div>
    )
}