"use client"

import { useFormState, useFormStatus } from "react-dom";
import { register } from "../controllers/register-controller";

export default function RegisterPage() {
    console.log("mantap");
    
    const [result, formAction] = useFormState(register, null);
    const { pending } = useFormStatus();
    const cekmantap = () => {
        console.log("cekmantap");
        
    }
    return (
        <div>
            <span onClick={cekmantap}>mantap</span>
            <br />
            <button formAction={formAction} disabled={pending}>
                {pending ? "Incrementing..." : "Increment"}
            </button>
        </div>
    )
}