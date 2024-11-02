'use server'

import { User } from "next-auth"

export const formatType = async (type: string) => {
    switch (type) {
        case 'lectures': return 'Palestra'
        case 'workshop': return 'Workshop'
        case 'bootcamp': return 'Bootcamp'
        case 'conference': return 'Conferência'
        case 'congress': return 'Congresso'
        default: return 'Outro'
    }
}

export const formatFormat = async (format: string) => {
    switch (format) {
        case 'inperson': return 'Presencial'
        case 'online': return 'Online'
        case 'hybrid': return 'Híbrido'
        default: return 'Outro'
    }
}

export const formatLimit = async (limit: number) => limit === 0 ? 'Não há limite de participantes': `${limit} vagas`

export const formatDateTime = async (date: Date) => 
    new Date(date).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    })

export const formatTotalParticipants = async (participants: User[]) => participants.length
