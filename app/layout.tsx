import { NavBar } from '@/components/navbar'
import { DATA } from '@/data/resume'
import { poppins, raleway } from '@/fonts/font'

import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Provider } from './provider'
import { Footer } from '@/components/footer'

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
        <Provider>
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 xs:px-8 py-4 xs:py-8">
            <NavBar />
            {children}
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  )
}
