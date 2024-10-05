import { DATA } from '@/data/resume'
import { ProjectCard } from './_components/project-card'

export default function ProjetoPage() {
  return (
    <main className="flex flex-col gap-8">
      <h1 className="text-center text-4xl uppercase md:text-5xl lg:text-6xl">
        Últimos Projetos
      </h1>
      <div className="grid flex-wrap gap-8 lg:grid-cols-2 ">
        {DATA.projects.map(item => {
          return <ProjectCard key={item.title} item={item} />
        })}
      </div>
    </main>
  )
}
