'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { dataAttr } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isClick, setIsClick] = useState(false)

  function handleThemeChange() {
    setIsClick(!isClick)
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Skeleton className="size-9" />
  }

  return (
    <Button
      variant={'outline'}
      size="icon"
      className="group relative overflow-hidden"
      onClick={handleThemeChange}
      aria-label="Mudar Tema"
      data-state={dataAttr(isClick)}
    >
      <Sun className="group-data-[state=true]:-rotate-180 rotate-0 scale-100 transition-transform ease-in group-data-[state=true]:scale-0" />
      <Moon className="absolute rotate-180 scale-0 transition-transform ease-in group-data-[state=true]:rotate-0 group-data-[state=true]:scale-100" />
      <span className="sr-only">Mudar Tema</span>
    </Button>
  )
}
