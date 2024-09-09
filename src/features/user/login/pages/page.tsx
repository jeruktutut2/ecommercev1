"use client"

import { Facebook, Twitter, Eye, User } from 'lucide-react';
import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { login } from '../controllers/login-controller';
import { useRouter } from "next/navigation"

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
            console.log("element:", element);
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
                <h2 className="test-2xl text-center">Welcome</h2>
                <h6 className="font-light text-xs text-center m-3 text-gray-500">Sign in to continue to app</h6>
                {message && <p className="text-xs text-green-500 text-center">{message}</p>}
                <div className="mb-3">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <div className="relative">
                        <input type="text" id="email" name="email" placeholder="Email" disabled={pending} className="block mt-1 w-full border border-gray-300 rounded-sm p-2
                            focus:outline-none focus:ring-blue-500 focus:border-blue-500
                            sm:text-sm" />
                        <div className="absolute top-2 right-2 text-gray-300"><User /></div>
                        {emailErrorMessages && <span className="text-xs text-red-200">{emailErrorMessages}</span>}
                    </div>
                </div>
                <div className="mb-3">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <span className="text-gray-500 text-xs">Forgot Password?</span>
                    </div>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Password" disabled={pending} className="block mt-1 w-full border border-gray-300 rounded-sm p-2
                            focus:outline-none focus:ring-blue-500 focus:border-blue-500
                            sm:text-sm" />
                        <div className="absolute top-2 right-2 text-gray-300 
                            hover:cursor-pointer"><Eye onClick={() => toggleShowPassword()}/></div>
                        {passwordErrorMessages && <span className="text-xs text-red-200">{passwordErrorMessages}</span>}
                    </div>
                </div>
                <button formAction={action} disabled={pending} className="w-full bg-blue-500 text-white text-sm rounded-sm shadow-sm py-2 px-4
                    hover:bg-blue-600
                    focus:outline-none focus:bg-blue-600
                    disabled:bg-blue-700">Login</button>
                <div className="flex flex-row items-center justify-center mt-6">
                    <div className="flex-grow border-t border-solid border-gray-300"></div>
                    <span className="mx-1 text-gray-500 text-xs">Login with</span>
                    <div className="flex-grow border-t border-solid border-gray-300"></div>
                </div>
                <div className="flex flex-row items-center justify-center mt-3 gap-2">
                    <button type="button" className="bg-gray-300 text-white text-sm rounded-sm shadow-sm p-1
                        hover:text-blue-500 hover:bg-white
                        focus:outline-none focus:bg-gray-400"><Facebook /></button>
                    <button type="button" className="bg-gray-300 text-white text-sm rounded-sm shadow-sm p-1
                        hover:bg-gray-400 hover:text-sky-300 hover:bg-white
                        focus:outline-none focus:bg-gray-400"><Twitter /></button>
                </div>
                <div className="mt-3">
                    <p className="text-center text-xs text-gray-500">Don&apos;t have an account? <span className="text-blue-500 hover:underline hover:cursor-pointer">Register</span></p>
                </div>
            </div>
        </div>
    )
}