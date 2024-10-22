'use server'

export const eventDayDateTimeFormatter = async (date: Date, time: string) => {
    
    const dateAsString = date.toISOString()
    const datePart = dateAsString.slice(0, 10)

    const correctDateTimeFormat = `${datePart}T${time}:00.000Z`
    return new Date(correctDateTimeFormat)
}

export const eventSubsPeriodFormatter = async (date: Date) => {

    const dateAsString = date.toISOString()
    const datePart = dateAsString.slice(0, 10)

    const correctDateTimeFormat = `${datePart}T00:00:00.000Z`
    return new Date(correctDateTimeFormat)
}
