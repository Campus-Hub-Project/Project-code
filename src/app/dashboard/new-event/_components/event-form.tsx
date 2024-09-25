'use client'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { format } from "date-fns"

import { useForm } from 'react-hook-form'

const EventForm = () => {

  const form = useForm()

  const submitForm = async () => {
    console.log("Form submetido");

  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-hub-blue'>Nome do evento:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nome do evento aqui..." {...field}
                  className='
                    rounded border-2 border-hub-lightgray text-hub-lightgray
                    outline-none focus:border-hub-blue focus:text-hub-blue'
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
                  placeholder='Pontos mais importantes do evento aqui...' {...field}
                  className='
                    h-28 rounded border-2 border-hub-lightgray text-hub-lightgray
                    outline-none focus:border-hub-blue focus:text-hub-blue'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventType"
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
                <SelectContent className='cursor-pointer bg-hub-white rounded border-2 border-hub-lightgray text-hub-lightgray'>
                  <SelectItem value="lectures" className='cursor-pointer focus:text-hub-blue'>Palestra</SelectItem>
                  <SelectItem value="workshop" className='cursor-pointer focus:text-hub-blue'>Workshop</SelectItem>
                  <SelectItem value="bootcamp" className='cursor-pointer focus:text-hub-blue'>Bootcamp</SelectItem>
                  <SelectItem value="conference" className='cursor-pointer focus:text-hub-blue'>Conferência</SelectItem>
                  <SelectItem value="congress" className='cursor-pointer focus:text-hub-blue'>Congresso</SelectItem>
                  <SelectItem value="other" className='cursor-pointer focus:text-hub-blue'>Outro</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventFormat"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-hub-blue'>Formato:</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger className='rounded border-2 border-hub-lightgray text-hub-lightgray outline-none'>
                    <SelectValue placeholder="Seu evento é..." />
                  </SelectTrigger>
                  <SelectContent className='cursor-pointer bg-hub-white rounded border-2 border-hub-lightgray text-hub-lightgray'>
                    <SelectGroup className='bg-hub-white cursor-pointer'>
                      <SelectItem value="lectures" className='cursor-pointer focus:text-hub-blue'>Presencial</SelectItem>
                      <SelectItem value="workshop" className='cursor-pointer focus:text-hub-blue'>Online</SelectItem>
                      <SelectItem value="bootcamp" className='cursor-pointer focus:text-hub-blue'>Híbrido</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
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
                  className='rounded border-2 border-hub-lightgray text-hub-lightgray hover:text-hub-blue hover:border-hub-blue'>
                  <FormControl>
                    <Button variant='outline'>
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Escolha uma data</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
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
          name="applicationPeriod"
          render={({ field }) => (
            <FormItem className='flex flex-col'>
              <FormLabel className='text-hub-blue'>Abertura e encerramento das inscrições:</FormLabel>
              <Popover>
                <PopoverTrigger asChild
                  className='rounded border-2 border-hub-lightgray text-hub-lightgray hover:text-hub-blue hover:border-hub-blue'>
                  <FormControl>
                    <Button variant='outline'>
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Escolha uma data</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode='range'
                    selected={field.value}
                    onSelect={field.onChange}
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
          name="eventValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-hub-blue'>Valor da inscrição: (deixe zero caso seja gratuito)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Valor do evento aqui..." {...field} type='number'
                  className='
                    px-3 py-1 h-9 w-full rounded border-2 border-hub-lightgray text-hub-lightgray
                    outline-none focus:border-hub-blue focus:text-hub-blue'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventLimit"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-hub-blue'>Limite de participantes: (deixe zero caso não haja)</FormLabel>
              <FormControl>
                <Input placeholder="Limite de participantes do evento aqui..." {...field} type='number'
                  className='
                px-3 py-1 h-9 w-full rounded border-2 border-hub-lightgray text-hub-lightgray
                outline-none focus:border-hub-blue focus:text-hub-blue'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className='
        border-hub-blue border-2 rounded text-sm text-hub-blue bg-hub-white
                hover:bg-hub-blue hover:text-hub-white'>
          Criar evento
        </Button>
      </form>
    </Form>
  )
}

export default EventForm