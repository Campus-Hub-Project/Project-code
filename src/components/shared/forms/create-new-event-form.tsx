'use client'

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/src/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/src/components/ui/popover'

import { Button } from '@/src/components/ui/button'
import { Calendar } from '@/src/components/ui/calendar'
import { Input } from '@/src/components/ui/input'

import { Textarea } from '@/src/components/ui/textarea'
import React, { useTransition } from 'react'

import { format } from "date-fns"

import {
  CreateNewEventSchemaType,

} from '@/src/hooks/use-form/create-new-event-useform'


import inputCss from '@/styles/Input.module.css'
import formCss from '@/styles/Form.module.css'

import { createNewEventUseForm } from './useforms/new-event-useform'
import SubmitButton from '../button/SubmitButton'
import createNewEvent from '@/src/lib/events/createNewEvent'

const CreateNewEventForm = () => {

  const [isPending, startTransition] = useTransition()

  const form = createNewEventUseForm()

  const submitForm = (data: CreateNewEventSchemaType) => {
    try {
      startTransition(
        async () => {
          await createNewEvent(data)
          alert("Evento criado com sucesso")
          form.reset()
        })
    } catch (error) {
      alert('Algo deu errado, evento não foi criado. Tente Novamente mais tarde')
      throw error
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="w-2/3 space-y-6 scroll-smooth">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={formCss['label']}>Nome do evento:</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="Nome do evento aqui..." {...field} className={`${formCss['text-input']}`}
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
            <FormItem>
              <FormLabel className={formCss['label']}>Descrição do evento:</FormLabel>
              <FormControl>
                <Textarea
                  disabled={isPending}
                  placeholder='Pontos mais importantes do evento aqui...' {...field} className={`${formCss['text-input']} h-28`}
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
            <FormItem>
              <FormLabel className={formCss['label']}>Tipo do evento:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={formCss['select-trigger']}>
                    <SelectValue placeholder="Seu evento é um(a)..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className={formCss['select-content']}>
                  <SelectItem disabled={isPending} value="lectures" className={formCss['select-input']}>Palestra</SelectItem>
                  <SelectItem disabled={isPending} value="workshop" className={formCss['select-input']}>Workshop</SelectItem>
                  <SelectItem disabled={isPending} value="bootcamp" className={formCss['select-input']}>Bootcamp</SelectItem>
                  <SelectItem disabled={isPending} value="conference" className={formCss['select-input']}>Conferência</SelectItem>
                  <SelectItem disabled={isPending} value="congress" className={formCss['select-input']}>Congresso</SelectItem>
                  <SelectItem disabled={isPending} value="other" className={formCss['select-input']}>Outro</SelectItem>
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
            <FormItem>
              <FormLabel className={formCss['label']}>Formato:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className={formCss['select-trigger']}>
                    <SelectValue placeholder="Seu evento é..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className={formCss['select-content']}>
                  <SelectItem disabled={isPending} value="inperson" className={formCss['select-input']}>Presencial</SelectItem>
                  <SelectItem disabled={isPending} value="online" className={formCss['select-input']}>Online</SelectItem>
                  <SelectItem disabled={isPending} value="hybrid" className={formCss['select-input']}>Híbrido</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventDay"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className='text-hub-blue'>Data do evento:</FormLabel>
              <Popover>
                <PopoverTrigger asChild className={formCss['popover-trigger']}>
                  <FormControl>
                    <Button variant='outline' disabled={isPending}>
                      {field.value?.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, "dd LLL, y")} - {" "}
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
                    className='text-hub-lightgray '
                    mode="range"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date("2024-08-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventTimeStarts"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={formCss['label']}>Horário de início do evento (Horas: minutos):</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending} placeholder="Horário do início do evento aqui..."
                  {...field} className={formCss['time-input']} type='time' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventTimeEnds"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={formCss['label']}>Horário de encerramento do evento (Horas: minutos):</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending} placeholder="Horário do encerramento do evento aqui..."
                  {...field} className={formCss['time-input']} type='time' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subscribePeriod"
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel className={formCss['label']}>Data de abertura e encerramento das inscrições:</FormLabel>
              <Popover>
                <PopoverTrigger asChild className={formCss['popover-trigger']}>
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
                    className='text-hub-lightgray'
                    mode='range'
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date('2024-08-10')}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={formCss['label']}>Valor da inscrição: (mantenha zero caso seja gratuito)</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="Valor da inscrição aqui..." {...field} type='number'
                  className={`${inputCss['basic-input-config']} px-3 py-1 h-9 w-full focus:border-hub-blue focus:text-hub-blue`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="participants_limit"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={formCss['label']}>Limite de participantes: (mantenha zero caso não haja)</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="Limite de participantes do evento aqui..."
                  {...field} type='number'
                  className={`${inputCss['basic-input-config']} px-3 py-1 h-9 w-full focus:border-hub-blue focus:text-hub-blue`}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton css='mt-4'>Criar evento</SubmitButton>
      </form>
    </Form>
  )
}

export default CreateNewEventForm