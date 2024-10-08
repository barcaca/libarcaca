import { Motion } from '@/components/motion-wrapper'
import { DATA } from '@/data/resume'

const transition = {
  duration: 0.8,
  ease: 'easeInOut',
}
const animateRightToLeft = {
  hidden: { opacity: 0, x: -200 },
  show: {
    opacity: 1,
    x: 0,
    transition,
  },
}

const animateLeftToRight = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition,
  },
}

const animateBottomToTop = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition,
  },
}

export function About() {
  return (
    <section className="flex flex-col gap-4 md:h-80 md:flex-row">
      <div className="flex flex-wrap items-center gap-2 md:w-full">
        <div className="flex flex-col gap-4">
          <Motion
            type="h1"
            variants={animateRightToLeft}
            initial={'hidden'}
            animate={'show'}
            className="font-semibold text-4xl uppercase md:text-5xl lg:text-6xl"
          >
            <span className="block text-transparent [-webkit-text-stroke:2px_#9e9bb0]">
              Luan
            </span>
            Barcaça
          </Motion>
          <Motion
            type="h2"
            variants={animateLeftToRight}
            initial={'hidden'}
            animate={'show'}
            className="text-2xl text-muted-foreground md:text-3xl lg:text-4xl"
          >
            Desenvolvedor Front End
          </Motion>
        </div>
        <Motion
          type="p"
          variants={animateBottomToTop}
          initial={'hidden'}
          animate={'show'}
          className="-z-10 text-muted-foreground lg:text-lg"
        >
          {DATA.about}
        </Motion>
      </div>
    </section>
  )
}
