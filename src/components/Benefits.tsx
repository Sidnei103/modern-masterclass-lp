import { Target, Users, TrendingUp, Award } from "lucide-react"

const benefits = [
  {
    icon: <Target className="w-10 h-10" />,
    description:
      "Deseja transformar seu time de vendas e alcançar resultados extraordinários, superando suas metas todos os meses de 2025!",
  },
  {
    icon: <Users className="w-10 h-10" />,
    description:
      "Precisa de uma abordagem prática e estratégica para crescer nas vendas e superar desafios no mercado competitivo de 2025.",
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    description:
      "Quer entender como líderes estão alcançando sucesso, escalando suas equipes e maximizando resultados.",
  },
  {
    icon: <Award className="w-10 h-10" />,
    description: "Quer aprender como estruturar uma máquina de vendas de alta performance, do processo a execução.",
  },
]

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-hero-gradient via-black to-secondary">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      <div className="container mx-auto px-4 relative z-10 pt-16 pb-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">
              Essa aula é para você que:
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-gradient-to-br from-black/80 to-secondary/80 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="mb-4 text-primary group-hover:scale-110 transform transition-transform duration-300">
                  {benefit.icon}
                </div>
                <p className="text-gray-400 text-lg leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

