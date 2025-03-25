import * as yup  from 'yup';

export const UserSchema = yup.object({
  email: yup.string().required().email(),
  phoneNumber: yup.number().required().positive().integer(),
  password: yup.string().required(),
  role: yup.string()
});

export const loginSchema = yup.object({
  email: yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
  // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  // .matches(/[0-9]/, 'Password must contain at least one number'),
});

export const signUpSchema = yup.object({
  email: yup.string()
    .email("Invalid email address")
    .required("Email is required")
})

export const confirmPasswordSchema = yup.object({
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
})