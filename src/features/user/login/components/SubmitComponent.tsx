import { type } from "os";

type SubmitComponentProps = {
    pending: boolean
    action: (e: React.FormEvent<HTMLFormElement>) => void
}
export function SubmitComponent({pending, action}: SubmitComponentProps) {
    return (
        <>
            <button formAction={action} disabled={pending} className="w-full bg-blue-500 text-white text-sm rounded-sm shadow-sm py-2 px-4
                hover:bg-blue-600
                focus:outline-none focus:bg-blue-600
                disabled:bg-blue-700">Login</button>
        </>
    )
}