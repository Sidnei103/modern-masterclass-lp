"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, Lock, Loader } from "lucide-react"

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const checkRateLimit = () => {
    const now = Date.now()
    const lastSubmitTime = localStorage.getItem("lastSubmitTime")
    if (lastSubmitTime && now - Number.parseInt(lastSubmitTime) < 60000) {
      return false
    }
    localStorage.setItem("lastSubmitTime", now.toString())
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!checkRateLimit()) {
      alert("Por favor, aguarde um minuto antes de enviar novamente.")
      return
    }

    setIsLoading(true)

    if (typeof window !== "undefined" && (window as any).fbq) {
      ;(window as any).fbq("track", "Lead")
    }

    const rdStationData = {
      event_type: "CONVERSION",
      event_family: "CDP",
      payload: {
        conversion_identifier: "master-class-inscricao",
        email: formData.email,
        name: formData.name,
        personal: {
          name: formData.name,
          email: formData.email,
        },
        legal_bases: [
          {
            category: "communications",
            type: "consent",
            status: "granted",
          },
        ],
      },
    }

    try {
      const response = await fetch(
        "https://api.rd.services/platform/conversions?api_key=onRIJPRsQUwmBBBvgslLmKlfSdzYmdSTkNrt",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(rdStationData),
        },
      )

      if (response.ok) {
        window.location.href = "https://materiais.academiademetas.com.br/master-class-obrigado-grupo-do-whatsapp"
      } else {
        console.error("Erro ao enviar dados para o RD Station")
        alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.")
      }
    } catch (error) {
      console.error("Erro na requisição:", error)
      alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent blur-xl" />

      <div className="relative bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-8 shadow-2xl">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent px-3 py-1 md:px-4 md:py-2 rounded-full text-black font-medium text-xs md:text-sm">
            <Lock className="w-3 h-3 md:w-4 md:h-4" />
            Vagas Limitadas
          </span>
        </div>

        <h3 className="text-lg md:text-2xl font-bold text-center mb-3 md:mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Garanta sua vaga
          </span>
          <br />
          <span className="text-white">para a Master Class</span>
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="name" className="text-white text-xs md:text-sm">
              Nome completo*
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-9 md:h-10 text-sm md:text-base"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-1 md:space-y-2">
            <Label htmlFor="email" className="text-white text-xs md:text-sm">
              E-mail*
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-9 md:h-10 text-sm md:text-base"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-black font-semibold text-sm md:text-base py-2 md:py-4 rounded-xl group"
          >
            {isLoading ? (
              <Loader className="animate-spin" />
            ) : (
              <>
                Quero Participar da Master Class
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>

          <p className="text-[10px] md:text-xs text-gray-400 text-center flex items-center justify-center gap-1 md:gap-2">
            <Lock className="w-3 h-3 md:w-4 md:h-4" />
            Suas informações estão seguras e não serão compartilhadas
          </p>
        </form>
      </div>
    </div>
  )
}

