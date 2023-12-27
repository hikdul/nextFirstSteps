import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'

/// ==> este layout es conocido como el root layout.
/// ==> es un high order component 
const inter = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Started uso Next',
  description: 'only for test next',
  applicationName: 'first Steps',
  creator: 'hikdul',
  keywords:'nada, pruebas, bastante,lento, al, inicio'

}

export default function RootLayout({children,}: {children: React.ReactNode}) 
{
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
