import { Icons } from '@/components/icons'
import { Tecnologys } from '@/components/tecnologys'

const skillsList = [
  { name: 'HTML', icon: Icons.html },
  { name: 'CSS', icon: Icons.css },
  { name: 'Tailwind', icon: Icons.tailwindcss },
  { name: 'JavaScript', icon: Icons.javascript },
  { name: 'Shadcn', icon: Icons.shadcn },
  { name: 'React', icon: Icons.react },
]
const learningList = [
  { name: 'TypeScript', icon: Icons.typescript },
  { name: 'Next.js', icon: Icons.nextjs },
  { name: 'Prisma', icon: Icons.prisma },
  { name: 'Framer Motion', icon: Icons.framermotion },
]

const toolsList = [
  { name: 'Git', icon: Icons.git },
  { name: 'Git Hub', icon: Icons.gitHub },
  { name: 'Vs Code', icon: Icons.vscode },
  { name: 'Figma', icon: Icons.figma },
]
export function Skills() {
  return (
    <section className="flex flex-col gap-4 md:flex-row">
      <div className="flex h-28 w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-md border border-border bg-card p-2 shadow-shape">
        {skillsList.map(tech => (
          <Tecnologys key={tech.name} item={tech} />
        ))}
      </div>
      <div className="flex h-28 w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-md border border-border bg-card p-2 shadow-shape">
        {learningList.map(tech => (
          <Tecnologys key={tech.name} item={tech} />
        ))}
      </div>
      <div className="flex h-28 w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-md border border-border bg-card p-2 shadow-shape">
        {toolsList.map(tech => (
          <Tecnologys key={tech.name} item={tech} />
        ))}
      </div>
    </section>
  )
}
