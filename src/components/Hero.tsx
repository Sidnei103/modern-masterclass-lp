import Image from "next/image"
import { Calendar } from "lucide-react"
import RegistrationForm from "./RegistrationForm"

export default function Hero() {
  return (
    <div className="relative bg-hero-gradient overflow-hidden pb-0">
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/10" />
      <div className="container mx-auto px-4 pt-4 md:pt-8 relative z-10">
        <div className="flex justify-center mb-4 md:mb-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light rounded-lg blur-md opacity-25 group-hover:opacity-50 transition duration-300" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Color%20logo%20-%20no%20background-NfEEZEWS4ew1UiYbL9JxRe3nC7yUpX.png"
              alt="Academia de Metas Logo"
              width={280}
              height={80}
              className="relative h-12 md:h-16 w-auto"
              loading="eager"
              priority
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center mt-4 md:mt-8">
          <div className="inline-block bg-gradient-to-r from-primary via-primary-light to-primary p-[2px] rounded-full mb-4 md:mb-6 hover:shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
            <div className="bg-gradient-to-br from-secondary to-black px-4 md:px-6 py-1 md:py-2 rounded-full">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary font-semibold animate-pulse-soft text-sm md:text-base">
                MASTER CLASS EXCLUSIVA
              </span>
            </div>
          </div>

          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-6 text-white">
            Descubra como transformar seu
            <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary animate-pulse-soft">
              {" "}
              time de vendas em uma <br className="md:hidden" />
              máquina de alta performance{" "}
            </span>
            <br className="hidden md:inline" />
            em 2025
          </h1>

          <p className="hidden md:block text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            O segredo das equipes que batem meta todos os meses
          </p>

          <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-12">
            <Calendar className="w-6 h-6 md:w-8 md:h-8 text-primary animate-float" />
            <span className="text-base md:text-2xl text-white font-medium">18/02 às 19h • 100% Online e Gratuito</span>
          </div>
        </div>

        <div className="max-w-md mx-auto mt-8 md:mt-12">
          <RegistrationForm />
        </div>
      </div>
    </div>
  )
}

