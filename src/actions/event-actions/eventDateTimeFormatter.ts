'use server'

import { toZonedTime, formatInTimeZone } from 'date-fns-tz';

export const eventDatesFormatter = async ({ date, isSubsPeriod = false, time }: { date: Date, isSubsPeriod?: boolean, time?: string }) => {
    const timeZone = 'America/Sao_Paulo'

    const zonedDate = toZonedTime(date, timeZone)

    const datePart = formatInTimeZone(zonedDate, timeZone, 'yyyy-MM-dd')

    let correctDateTimeFormat: string

    if (isSubsPeriod) correctDateTimeFormat = `${datePart}T00:00:00.000`
    else if (time) correctDateTimeFormat = `${datePart}T${time}:00.000`
    else throw new Error("Hora (`time`) é necessária para eventos que não são `isSubsPeriod`")

    const finalDate = new Date(formatInTimeZone(new Date(correctDateTimeFormat), 'UTC', "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"))

    return finalDate
};
