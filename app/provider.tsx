import { ThemeProvider } from '@/components/theme/theme-provider'

import type { ReactNode } from 'react'

export function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
}
