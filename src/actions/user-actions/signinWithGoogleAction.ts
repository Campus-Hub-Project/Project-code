'use server'

import { signIn } from "@/src/auth"
import { DEFAULT_REDIRECT_PATH } from "@/src/routes"

export const signinWithGoogleAction = async () => {
    await signIn('google', {
        redirectTo: DEFAULT_REDIRECT_PATH
    })
}