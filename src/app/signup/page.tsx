'use client'

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { SignUp } from "./_features/signup";
import { Confirm } from "./_features/confirmPassword";
import { Fields } from "@/type";
import { signUpRequest } from "@/utils/loginReq";

export default function Home() {
    const router = useRouter();
    const [fields, setFields] = useState<Fields>({
        email: '',
        password: '',
      });
    const [page, setPage] = useState(1);
    
    return (
        <div className="w-screen flex h-screen items-center justify-around gap-6 bg-white" >
            <div className="w-[20%]">
                {page == 1 && <SignUp setFields={setFields} fields={fields} setPage= {setPage}/>}
                {page == 2 && < Confirm fields={fields} setFields={setFields} setPage={setPage} />}
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