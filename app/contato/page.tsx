import { Motion } from '@/components/motion-wrapper'
import { FormContato } from './_components/form-contato'

const scaleAnimation = {
  hidden: {
    scale: 0.8,
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      delayChildren: 0.2,
      staggerChildren: 0.5,
    },
  },
}

const bottomToTopAnimation = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
  },
}

export default function ContatoPage() {
  return (
    <Motion
      type="main"
      variants={scaleAnimation}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0 }}
      className="flex h-full flex-col gap-8 rounded-md border border-border bg-card p-2 shadow-shape md:p-4 lg:p-8"
    >
      <Motion
        type="div"
        variants={bottomToTopAnimation}
        className="flex flex-col gap-4 text-center"
      >
        <h1 className="font-semibold text-4xl uppercase md:text-5xl lg:text-6xl">
          Entre em contato
        </h1>
        <p>
          Quer entrar em contato comigo? Preencha o formulário ao lado e
          entrarei em contato o mais rápido possível.
        </p>
      </Motion>
      <FormContato />
    </Motion>
  )
}
