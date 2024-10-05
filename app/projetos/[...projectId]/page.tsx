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
import Link from 'next/link'
import { notFound } from 'next/navigation'

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
      <section className="gap-4 rounded-md border border-border p-4 lg:p-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl uppercase md:text-4xl lg:text-5xl">
            {projeto.title}
          </h1>
          <h2>{projeto.type}</h2>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8">
          <p className="text-muted-foreground">{projeto.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            {projeto.technologies.map(tech => (
              <Tecnologys key={tech.name} item={tech} />
            ))}
          </div>
          <div className="flex items-center gap-4">
            {projeto.links.map(link => {
              return (
                <Link
                  key={link.type}
                  href={link.href}
                  className={cn(
                    buttonVariants(),
                    'h-16 w-full max-w-40 gap-3 uppercase'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.type === 'Website' ? 'Visite Aqui' : 'Github'}
                  <link.icon className="size-6" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      <section>
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
      </section>
    </main>
  )
}
