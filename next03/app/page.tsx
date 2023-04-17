import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home",
  description: "The home page for the app "
}

export default function Home() {
  return (
    <main>
     <h1>Home Page</h1>
     <p>
      <Link href="/users">Users</Link>
     </p>
    </main>
  )
}
