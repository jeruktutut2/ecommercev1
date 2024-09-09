"use server"

export async function register(previousState: any, formData: FormData) {
    await new Promise((f) => setTimeout(f, 2000));
    return "register";
  }