import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Certifications } from "@/components/certifications"
import { Booking } from "@/components/booking"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Certifications />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
