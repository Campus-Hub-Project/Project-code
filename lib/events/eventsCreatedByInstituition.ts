'use server'

import { auth } from "../auth/auth"

import { getAllEventsFromInstituition } from "@/queries/event-queries"

// função que busca os eventos criados pela instituição de ensino
// a busca usa como base o id do usuário-instituição logado
const getEventsCreatedByInstituition = async () => {

    // busca a sessão do usuário
    const session = await auth()
    // se a sessão não está presente, retorna null
    if (!session || !session.user) return null

    // busca os eventos criados pelo usuário logado usando o id dele como base
    const events = await getAllEventsFromInstituition(session.user.id!)

    // retorna esses eventos
    return events
}

export default getEventsCreatedByInstituition