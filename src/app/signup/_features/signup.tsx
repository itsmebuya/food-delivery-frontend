'use client'

import { useFormik } from "formik";
import { useRouter } from "next/navigation";

export const SignUp = () => {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        // validationSchema: loginSchema,
        onSubmit: async (values) => {
            const { email, password } = values;
            try {
                const response = await loginRequest({ email });
                console.log(response)
                localStorage.setItem("token", response.token)
                if (response.role === "ADMIN") {
                    router.push("http://localhost:3000");
                } else {
                    router.push("/");
                }

            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        },
    });

    return (
        <div>

        </div>
    )
}