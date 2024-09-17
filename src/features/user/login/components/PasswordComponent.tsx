import { Eye } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

type PasswordComponentProps = {
    showPassword: boolean
    initialPasswordErrorMessages: string
    pending: boolean
    toggleShowPassword: () => void
}
export function PasswordComponent({showPassword, initialPasswordErrorMessages, pending, toggleShowPassword}: PasswordComponentProps) {
    const [passwordErrorMessages, setPasswordErrorMessages] = useState(initialPasswordErrorMessages)
    useEffect(() => {
        setPasswordErrorMessages(initialPasswordErrorMessages)
    }, [initialPasswordErrorMessages])

    const [passwordValue, setPasswordValue] = useState("")
    const passwordOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(e.target.value)
        setPasswordErrorMessages("")
    }
    return (
        <>
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <span className="text-gray-500 text-xs">Forgot Password?</span>
            </div>
            <div className="relative">
                <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Password" value={passwordValue} onChange={(e) => passwordOnChange(e)} disabled={pending} className={`block mt-1 w-full border ${passwordErrorMessages ? 'border-red-300': 'border-gray-300'} rounded-sm p-2 text-gray-700
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    sm:text-sm`} />
                <div className="absolute top-2 right-2 text-gray-300 
                    hover:cursor-pointer"><Eye onClick={() => toggleShowPassword()}/></div>
                {passwordErrorMessages && <span className="text-xs text-red-300">{passwordErrorMessages}</span>}
            </div>
        </>
    )
}