'use client'

import React from 'react'

import { Form, FormField, FormControl, FormItem, FormMessage } from '@/src/components/ui/form'

import formCss from '@/styles/Form.module.css'
import { Input } from '@/src/components/ui/input'
import {
    IconClipboardText, IconFileText, IconAlarm,
    IconUsers, IconSchool, IconDeviceDesktopQuestion, IconCalendarMonth
} from '@tabler/icons-react'
import { Textarea } from '@/src/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select'
import SubmitButton from '../button/SubmitButton'
import { newEventUseForm, TypeNewEventSchema } from '@/src/hooks/use-form/new-event-useform'
import { handleCreateNewEvent } from '@/src/actions/event-actions/handleCreateNewEvent'
import { Popover, PopoverTrigger, PopoverContent } from '../../ui/popover'
import { Button } from '@/src/components/ui/button'
import { Calendar } from '@/src/components/ui/calendar'
import { format } from 'date-fns'

const NewEventForm = () => {
    const form = newEventUseForm()

    const submitForm = async (data: TypeNewEventSchema) => {
        await handleCreateNewEvent(data)
    }

    return (
        <Form {...form}>
            <form className='flex flex-col gap-4' onSubmit={form.handleSubmit(submitForm)}>
                <FormField
                    name='summary'
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative flex items-center">
                                    <IconClipboardText className="absolute mx-3 text-grays-five" />
                                    <Input {...field} placeholder='Título do evento aqui...' className={formCss['form-label']}
                                        type='text' />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name='description'
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative flex items-center">
                                    <IconFileText className="absolute top-3 mx-3 text-grays-five" />
                                    <Textarea {...field} placeholder='Breve descrição do curso aqui...' className={formCss['textarea']} />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name='type'
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className={`${formCss['form-label']} ${formCss['hover-effect']}`}>
                                        <SelectValue placeholder="Seu evento é um(a)..." />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className={formCss['form-select-content']}>
                                    <SelectItem value="lectures" className={formCss['form-select-item']}>Palestra</SelectItem>
                                    <SelectItem value="workshop" className={formCss['form-select-item']}>Workshop</SelectItem>
                                    <SelectItem value="bootcamp" className={formCss['form-select-item']}>Bootcamp</SelectItem>
                                    <SelectItem value="conference" className={formCss['form-select-item']}>Conferência</SelectItem>
                                    <SelectItem value="congress" className={formCss['form-select-item']}>Congresso</SelectItem>
                                    <SelectItem value="other" className={formCss['form-select-item']}>Outro</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name='format'
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className={`${formCss['form-label']} ${formCss['hover-effect']}`}>
                                        <SelectValue placeholder="Seu evento é..." />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent className={formCss['form-select-content']}>
                                    <SelectItem value="inperson" className={formCss['form-select-item']}>Presencial</SelectItem>
                                    <SelectItem value="online" className={formCss['form-select-item']}>Online</SelectItem>
                                    <SelectItem value="hybrid" className={formCss['form-select-item']}>Híbrido</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="day"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button variant="outline" className={formCss['form-outline-button']}>
                                            {field.value ? (
                                                <>{format(field.value, "dd LLL, y")}</>
                                            ) : (
                                                <EventIcon>
                                                    <IconCalendarMonth />
                                                    <span>Data que o evento ocorrerá aqui...</span>
                                                </EventIcon>
                                            )}
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode='single'
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) => date < new Date("2024-08-01")}
                                        initialFocus
                                        className={formCss['form-calendar']}
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name='starts'
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative flex items-center">
                                    <IconAlarm className="absolute mx-3 text-grays-five" />
                                    <Input {...field} placeholder='Horário do início do evento aqui...'
                                        className={`${formCss['form-label']} cursor-text`} type='time' />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name='ends'
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative flex items-center">
                                    <IconAlarm className="absolute mx-3 text-grays-five" />
                                    <Input {...field} placeholder='Horário do encerramento do evento aqui...'
                                        className={`${formCss['form-label']} cursor-text`} type='time' />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name='subs'
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <Popover>
                                <PopoverTrigger asChild className={formCss['form-popover-trigger']}>
                                    <FormControl>
                                        <Button variant="outline" className={formCss['form-outline-button']}>
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
                                                <EventIcon>
                                                    <IconCalendarMonth />
                                                    <span>Abertura e encerramento das inscrições aqui...</span>
                                                </EventIcon>
                                            )}
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 mx-auto" align="start">
                                    <Calendar
                                        mode='range'
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) => date < new Date('2024-08-10')}
                                        initialFocus
                                        className={formCss['form-calendar']}
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="atendeesLimit"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="relative flex items-center">
                                    <IconUsers className="absolute mx-3 text-grays-five" />
                                    <Input {...field} placeholder='Limite de participantes do evento aqui...' className={formCss['form-label']}
                                        type='number' />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <SubmitButton>Criar evento</SubmitButton>
            </form>
        </Form>
    )
}

export default NewEventForm

const EventIcon = ({ children }: { children: React.ReactNode }) =>
    <div className={`relative flex items-center gap-2 ${formCss['hover-effect']}`}>{children}</div>
