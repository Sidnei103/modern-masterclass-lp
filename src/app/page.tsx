import Hero from "@/components/Hero"
import Benefits from "@/components/Benefits"
import Mentors from "@/components/Mentors"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-secondary">
      <Hero />
      <div className="space-y-0">
        <Benefits />
        <Mentors />
      </div>
      <Footer />
    </main>
  )
}

