'use server'

import { signupSchema, TypeSignupSchema } from "@/src/hooks/use-form/auth-useform"
import { sendVerificationEmail } from "@/src/lib/mail"
import { findUniqueUserByEmail, insertUserJustSignUp } from "@/src/lib/queries/user"
import { generateVerificationToken } from "@/src/lib/tokens"
import { hash } from "bcryptjs"

export const handleSignupAction = async (data: TypeSignupSchema) => {
    const isDataAsSchema = signupSchema.safeParse(data)

    if (!isDataAsSchema.success) return null

    const doesUserExists = await findUniqueUserByEmail(isDataAsSchema.data.email)

    if (doesUserExists) return null

    const hashedPassword = await hash(isDataAsSchema.data.password, 10)

    await insertUserJustSignUp(isDataAsSchema.data.name, isDataAsSchema.data.email, 'INSTITUITION', hashedPassword)

    const verificationToken = await generateVerificationToken(isDataAsSchema.data.email)

    await sendVerificationEmail(verificationToken.email as string, verificationToken.token)
}