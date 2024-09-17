import { Eye } from 'lucide-react';

type PasswordComponentProps = {
    passwordErrorMessages: string
    pending: boolean
}
export function PasswordComponent({passwordErrorMessages, pending}: PasswordComponentProps) {
    let showPassword: boolean = false
    const toggleShowPassword = () => {
        showPassword = !showPassword
    }
    return (
        <>
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
                {passwordErrorMessages && <span className="text-xs text-red-300">{passwordErrorMessages}</span>}
            </div>
        </>
    )
}