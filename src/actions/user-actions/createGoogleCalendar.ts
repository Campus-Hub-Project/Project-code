'use sever'

import { google } from "googleapis"

export const createGoogleCalendar = async (accessToken: string) => {
    // CRIO UMA INSTANCIA DE CLIENTE OAUTH2 PARA FAZER A REQUISÇÃO A API DO GOOGLE CALENDAR:
    const authClient = new google.auth.OAuth2()

    // DEFINO AS CREDENCIAIS DE AUTENTICAÇÃO
    authClient.setCredentials({ access_token: accessToken })

    // CRIO UMA INSTANCIA DO GOOGLE CALENDAR E PASSO AS CREDENCIAIS DE AUTENTICAÇÃO:
    const calendar = google.calendar({ version: 'v3', auth: authClient })

    return calendar
}