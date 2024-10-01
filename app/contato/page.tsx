import { FormContato } from './_components/form-contato'

export default function ContatoPage() {
  return (
    <main className="flex h-full flex-col gap-8 rounded-md border border-border bg-card p-2 shadow-shape md:p-4 lg:p-8">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="font-semibold text-4xl uppercase md:text-5xl lg:text-6xl">
          Entre em contato
        </h1>
        <p>
          Quer entrar em contato comigo? Preencha o formulário ao lado e
          entrarei em contato o mais rápido possível.
        </p>
      </div>
      <FormContato />
    </main>
  )
}
