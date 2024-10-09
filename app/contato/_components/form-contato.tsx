'use client'

import { sendContact } from '@/actions/contact/send'
import {
  ContactSchema,
  type FormState,
  type TContactData,
} from '@/actions/contact/send/schema'
import { Motion } from '@/components/motion-wrapper'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { useForm, useFormContext } from 'react-hook-form'

const defaultValues = {
  nameContact: '',
  emailContact: '',
  messageContact: '',
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
}

export function FormContato() {
  const [isPending, startTransition] = useTransition()
  const [info, setInfo] = useState<FormState>()

  const form = useForm<TContactData>({
    resolver: zodResolver(ContactSchema),
    defaultValues,
  })

  async function onSendContact(formData: TContactData) {
    startTransition(() => {
      sendContact(formData).then(data => {
        if (data.status === 200) {
          form.reset()
        }
        setInfo(data)
      })
    })
  }

  const rightToLeft = {
    hidden: { opacity: 0, x: 100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: 'easeInOut',
      },
    },
  }

  const leftToRight = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSendContact)}
        className="mx-auto flex w-full max-w-screen-sm flex-col md:gap-4"
      >
        <Motion type="div" variants={rightToLeft}>
          <FormFieldItem name="nameContact" type="text" placeholder="Nome" />
        </Motion>
        <Motion type="div" variants={leftToRight}>
          <FormFieldItem name="emailContact" type="email" placeholder="Email" />
        </Motion>
        <Motion type="div" variants={rightToLeft}>
          <FormFieldItem
            name="messageContact"
            type="text"
            placeholder="Messagem"
            isTextArea
          />
        </Motion>
        <Button
          type="submit"
          className="mt-2 h-14 w-full p-4 text-base uppercase"
          disabled={isPending}
        >
          Enviar
        </Button>
        {info && (
          <p
            className={`text-center text-sm ${info.status === 200 ? 'text-green-600' : 'text-destructive'}`}
          >
            {info.message}
          </p>
        )}
      </form>
    </Form>
  )
}

interface FormFieldItemProps {
  name: string
  type?: string
  placeholder?: string
  isTextArea?: boolean
}

function FormFieldItem({
  name,
  type,
  placeholder,
  isTextArea,
}: FormFieldItemProps) {
  const { control } = useFormContext()
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className="sr-only">{name}</FormLabel>
            <FormControl>
              {!isTextArea ? (
                <Input
                  type={type}
                  placeholder={placeholder}
                  {...field}
                  className="h-auto w-full bg-background p-4 text-base placeholder:text-foreground placeholder:uppercase focus-visible:placeholder:text-muted-foreground"
                />
              ) : (
                <Textarea
                  className="h-[250px] w-full bg-background p-4 text-base placeholder:text-foreground placeholder:uppercase focus-visible:placeholder:text-muted-foreground"
                  placeholder={placeholder}
                  {...field}
                />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  )
}
