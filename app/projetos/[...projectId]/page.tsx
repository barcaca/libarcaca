import { Motion, MotionLink } from '@/components/motion-wrapper'
import { Tecnologys } from '@/components/tecnologys'
import { buttonVariants } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { notFound } from 'next/navigation'

const titleAnimation = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const descriptionAnimation = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
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

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  },
}

export default function ProjectIdPage({
  params,
}: { params: { projectId: string } }) {
  const projeto = DATA.projects.find(
    project => project.original === String(params.projectId)
  )

  if (!projeto) {
    notFound()
  }

  return (
    <main className="grid gap-4">
      <Motion
        type="section"
        variants={fadeIn}
        initial={'hidden'}
        animate={'show'}
        className="gap-4 overflow-hidden rounded-md border border-border p-4 lg:p-8"
      >
        <Motion
          type="div"
          variants={titleAnimation}
          className="flex flex-col items-center gap-4 text-center"
        >
          <h1 className="text-4xl uppercase md:text-4xl lg:text-5xl">
            {projeto.title}
          </h1>
          <h2>{projeto.type}</h2>
        </Motion>
        <div className="flex flex-col gap-4 lg:gap-8">
          <Motion
            type="p"
            variants={descriptionAnimation}
            className="text-muted-foreground"
          >
            {projeto.description}
          </Motion>
          <div className="flex flex-wrap items-center gap-4">
            {projeto.technologies.map(tech => (
              <Tecnologys key={tech.name} item={tech} />
            ))}
          </div>
          <div className="flex items-center gap-4">
            {projeto.links.map(link => {
              return (
                <MotionLink
                  key={link.type}
                  href={link.href}
                  variants={linkVariants}
                  className={cn(
                    buttonVariants(),
                    'h-16 w-full max-w-40 gap-3 uppercase'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.type === 'Website' ? 'Visite Aqui' : 'Github'}
                  <link.icon className="size-6" />
                </MotionLink>
              )
            })}
          </div>
        </div>
      </Motion>
      <Motion
        type="section"
        variants={fadeIn}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Carousel>
          <CarouselContent>
            {projeto.images.map((image, i) => {
              // Caso seja a primeira seja thumbnail return
              if (i === 0) return
              return (
                <CarouselItem key={image.src}>
                  <div className="relative h-full max-h-80 overflow-hidden overflow-y-auto rounded-md border border-border shadow-shape md:max-h-[450px] ">
                    <Image
                      src={image}
                      width={image.width}
                      height={image.height}
                      alt={`Imagem do projeto ${projeto.title} `}
                      className="rounded-md object-contain"
                    />
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </Motion>
    </main>
  )
}
