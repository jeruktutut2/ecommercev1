"use server"

import { setDataMessageResponse } from "@/commons/helpers/response-helper";
import { LoginRequest } from "../models/login-request";
import { LoginService } from "../services/login-service";
import { cookies } from 'next/headers'

export async function login(previousState: any, formData: FormData) {
    const loginRequest: LoginRequest = {
        email: formData.get("email") as string,
        password: formData.get("password") as string
    }
    const loginResponse = await LoginService.login(loginRequest)
    if (loginResponse.errors) {
        return loginResponse
    }
    cookies().set({
        name: 'sessionid',
        value: loginResponse.data,
        httpOnly: true,
        path: '/',
    })
    return setDataMessageResponse("successfully login")
}