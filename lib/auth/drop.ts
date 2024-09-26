'use server'

import { prisma } from "../db"
import { auth } from "./auth"

const drop = async () => {
    try {
        const session = await auth()

        if (!session) return { error: 'Sessão não encontrada' }

        if (!session.user) return { error: 'Usuário não encontrado' }

        // é recebido o id do usuário, do model User
        const userId = session.user.id

        await prisma.user.delete({
            where: {
                id: userId,
            }
        })
        return { success: true, message: 'Usuário deletado com sucesso' }
    } catch (error) {
        throw error
    }
}

export default drop