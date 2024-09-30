import { Tecnologys } from '@/components/tecnologys'
import { buttonVariants } from '@/components/ui/button'
import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

export function LastProject() {
  return (
    <section className="flex flex-col gap-4 md:h-80 md:flex-row">
      <div className="overflow-hidden rounded-md shadow-shape md:w-full md:max-w-52">
        <img
          className="h-60 w-full object-cover object-top md:h-full"
          src={DATA.projects[0].images[0].src}
          alt="luan"
        />
      </div>
      <div className="flex items-center gap-2 rounded-md border border-border bg-card p-4 shadow-shape md:w-full">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl lg:text-2xl ">Último Projeto</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl">
              {DATA.projects[0].original}
            </h3>
            <p className="text-muted-foreground">
              {DATA.projects[0].description}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-4 ">
              <Tecnologys items={DATA.projects[0].technologies.slice()} />
            </div>
            <Link
              href={DATA.projects[0].href}
              className={cn(buttonVariants(), 'group relative w-fit uppercase')}
            >
              Mais
              <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-2 group-hover:opacity-100">
                <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
