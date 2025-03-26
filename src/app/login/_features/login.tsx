'use client'

import { useRouter } from "next/navigation"
import { ForgotPassword } from "../_components/forgotPassword"
import { LoginButton } from "../_components/loginButton"
import { loginRequest } from "@/utils/loginReq"
import { useFormik } from "formik"
import { loginSchema } from "@/schema"

export const Login = () => {
    const router = useRouter();

    const handleSignUpRedirect = () => {
        router.push("/signup");
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            const { email, password } = values;
            try {
                const response = await loginRequest({ email, password });
                localStorage.setItem("token", response.token)
                localStorage.setItem("role", response.role)
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
        <div className="flex flex-col gap-6 w-[100%]">
            <div>
                <p className="text-2xl font-semibold">Log in</p>
                <p className="text-base font-normal text-[#71717A]">Log in enjoy your favorite dishes.</p>
            </div>
            <div className="flex flex-col gap-4">
                <input type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="inset-y-2 px-3 py-2 border leading-6 rounded-md w-[100%]"
                />
                {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500">{formik.errors.email}</p>
                )}
                <input type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="inset-y-2 px-3 py-2 border leading-6 rounded-md w-[100%]"
                />
                {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500">{formik.errors.password}</p>
                )}
                <ForgotPassword />
            </div>
            <LoginButton handleLogin={formik.handleSubmit} />
            <div className="flex justify-center">
                Don't have an account? <span 
                    className="text-blue-500 cursor-pointer" 
                    onClick={handleSignUpRedirect}
                >
                    Sign up
                </span>
            </div>
        </div>
    )
}