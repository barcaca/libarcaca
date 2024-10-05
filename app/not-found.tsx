import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-7xl md:text-8xl lg:text-9xl">404</h1>
      <h2>Página não encontrada</h2>
      <p className="text-muted-foreground">
        A paginá que você está procurando não existe ou foi movida.
      </p>
      <Link href="/" className={cn(buttonVariants())}>
        Vai para Homepage <ArrowUpRight className="size-5" />
      </Link>
    </div>
  )
}
