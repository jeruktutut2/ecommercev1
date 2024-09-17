"use client"

import { Facebook, Twitter, Eye, User } from 'lucide-react';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { login } from '../controllers/login-controller';
import { useRouter } from "next/navigation"
import { EmailComponents } from "../components/EmailComponent";
import { PasswordComponent } from '../components/PasswordComponent';
import { LoginWithComponent } from '../components/LoginWithComponent';
import { HeaderComponent } from '../components/HeaderComponent';

export function LoginPage() {
    let showPassword: boolean = false
    const toggleShowPassword = () => {
        showPassword = !showPassword
    }
    let emailErrorMessages: string = ""
    let passwordErrorMessages: string = ""
    let message: string = ""
    const router = useRouter()
    const [result, action] = useFormState(login, null)
    const {pending} = useFormStatus()
    if (result?.errors) {
        result?.errors.forEach((element: any) => {
            if (element.field === "email") {
                emailErrorMessages += element.message + ", "
            } else if (element.field === "password") {
                passwordErrorMessages += element.message + ", "
            }
        });
        emailErrorMessages = emailErrorMessages.slice(0, -2)
        passwordErrorMessages = passwordErrorMessages.slice(0, -2)
    }
    if (result?.data) {
        message = result?.data.message
        router.push("/", {scroll: false})
    }

    return (
        <div className="bg-blue-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-sm shadow-sm w-[360px]">
                <HeaderComponent message={message}/>
                <div className="mb-3">
                    <EmailComponents initialEmailErrorMessages={emailErrorMessages} pending={pending} />
                </div>
                <div className="mb-3">
                    <PasswordComponent passwordErrorMessages={passwordErrorMessages} pending={pending}/>
                </div>
                <button formAction={action} disabled={pending} className="w-full bg-blue-500 text-white text-sm rounded-sm shadow-sm py-2 px-4
                    hover:bg-blue-600
                    focus:outline-none focus:bg-blue-600
                    disabled:bg-blue-700">Login</button>
                <LoginWithComponent />
                <div className="mt-3">
                    <p className="text-center text-xs text-gray-500">Don&apos;t have an account? <span className="text-blue-500 hover:underline hover:cursor-pointer">Register</span></p>
                </div>
            </div>
        </div>
    )
}