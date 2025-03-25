'use client'

import { signUpSchema } from "@/schema";
import { SignUpProps } from "@/type";
import { checkEmail } from "@/utils/loginReq";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

export const SignUp = (props: SignUpProps) => {
    const { fields, setFields, setPage } = props
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
            const { email } = values;
            try {
                const user = await checkEmail(email);
                console.log("user n ene ",user);
                
                if (user.success) {
                    setFields({
                        ...fields,
                        email: email,
                    })
                    setPage(2)

                    console.log(fields);
                } else {
                    console.log("user exist");
                    
                }


            } catch (error) {
                console.log("Error fetching data: ", error);
            }
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    name='email'
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder="Enter your email"
                />
                {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500">{formik.errors.email}</p>
                )}
                <button type="submit" onClick={() => formik.handleSubmit
                } >Sign Up</button>
            </form>
        </div>
    )
}