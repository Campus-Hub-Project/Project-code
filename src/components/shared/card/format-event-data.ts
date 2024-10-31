'use server'

import { User } from "next-auth"

export const formatType = (type: string) => {
    switch (type) {
        case 'lectures': return 'Palestra'
        case 'workshop': return 'Workshop'
        case 'bootcamp': return 'Bootcamp'
        case 'conference': return 'Conferência'
        case 'congress': return 'Congresso'
        default: return 'Outro'
    }
}

export const formatFormat = (format: string) => {
    switch (format) {
        case 'inperson': return 'Presencial'
        case 'online': return 'Online'
        case 'hybrid': return 'Híbrido'
        default: return 'Outro'
    }
}

export const formatPrice = (price: number) => price === 0 ? 'Gratuito': `R$ ${price}`

export const formatLimit = (limit: number) => limit === 0 ? 'Não há limite de participantes': `${limit} vagas`

export const formatDateTime = (date: Date) => 
    new Date(date).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    })

export const formatTotalParticipants = (participants: User[]) => participants.length
