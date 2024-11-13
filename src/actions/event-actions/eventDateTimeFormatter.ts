'use server'

export const eventDatesFormatter = async ({ date, isSubsPeriod = false, time }: { date: Date, isSubsPeriod?: boolean, time?: string }) => {
    // RECEBO A DATA ASSIM -> 2024-11-22T03:00:00.000Z

    console.log(date);
    
    // PEGO APENAS ANO-MES-DIA -> 2024-11-22
    const datePart = date.toISOString().slice(0, 10)

    // ALTERO O HORÁRIO
    let formattedDate
    if (isSubsPeriod) formattedDate = new Date(`${datePart}T03:00:00.000Z`)
    else formattedDate = new Date(`${datePart}T${time}:00.000Z`)

    // PASSO PARA O FORMATO CORRETO
    const correctFinalDate = formattedDate.toISOString()

    return correctFinalDate
}
