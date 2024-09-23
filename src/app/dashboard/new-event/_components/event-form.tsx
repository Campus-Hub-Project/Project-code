'use client'
import { Button } from '@/components/ui/button'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

import { Form, useForm } from 'react-hook-form'


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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-hub-blue'>Descrição do evento:</FormLabel>
              <FormControl>
                <Textarea 
                placeholder='Pontos mais importantes do evento aqui...' {...field} 
                className='
                    px-3 py-1 h-24 w-full rounded border-2 border-hub-lightgray text-hub-lightgray
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
              <FormControl>
                <Select {...field}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seu evento é um..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className='bg-hub-white cursor-pointer'>
                      <SelectItem value="lectures">Palestra</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="bootcamp">Bootcamp</SelectItem>
                      <SelectItem value="conference">Conferência</SelectItem>
                      <SelectItem value="congress">Congresso</SelectItem>
                      <SelectItem value="other">Outro</SelectItem>
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
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-hub-blue'>Data do evento:</FormLabel>
              <FormControl>

              </FormControl>
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
                  <SelectTrigger>
                    <SelectValue placeholder="Seu evento é..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className='bg-hub-white cursor-pointer'>
                      <SelectItem value="lectures">Presencial</SelectItem>
                      <SelectItem value="workshop">Online</SelectItem>
                      <SelectItem value="bootcamp">Híbrido</SelectItem>
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-hub-blue'>Abertura e encerramento das inscrições:</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eventValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-hub-blue'>Valor da inscrição: (Coloque zero caso seja gratuito)</FormLabel>
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
              <FormLabel className='text-hub-blue'>Limite de participantes: (Coloque zero caso não haja)</FormLabel>
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
        border-hub-blue border-2 rounded flex items-center justify-center px-4 text-sm text-hub-blue
                hover:bg-hub-blue hover:text-hub-white'>Criar evento</Button>
      </form>
    </Form>
  )
}

export default EventForm