import { Nunito } from 'next/font/google'
import './globals.css'
import NavbarComponent from '@/components/navbar/navbar.component'

const nunito = Nunito({
  subsets: ['latin'],
  style:['normal','italic'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NavbarComponent />
        {children}
      </body>
    </html>
  )
}
