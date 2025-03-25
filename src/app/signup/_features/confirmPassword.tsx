'use client'

import { confirmPasswordSchema } from "@/schema";
import { SignUpProps } from "@/type";
import { signUpRequest } from "@/utils/loginReq";
import { Field, useFormik } from "formik";
import { useRouter } from "next/navigation";

export const Confirm = (props: SignUpProps) => {
    const {fields, setFields} = props;
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validationSchema: confirmPasswordSchema,
        onSubmit: async (values) => {
            const { password, confirmPassword } = values;
            try {
                setFields({...fields,
                    password: password
                })
                
                const response = await signUpRequest(fields)
                if(response.data === "User created") {
                    router.push("/login")
                }
                
            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        },
    });

    return (
        <div>
            <div>
             <form onSubmit={formik.handleSubmit}>
            <input
                name='password'
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Enter your password"
            />
            {formik.touched.password && formik.errors.password && (
                <p className="text-red-500">{formik.errors.password}</p>
            )}
            <input
                name='confirmPassword'
                type="password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                placeholder="Enter your confirmPassword"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <p className="text-red-500">{formik.errors.confirmPassword}</p>
            )}
            <button type="submit" onClick={() => formik.handleSubmit
            } >Sign Up</button>
            </form>
        </div>
        </div>
    )
}