import { DATA } from '@/data/resume'

export function About() {
  return (
    <section className="flex flex-col gap-4 md:h-80 md:flex-row">
      <div className="flex flex-wrap items-center gap-2 md:w-full">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-4xl uppercase md:text-5xl lg:text-6xl">
            <span className="block text-transparent [-webkit-text-stroke:2px_#9e9bb0]">
              Luan
            </span>
            Barcaça
          </h1>
          <h2 className="text-2xl text-muted-foreground md:text-3xl lg:text-4xl">
            Desenvolvedor Front End
          </h2>
        </div>
        <p className="text-muted-foreground lg:text-lg">{DATA.about}</p>
      </div>
      <div className="overflow-hidden rounded-md shadow-shape md:w-full md:max-w-52">
        <img
          className="h-60 w-full object-cover md:h-full"
          src="/pokedex-ss-01.png"
          alt="luan"
        />
      </div>
    </section>
  )
}
