import { Motion, MotionImagem, MotionLink } from '@/components/motion-wrapper'
import { type Tech, Tecnologys } from '@/components/tecnologys'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { IconProps } from '@radix-ui/react-icons/dist/types'
import type { StaticImageData } from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'

type TProjectCard = {
  title: string
  href: string
  type: string
  original: string
  description: string
  technologies: Tech[]
  links: {
    type: string
    href: string
    icon: (props: IconProps) => JSX.Element
  }[]
  images: StaticImageData[]
}

interface ProjectCardProps {
  item: TProjectCard
}

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const imageVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
}

const linkVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
}

const titleVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
}

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <Motion
      type="article"
      key={item.title}
      variants={cardVariants}
      initial={'hidden'}
      whileInView={'show'}
      viewport={{ once: true, amount: 0 }}
      className="flex w-full flex-col gap-4 overflow-hidden rounded-md border border-border bg-card p-2 shadow-shape md:p-4 lg:max-w-screen-sm"
    >
      <div className="w-full overflow-hidden rounded-md">
        <MotionImagem
          variants={imageVariants}
          className="h-96 w-full object-cover object-left-top"
          src={item.images[0].src}
          alt={`Imagem do projeto ${item.title}`}
          width={item.images[0].width}
          height={item.images[0].height}
        />
      </div>
      <div className="flex flex-col justify-between gap-2">
        <Motion type="h2" variants={titleVariants} className="text-2xl">
          {item.title}
        </Motion>
        <div className="flex gap-4">
          {item.technologies.map(tech => (
            <Tecnologys key={tech.name} item={tech} />
          ))}
        </div>
        <MotionLink
          variants={linkVariants}
          href={`/projetos/${item.original}`}
          className={cn(buttonVariants(), 'group relative w-fit uppercase')}
          aria-label={`Leia mais sobre o projeto ${item.title}`}
        >
          Ver Mais
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
            <FaArrowRight />
          </div>
        </MotionLink>
      </div>
    </Motion>
  )
}
