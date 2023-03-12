import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next Tutorial"
}

export default function Home() {
  return (
    <main >
      <h1>Home Page</h1>
      <Link href="/about"> About Page</Link>
      <br />
      <Link href="/users"> Check Users</Link>
    </main>
  )
}
