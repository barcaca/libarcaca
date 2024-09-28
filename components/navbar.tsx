'use client'
import Link from 'next/link'

import { dataAttr } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Icons } from './icons'
import { ThemeToggle } from './theme/theme-toggle'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  function handleCloseMenu() {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav
      className="z-10 flex h-auto w-full items-center"
      aria-label="Navegação Principal"
    >
      <header className="flex w-full items-center justify-between gap-8">
        <div className="flex items-center gap-8">
          {/* <!-- Mobile menu button --> */}
          <Button
            variant={'outline'}
            size={'icon'}
            className="group z-30 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            autoFocus={isMenuOpen}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            data-open={dataAttr(isMenuOpen)}
          >
            <span className="sr-only">
              {isMenuOpen
                ? 'Fechar menu de navegação'
                : 'Abrir menu de navegação'}
            </span>
            <span
              className="before:-translate-y-1 group-data-[open=true]:after:-rotate-45 pointer-events-none flex h-full w-full flex-col items-center justify-center before:block before:h-px before:w-4 before:bg-current before:transition-transform after:block after:h-px after:w-4 after:translate-y-1 after:rotate-0 after:bg-current after:transition-transform group-data-[open=true]:after:translate-y-0 group-hover:group-data-[open=true]:after:translate-y-0 group-hover:group-data-[open=true]:after:rotate-0 group-data-[open=true]:before:translate-y-px group-data-[open=true]:before:rotate-45 group-hover:group-data-[open=true]:before:translate-y-0 group-hover:group-data-[open=true]:before:rotate-0"
              aria-hidden="true"
            />
          </Button>
          <Link href={'/'} aria-label="Home">
            <Icons.logo />
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            <NavBarItem onCloseMenu={handleCloseMenu} />
          </ul>
          <ThemeToggle />
        </div>
      </header>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div
        className={`${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'} fixed inset-0 z-20 h-full w-full bg-muted/70 transition `}
        aria-hidden={!isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        aria-hidden={!isMenuOpen}
        className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-0 z-20 h-full w-full max-w-80 p-2 transition duration-300 `}
      >
        <div className="flex h-full w-full flex-col gap-8 rounded-md bg-background px-2 xs:px-6 py-16 xs:py-20">
          <Link href={'/'} aria-label="Home">
            <Icons.logo />
          </Link>
          <Separator />
          <ul className="flex flex-col gap-4">
            <NavBarItem onCloseMenu={handleCloseMenu} />
          </ul>
        </div>
      </div>
    </nav>
  )
}

const navLink = [
  { name: 'Projetos', href: '/projetos' },
  { name: 'Contato', href: '/contato' },
]

interface NavBarItemProps {
  onCloseMenu: () => void
}

function NavBarItem({ onCloseMenu }: NavBarItemProps) {
  const pathname = usePathname()
  return navLink.map(link => {
    const isActive = pathname === link.href
    return (
      <li key={link.href}>
        <Link
          href={link.href}
          onClick={onCloseMenu}
          className={`${isActive ? 'font-semibold text-foreground after:w-full' : 'text-muted-foreground hover:text-foreground'} relative py-3 text-lg uppercase after:absolute after:bottom-1 after:block after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-500 hover:after:w-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`}
          data-active={dataAttr(isActive)}
        >
          {link.name}
        </Link>
      </li>
    )
  })
}
