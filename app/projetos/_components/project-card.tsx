import { type Tech, Tecnologys } from '@/components/tecnologys'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { IconProps } from '@radix-ui/react-icons/dist/types'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
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

export function ProjectCard({ item }: ProjectCardProps) {
  return (
    <article
      key={item.title}
      className="flex w-full flex-col gap-4 rounded-md border border-border bg-card p-2 shadow-shape md:p-4 lg:max-w-screen-sm"
      aria-labelledby={`projetos-${item.title}`}
    >
      <div className="w-full overflow-hidden rounded-md">
        <Image
          className="h-96 w-full object-cover object-left-top"
          src={item.images[0].src}
          alt={`Imagem do projeto ${item.title}`}
          width={item.images[0].width}
          height={item.images[0].height}
        />
      </div>
      <div className="flex flex-col justify-between gap-2">
        <h2 className="text-2xl" id={`projetos-${item.title}`}>
          {item.title}
        </h2>
        <p className="text-muted-foreground">{item.description}</p>
        <div className="flex gap-4">
          {item.technologies.map(tech => (
            <Tecnologys key={tech.name} item={tech} />
          ))}
        </div>
        <Link
          href={`/projetos/${item.original}`}
          className={cn(buttonVariants(), 'group relative w-fit uppercase')}
          aria-label={`Leia mais sobre o projeto ${item.title}`}
        >
          Ver Mais
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
            <FaArrowRight />
          </div>
        </Link>
      </div>
    </article>
  )
}
