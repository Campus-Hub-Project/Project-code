'use server'

export const eventDatesFormatter = async (date: Date, isSubsPeriod: boolean, time?: string) => {

    const dateAsString = date.toISOString()
    const datePart = dateAsString.slice(0, 10)

    if (isSubsPeriod) {
        const correctDateTimeFormat = `${datePart}T00:00:00.000Z`
        return new Date(correctDateTimeFormat)
    } else {
        const correctDateTimeFormat = `${datePart}T${time}:00.000Z`
        return new Date(correctDateTimeFormat)
    }
}
