'use server'

import { auth } from "../auth/auth"
import { prisma } from "../db"

// função que busca os eventos criados pela instituição de ensino
// a busca usa como base o id do usuário-instituição logado
const getEventsCreatedByInstituition = async () => {

    // busca a sessão do usuário
    const session = await auth()

    // se a sessão não está presente, retorna null
    if (!session || !session.user) return null

    // busca os eventos criados pelo usuário logado usando o id dele como base
    const eventsCreated = await prisma.event.findMany({
        where: {
            userId: session.user.id,
        }
    })

    // retorna esses eventos
    return eventsCreated
}

export default getEventsCreatedByInstituition