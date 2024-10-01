'use server'

import { ContactSchema, type FormState, type TContactData } from './schema'

const ACCESS_KEY = process.env.WEB_FORM_TOKEN

export async function sendContact(formData: TContactData): Promise<FormState> {
  const validationFields = ContactSchema.safeParse(formData)

  if (!validationFields.success) {
    return {
      message: 'Campos ausentes. Falha ao enviar messagem.',
      status: 400,
    }
  }
  const { nameContact, emailContact, messageContact } = validationFields.data
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        name: nameContact,
        email: emailContact,
        message: messageContact,
      }),
    })

    const httpStatus = response.status
    const result = await response.json()

    if (result.success) {
      return {
        message: `${nameContact}, sua mensagem foi enviada com sucesso.`,
        status: httpStatus,
      }
    }

    return {
      message:
        'Falha ao enviar a mensagem. Verifique os dados e tente novamente.',
      status: httpStatus,
    }
  } catch (error) {
    return {
      message: 'Falha ao enviar messagem.',
      status: 500,
    }
  }
}
