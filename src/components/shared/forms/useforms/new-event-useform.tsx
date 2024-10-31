'use client'

import { createNewEventSchema, CreateNewEventSchemaType } from "@/src/hooks/use-form/create-new-event-useform"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

export const createNewEventUseForm = () => {
    return useForm<CreateNewEventSchemaType>({
        resolver: zodResolver(createNewEventSchema),
        defaultValues: {
            name: "",
            description: "",
            type: undefined,
            format: undefined,
            eventDay: { from: undefined, to: undefined },
            eventTimeStarts: undefined,
            eventTimeEnds: undefined,
            subscribePeriod: { from: undefined, to: undefined },
            price: 0.0,
            participants_limit: 0
        }
    })
}