import { User } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

type EmailComponentProps = {
    initialEmailErrorMessages: string
    pending: boolean
}

export function EmailComponents({initialEmailErrorMessages, pending}: EmailComponentProps) {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const [emailErrorMessages, setEmailErrorMessages] = useState(initialEmailErrorMessages)
    useEffect(() => {
        setEmailErrorMessages(initialEmailErrorMessages)
    }, [initialEmailErrorMessages])
    const [emailValue, setEmailValue] = useState("")
    const emailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value)
        setEmailErrorMessages("")
    }
    return (
        <>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
                <input type="text" id="email" name="email" placeholder="Email" value={emailValue} onChange={(e) => emailOnChange(e)} ref={inputRef} disabled={pending} className={`block mt-1 w-full border ${emailErrorMessages ? 'border-red-300': 'border-gray-300'} rounded-sm p-2 text-gray-700
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    sm:text-sm`} />
                <div className="absolute top-2 right-2 text-gray-300"><User /></div>
                {emailErrorMessages && <span className="text-xs text-red-300">{emailErrorMessages}</span>}
            </div>
        </>
    )
}