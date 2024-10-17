'use server'

import { auth } from "./auth"
import { deleteUser } from "@/queries/user-queries"

const drop = async () => {
    try {
        const session = await auth()

        if (!session || !session.user) return { error: 'Não autenticado' }

        // é recebido o id do usuário, do model User
        const userId = session.user.id

        await deleteUser(userId!)
        return { success: true, message: 'Usuário deletado com sucesso' }
    } catch (error) {
        throw error
    }
}

export default drop