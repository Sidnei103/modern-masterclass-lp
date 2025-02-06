import Image from "next/image"

const mentors = [
  {
    name: "Caio Vidal",
    role: "Especialista em Vendas B2B",
    description:
      "Com mais de 17 anos de experiência em vendas B2B, Caio é head de vendas na maior empresa de marketing e vendas da América Latina. Teve um papel estratégico na expansão da RD Station, contribuindo para o salto de 7 mil para 50 mil clientes. Seu foco é ajudar líderes a escalarem suas equipes com previsibilidade e consistência.",
    image: "https://i.imgur.com/00lTJEp.png",
  },
  {
    name: "Lucas Alves",
    role: "Especialista em Negociação",
    description:
      'Especialista em negociação pela Harvard e co-autor do best-seller "O Ambiente Muda Tudo", Lucas possui 16 anos de experiência em vendas, mais de 600 vendas B2B e já liderou times na RD Station e PicPay. Ele ensina líderes a transformarem seus times em máquinas de alta performance.',
    image: "https://i.imgur.com/MfZxOfM.png",
  },
]

export default function Mentors() {
  return (
    <section className="py-12 bg-gradient-to-br from-secondary via-black to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary animate-pulse-soft">
              Conheça Seus Mentores
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {mentors.map((mentor, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-light to-primary rounded-[2rem] blur-md opacity-25 group-hover:opacity-50 transition duration-300" />
              <div className="relative bg-gradient-to-br from-black/90 to-secondary/90 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-64 h-64 mb-6 rounded-[2rem] overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={mentor.image || "/placeholder.svg"}
                      alt={mentor.name}
                      width={512}
                      height={512}
                      quality={100}
                      className="object-cover w-full h-full rounded-[2rem]"
                      priority={index === 0}
                    />
                  </div>
                  <div className="max-w-lg">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light mb-2">
                      {mentor.name}
                    </h3>
                    <p className="text-primary-light font-medium mb-4">{mentor.role}</p>
                    <p className="text-gray-400 text-base leading-relaxed">{mentor.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

