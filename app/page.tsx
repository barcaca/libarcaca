import { About } from './_components/about'
import { LastProject } from './_components/last-project'
import { Skills } from './_components/skills'

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <About />
      <Skills />
      <LastProject />
    </main>
  )
}
