import { DATA } from '@/data/resume'
import { poppins, raleway } from '@/fonts/font'

import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Provider } from './provider'

export const metadata: Metadata = {
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      // biome-ignore lint/nursery/useSortedClasses: <explanation>
      className={`${poppins.variable} ${raleway.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
