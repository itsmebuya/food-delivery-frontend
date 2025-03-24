import { object, string, number, date, InferType } from 'yup';

export const UserSchema = object({
  email: string().required().email(),
  phoneNumber: number().required().positive().integer(),
  password: string().required(),
  role: string()
});

export const loginSchema = object({
    email: string()
        .email('Invalid email address')
        .required('Email is required'),
    password: string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters long')
        // .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        // .matches(/[0-9]/, 'Password must contain at least one number'),
});