import { z } from 'zod'

export const FormSchema = z.object({
  nameContact: z.string().min(1, { message: 'O nome é obrigatório' }),
  emailContact: z.string().email({ message: 'O email é inválido' }),
  messageContact: z.string().min(1, { message: 'Preencha sua messagem' }),
})

export const ContactSchema = FormSchema

export type TContactData = z.infer<typeof ContactSchema>

export type FormState = {
  message: string
  status: number
}
