'use server'

export const formatDateTimeToUTC = async ({ date, time }: { date: Date, time: string }) => {
    // A VARIÁVEL date POSSUI ESSE FORMATO -> 2024-11-22T03:00:00.000Z

    // PEGO ANO-MES-DIA -> 2024-11-22
    const datePart = date.toISOString().slice(0, 10)

    // PEGO O HORÁRIO E ALTERO
    const formattedDateTime = new Date(`${datePart}T${time}:00.000Z`)

    // ALTERO O HORÁRIO
    formattedDateTime.setHours(formattedDateTime.getHours() + 3)

    return formattedDateTime
}

export const formatDateToUTC = async ({ date }: { date: Date }) => {
    // A VARIÁVEL date POSSUI ESSE FORMATO -> 2024-11-22T03:00:00.000Z

    // PEGO ANO-MES-DIA -> 2024-11-22
    const datePart = date.toISOString().slice(0, 10)

    // PEGO O HORÁRIO E ALTERO
    const formattedDate = new Date(`${datePart}T00:00:00.000Z`)

    return formattedDate
}
