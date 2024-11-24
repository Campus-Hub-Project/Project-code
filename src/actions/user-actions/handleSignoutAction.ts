'use server'

import { auth, signOut } from "@/src/auth"
import { deleteUserAccount, findUniqueUserById } from "@/src/lib/queries/user"

export const handleSignoutAction = async ({ isForever }: { isForever: boolean }) => {

    if (!isForever) await signOut()

    const session = await auth()
    if (!session || !session.user.id) return null

    const doesUserExists = await findUniqueUserById(session.user.id)

    if (!doesUserExists) return null

    await deleteUserAccount(doesUserExists.id)

    await signOut()
}