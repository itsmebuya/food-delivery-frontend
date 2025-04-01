'use client'

import { Footer } from "./_features/footer"
import { Header } from "./_features/header"
import { Menu } from "./_features/menu"

export default function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}