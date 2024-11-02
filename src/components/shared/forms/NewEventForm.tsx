'use client'

import React, { useTransition } from 'react'

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/src/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '@/src/components/ui/input'
import { Textarea } from '@/src/components/ui/textarea'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/src/components/ui/select'

import formCss from '@/styles/Form.module.css'
import { newEventSchema, TypeNewEventSchema } from '@/src/hooks/use-form/new-event-useform'
import { zodResolver } from '@hookform/resolvers/zod'
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover'
import { Button } from '@/src/components/ui/button'
import { Calendar } from '@/src/components/ui/calendar'

import { format } from 'date-fns'
import SubmitButton from '../button/SubmitButton'
import { createNewEvent } from '@/src/actions/event-actions/createNewEvent'

const NewEventForm = () => {
    const [isPending, startTransition] = useTransition()

    const form = useForm<TypeNewEventSchema>({
        resolver: zodResolver(newEventSchema),
        defaultValues: {
            name: '',
            description: '',
            type: undefined,
            format: undefined,
            date: { from: undefined, to: undefined },
            startTime: undefined,
            endTime: undefined,
            subscribePeriod: { from: undefined, to: undefined },
            participantsLimit: 0
        }
    })

    const submitForm = async (data: TypeNewEventSchema) => {
        try {
            startTransition(async () => {
                await createNewEvent(data)
                form.reset()
                alert('Evento criado')
            })
        } catch (error) {

        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)} className='w-7/12'>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <FormLabel className={formCss['form-label']}>Nome do evento:</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    placeholder="Nome do evento aqui..." {...field}
                                    className={formCss['form-text-input']}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <FormLabel className={formCss['form-label']}>Descrição do evento:</FormLabel>
                            <FormControl>
                                <Textarea
                                    disabled={isPending}
                                    placeholder='Pontos mais importantes do evento aqui...' {...field}
                                    className={`${formCss['form-text-input']} h-36`}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <FormLabel className={formCss['form-label']}>Tipo do evento:</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className={formCss['form-select-trigger']}>
                                        <SelectValue placeholder="Seu evento é um(a)..." />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className={formCss['form-select-content']}>
                                    <SelectItem disabled={isPending} value="lectures" className={formCss['form-select-item']}>Palestra</SelectItem>
                                    <SelectItem disabled={isPending} value="workshop" className={formCss['form-select-item']}>Workshop</SelectItem>
                                    <SelectItem disabled={isPending} value="bootcamp" className={formCss['form-select-item']}>Bootcamp</SelectItem>
                                    <SelectItem disabled={isPending} value="conference" className={formCss['form-select-item']}>Conferência</SelectItem>
                                    <SelectItem disabled={isPending} value="congress" className={formCss['form-select-item']}>Congresso</SelectItem>
                                    <SelectItem disabled={isPending} value="other" className={formCss['form-select-item']}>Outro</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="format"
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <FormLabel className={formCss['form-label']}>Formato:</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className={formCss['form-select-trigger']}>
                                        <SelectValue placeholder="Seu evento é..." />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className={formCss['form-select-content']}>
                                    <SelectItem disabled={isPending} value="inperson" className={formCss['form-select-item']}>Presencial</SelectItem>
                                    <SelectItem disabled={isPending} value="online" className={formCss['form-select-item']}>Online</SelectItem>
                                    <SelectItem disabled={isPending} value="hybrid" className={formCss['form-select-item']}>Híbrido</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="flex flex-col mt-2">
                            <FormLabel className={formCss['form-label']}>Data do evento:</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild className={formCss['form-popover-trigger']}>
                                    <FormControl>
                                        <Button variant="outline">
                                            {field.value?.from ? (
                                                field.value.to ? (
                                                    <>
                                                        {format(field.value.from, "dd LLL, y")} -{" "}
                                                        {format(field.value.to, "dd LLL, y")}
                                                    </>
                                                ) : (
                                                    format(field.value.from, "dd LLL, y")
                                                )
                                            ) : (
                                                <span>Data que ocorrerá o evento aqui...</span>
                                            )}
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="range"
                                        selected={field.value}
                                        onSelect={(range) => field.onChange(range)}
                                        disabled={(date) => date < new Date("2024-08-01")}
                                        initialFocus
                                        className='text-hub-middlegray'
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='startTime'
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <FormLabel className={formCss['form-label']}>Horário de início do evento (Horas: minutos):</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending} placeholder="Horário do início do evento aqui..."
                                    {...field} className={formCss['form-time-input']} type='time' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='endTime'
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <FormLabel className={formCss['form-label']}>Horário de encerramento do evento (Horas: minutos):</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending} placeholder="Horário do encerramento do evento aqui..."
                                    {...field} className={formCss['form-time-input']} type='time' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subscribePeriod"
                    render={({ field }) => (
                        <FormItem className='flex flex-col mt-2'>
                            <FormLabel className={formCss['form-label']}>Data de abertura e encerramento das inscrições:</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild className={formCss['form-popover-trigger']}>
                                    <FormControl>
                                        <Button variant='outline' disabled={isPending}>
                                            {field.value.from ? (
                                                field.value.to ? (
                                                    <>
                                                        {format(field.value.from, 'LLL dd, y')} - {" "}
                                                        {format(field.value.to, 'LLL dd, y')}
                                                    </>
                                                ) : (
                                                    format(field.value.from, 'LLL dd, y')
                                                )
                                            ) : (
                                                <span>Abertura e encerramento das inscrições aqui...</span>
                                            )}
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode='range'
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) => date < new Date('2024-08-10')}
                                        initialFocus
                                        className='text-hub-middlegray'
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="participantsLimit"
                    render={({ field }) => (
                        <FormItem className='mt-2'>
                            <FormLabel className={formCss['form-label']}>Limite de participantes: (mantenha zero caso não haja)</FormLabel>
                            <FormControl>
                                <Input
                                    disabled={isPending}
                                    placeholder="Limite de participantes do evento aqui..."
                                    {...field} type='number'
                                    className={formCss['form-text-input']}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SubmitButton extraCss='mt-4' reverse>Criar evento</SubmitButton>
            </form>
        </Form>
    )
}

export default NewEventForm