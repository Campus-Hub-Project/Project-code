'use client'

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'

import { Textarea } from '@/components/ui/textarea'
import React, { useTransition } from 'react'

import { format } from "date-fns"
import { useForm } from 'react-hook-form'

import { newEventSchemaType, newEventSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'

import { createNewEvent } from '@/lib/events/newEvent'

import inputCss from '@/styles/Input.module.css'
import btnCss from '@/styles/Button.module.css'

const EventForm = () => {

  const [isPending, startTransition] = useTransition()

  const form = useForm<newEventSchemaType>({
    resolver: zodResolver(newEventSchema),
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

  const submitForm = async (data: newEventSchemaType) => {

    try {
      startTransition(async () => {
        await createNewEvent(data)
        alert("Evento criado com sucesso")
        form.reset()
      })
    } catch (error) {
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
              <FormLabel className='text-hub-blue'>Nome do evento:</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="Nome do evento aqui..." {...field}
                  className={`${inputCss['basic-input-config']} focus:border-hub-blue focus:text-hub-blue`}
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
              <FormLabel className='text-hub-blue'>Descrição do evento:</FormLabel>
              <FormControl>
                <Textarea
                  disabled={isPending}
                  placeholder='Pontos mais importantes do evento aqui...' {...field}
                  className={`${inputCss['focus:border-hub-blue focus:text-hub-blue']} h-28 focus:border-hub-blue focus:text-hub-blue`}
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
              <FormLabel className='text-hub-blue'>Tipo do evento:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className='rounded border-2 border-hub-lightgray text-hub-lightgray outline-none'>
                    <SelectValue placeholder="Seu evento é um(a)..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent
                  className='cursor-pointer bg-hub-white rounded border-2 border-hub-lightgray text-hub-lightgray'>
                  <SelectItem disabled={isPending} value="lectures" className={inputCss['basic-select-config']}>Palestra</SelectItem>
                  <SelectItem disabled={isPending} value="workshop" className={inputCss['basic-select-config']}>Workshop</SelectItem>
                  <SelectItem disabled={isPending} value="bootcamp" className={inputCss['basic-select-config']}>Bootcamp</SelectItem>
                  <SelectItem disabled={isPending} value="conference" className={inputCss['basic-select-config']}>Conferência</SelectItem>
                  <SelectItem disabled={isPending} value="congress" className={inputCss['basic-select-config']}>Congresso</SelectItem>
                  <SelectItem disabled={isPending} value="other" className={inputCss['basic-select-config']}>Outro</SelectItem>
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
              <FormLabel className='text-hub-blue'>Formato:</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger
                    className='rounded border-2 border-hub-lightgray text-hub-lightgray outline-none'>
                    <SelectValue placeholder="Seu evento é..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className='cursor-pointer bg-hub-white rounded border-2 border-hub-lightgray text-hub-lightgray'>
                  <SelectItem disabled={isPending} value="inperson" className={inputCss['basic-select-config']}>Presencial</SelectItem>
                  <SelectItem disabled={isPending} value="online" className={inputCss['basic-select-config']}>Online</SelectItem>
                  <SelectItem disabled={isPending} value="hybrid" className={inputCss['basic-select-config']}>Híbrido</SelectItem>
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
                <PopoverTrigger asChild
                  className={`${inputCss['basic-input-config']} hover:text-hub-blue hover:border-hub-blue`}>
                  <FormControl>
                    <Button variant='outline' disabled={isPending}>
                      {/*
                      Tem algum valor no campo from ? 
                        Tem algum valor no campo to ?
                          -- Mostre formatado assim --
                        -- Mostre formatado assim --
                      -- Mostre a frase --
                      */}
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
              <FormLabel className='text-hub-blue'>Horário de início do evento (Horas: minutos):</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="Horário do início do evento aqui..." {...field}
                  className='
                    rounded border-2 border-hub-lightgray text-hub-lightgray
                    outline-none focus:border-hub-blue focus:text-hub-blue cursor-pointer'
                  type='time'
                />
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
              <FormLabel className='text-hub-blue'>Horário de encerramento do evento (Horas: minutos):</FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="Horário do encerramento do evento aqui..." {...field}
                  className='
                    rounded border-2 border-hub-lightgray text-hub-lightgray
                    outline-none focus:border-hub-blue focus:text-hub-blue cursor-pointer'
                  type='time'
                />
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
              <FormLabel className='text-hub-blue'>Data de abertura e encerramento das inscrições:</FormLabel>
              <Popover>
                <PopoverTrigger asChild
                  className={`${inputCss['basic-input-config']} hover:text-hub-blue hover:border-hub-blue`}>
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
              <FormLabel className='text-hub-blue'>Valor da inscrição: (mantenha zero caso seja gratuito)</FormLabel>
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
              <FormLabel className='text-hub-blue'>Limite de participantes: (mantenha zero caso não haja)</FormLabel>
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
        <Button type="submit" className={btnCss['basic-button-config']}>
          Criar evento
        </Button>
      </form>
    </Form>
  )
}

export default EventForm