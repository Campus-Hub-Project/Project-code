'use server'

export const eventDatesFormatter = async ({ date, isSubsPeriod = false, time }: { date: Date, isSubsPeriod?: boolean, time?: string }) => {
    // 2024-11-22T03:00:00.000Z

    //2024-11-22
    const datePart = date.toISOString().slice(0, 10)

    let formattedDate
    if (isSubsPeriod) formattedDate = new Date(`${datePart}T03:00:00.000Z`)
    else formattedDate = new Date(`${datePart}T${time}:00.000Z`)
    //2024-11-22T12:00:00.000Z
    //2024-11-23T17:00:00.000Z

    // SOMA TRES HORAS A DATA FORMATADA PARA FICAR NO HORÁRIO DE BRASÍLIA, QUE É +3 HORAS DO HORÁRIO DE LONDRES
    formattedDate.setHours(formattedDate.getHours() + 3)

    const correctFinalDate = formattedDate.toISOString()

    return correctFinalDate
}
