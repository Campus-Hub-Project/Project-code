'use server'

import { auth } from "../../src/auth"
import { prisma } from "../db"
import addInGoogleCalendar from "./addInGoogleCalendar"

const getIntoEvent = async (eventId: string) => {
    
    // pegando a sessão do usuário presente na função auth()
    const session = await auth()

    // se a sessão não está presente, o usuário não está autenticado
    if (!session || !session.user) return null

    // buscando o evento por id para entrar nele
    const eventToGetInto = await prisma.event.findUnique({
        where: {
            id: eventId
        },
        include: {
            participants: true
        }
    })

    // se o evento não for encontrado
    if (!eventToGetInto) return null

    // atualiza o evento buscando-o pelo id e depois passando o id do usuário logado nos participantes.
    await prisma.event.update({
        where: {
            id: eventId,
        },
        data: {
            participants: {
                connect: {
                    id: session.user.id
                }
            }
        }
    })

    // insiro o evento que o usuário vai participar na agenda Google dele
    await addInGoogleCalendar({ event: eventToGetInto, session: session });
}

export default getIntoEvent