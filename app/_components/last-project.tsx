import { Motion } from '@/components/motion-wrapper'
import { Tecnologys } from '@/components/tecnologys'
import { buttonVariants } from '@/components/ui/button'
import { DATA } from '@/data/resume'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'

const scaleAnimation = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const animateBottomToTop = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function LastProject() {
  return (
    <section className="flex flex-col gap-4 md:h-auto md:flex-row">
      <Motion
        type="div"
        variants={scaleAnimation}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 0 }}
        className="overflow-hidden rounded-md shadow-shape md:w-full md:max-w-60"
      >
        <Image
          className="h-60 w-full object-cover object-left-top md:h-full"
          src={DATA.projects[0].images[0].src}
          alt="luan"
          width={DATA.projects[0].images[0].width}
          height={DATA.projects[0].images[0].height}
        />
      </Motion>
      <Motion
        type="div"
        variants={animateBottomToTop}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: true, amount: 0 }}
        className="flex items-center gap-2 rounded-md border border-border bg-card p-4 shadow-shape md:w-full"
      >
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
              {DATA.projects[0].technologies.map(tech => (
                <Tecnologys key={tech.name} item={tech} />
              ))}
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
      </Motion>
    </section>
  )
}
