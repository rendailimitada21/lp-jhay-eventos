"use client";

import { MessageCircle, X, ChefHat, Flame, Pizza, Sparkles, Clock, Users, Star, CheckCircle2, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function JhayPizzasLanding() {
  const [showWhatsApp, setShowWhatsApp] = useState(true);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5563984576780?text=Olá! Gostaria de solicitar um orçamento para o buffet de pizzas da Jhay Pizzas.", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] font-sans">
      {/* WhatsApp Floating Button */}
      {showWhatsApp && (
        <button
          onClick={handleWhatsAppClick}
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=800&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#8B4513]/90 via-[#D2691E]/85 to-[#FF6347]/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 bg-[#FFD700]/20 backdrop-blur-sm rounded-full border-2 border-[#FFD700]">
              <p className="text-[#FFD700] font-semibold text-sm sm:text-base">🏆 3º Lugar no Festival Gastronômico de Taquaruçu</p>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              A Experiência de uma Pizzaria Gourmet no Conforto da Sua Casa
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-[#FFF8F0] mb-10 leading-relaxed max-w-3xl mx-auto">
              A Jhay Pizzas leva o autêntico rodízio de pizzas artesanais para o seu evento em Palmas, para que você possa aproveitar a festa sem se preocupar com nada.
            </p>

            <a
              href="https://wa.me/556381477800?text=Olá! Gostaria de solicitar um orçamento para o buffet de pizzas da Jhay Pizzas."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-[#FF6347] to-[#FF4500] text-white px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-lg sm:text-xl font-bold shadow-2xl hover:shadow-[#FF6347]/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              Solicitar Orçamento via WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>

            <p className="text-[#FFF8F0]/80 mt-6 text-sm sm:text-base">✨ Resposta em minutos • Orçamento sem compromisso</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B4513] mb-12">
              Cansado de festas com comida de baixa qualidade e muito trabalho?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: X,
                  text: "A bagunça e o estresse de cozinhar para todos",
                  color: "from-red-500 to-red-600"
                },
                {
                  icon: X,
                  text: "O risco de pizzas frias de delivery ou salgadinhos de má qualidade",
                  color: "from-orange-500 to-orange-600"
                },
                {
                  icon: X,
                  text: "A preocupação se a comida será suficiente para os convidados",
                  color: "from-red-600 to-red-700"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-red-50 to-orange-50 p-6 sm:p-8 rounded-2xl border-2 border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-xl"
                >
                  <div className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-full mb-4`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-[#8B4513] text-lg font-semibold leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#8B4513] to-[#A0522D]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8">
              Deixe a Jhay Pizzas Cuidar de Tudo
            </h2>

            <div className="bg-white/10 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border-2 border-white/20 mb-12">
              <p className="text-xl sm:text-2xl text-[#FFF8F0] leading-relaxed text-center">
                Nós transformamos sua casa na melhor pizzaria da cidade. Levamos nossa estrutura completa, ingredientes frescos e um pizzaiolo profissional. <span className="font-bold text-[#FFD700]">Você só tem uma tarefa: se divertir.</span>
              </p>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#FFD700] text-center mb-10">
              O que está incluso no nosso serviço?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Pizza,
                  title: "Buffet/Rodízio Completo",
                  description: "Pizzas servidas à vontade até todos estarem satisfeitos"
                },
                {
                  icon: Flame,
                  title: "Equipamentos Profissionais",
                  description: "Levamos nosso forno a gás de alta performance (que simula um forno a lenha)"
                },
                {
                  icon: ChefHat,
                  title: "Cardápio Personalizado",
                  description: "Você escolhe seus sabores favoritos (salgados e doces)"
                },
                {
                  icon: Sparkles,
                  title: "Zero Preocupação",
                  description: "Cuidamos de todos os utensílios e ingredientes"
                }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#FF6347] to-[#FF4500] p-3 rounded-xl flex-shrink-0">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{benefit.title}</h4>
                      <p className="text-[#FFF8F0]/90 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fermentation Section */}
      <section className="py-16 sm:py-24 bg-[#FFF8F0]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B4513] text-center mb-12 sm:mb-16">
              O Sabor Incomparável da Nossa Massa de Longa Fermentação
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop" 
                    alt="Massa de pizza artesanal"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                      <p className="text-[#8B4513] font-bold text-lg flex items-center gap-2">
                        <Clock className="w-5 h-5 text-[#FF6347]" />
                        Mínimo 48h de fermentação
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-[#8B4513] to-[#A0522D] p-8 sm:p-10 rounded-3xl shadow-2xl">
                  <div className="mb-6">
                    <div className="inline-block p-3 bg-[#FFD700] rounded-xl">
                      <ChefHat className="w-8 h-8 text-[#8B4513]" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-6">
                    Nosso Segredo é a Paciência
                  </h3>
                  
                  <p className="text-lg sm:text-xl text-[#FFF8F0] leading-relaxed mb-6">
                    Nossas massas são preparadas com um mix de farinhas especiais, <span className="font-bold text-[#FFD700]">incluindo duas importadas da Itália</span>. Elas passam por um processo de longa fermentação de no mínimo 48 horas.
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-[#FFD700]/30">
                    <p className="text-xl font-bold text-white mb-3">O resultado?</p>
                    <ul className="space-y-3 text-[#FFF8F0]">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
                        <span>Uma pizza leve e de fácil digestão</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
                        <span>Sabor profundo e autêntico</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-1" />
                        <span>Incrivelmente deliciosa</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B4513] text-center mb-12 sm:mb-16">
              Quem Prova, Aprova
            </h2>

            {/* Stats Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
              <div className="bg-gradient-to-br from-[#FF6347] to-[#FF4500] p-8 sm:p-10 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <Users className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4" />
                <p className="text-5xl sm:text-6xl font-bold text-white mb-2">+100</p>
                <p className="text-xl sm:text-2xl text-white/90 font-semibold">Clientes Satisfeitos</p>
              </div>

              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] p-8 sm:p-10 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                <Star className="w-12 h-12 sm:w-16 sm:h-16 text-[#8B4513] mx-auto mb-4" />
                <p className="text-5xl sm:text-6xl font-bold text-[#8B4513] mb-2">3º</p>
                <p className="text-xl sm:text-2xl text-[#8B4513] font-semibold">Festival Gastronômico</p>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#8B4513] text-center mb-8">
                Nossos Eventos em Ação
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop",
                  "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=400&h=400&fit=crop"
                ].map((img, index) => (
                  <div 
                    key={index}
                    className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <img 
                      src={img} 
                      alt={`Evento Jhay Pizzas ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8B4513]/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#8B4513] text-center mb-8">
                O Que Nossos Clientes Dizem
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Maria Silva",
                    text: "A festa de aniversário da minha filha foi um sucesso absoluto! As pizzas estavam divinas e os convidados não pararam de elogiar. Recomendo demais!",
                    rating: 5
                  },
                  {
                    name: "Carlos Mendes",
                    text: "Contratei para um evento corporativo e superou todas as expectativas. Profissionalismo impecável e a massa de longa fermentação faz toda a diferença!",
                    rating: 5
                  },
                  {
                    name: "Ana Paula",
                    text: "Melhor decisão que tomei! Pude aproveitar minha própria festa sem me preocupar com nada. A equipe é maravilhosa e as pizzas são de outro nível!",
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-[#FFF8F0] to-white p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-[#FFD700]/20 hover:border-[#FFD700] transition-all duration-300"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                      ))}
                    </div>
                    <p className="text-[#8B4513] leading-relaxed mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="font-bold text-[#FF6347]">— {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#8B4513] to-[#A0522D]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12 sm:mb-16">
              Sua Festa Perfeita em 3 Passos Simples
            </h2>

            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "Fale Conosco",
                  description: "Clique no botão do WhatsApp e nos conte sobre seu evento (data, nº de convidados)",
                  icon: MessageCircle
                },
                {
                  number: "2",
                  title: "Personalize",
                  description: "Vamos montar juntos o cardápio perfeito para seus convidados",
                  icon: ChefHat
                },
                {
                  number: "3",
                  title: "Aproveite",
                  description: "Chegamos na data marcada e cuidamos de 100% da gastronomia",
                  icon: Sparkles
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl flex items-center justify-center shadow-xl">
                        <span className="text-3xl sm:text-4xl font-bold text-[#8B4513]">{step.number}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-7 h-7 text-[#FFD700]" />
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-lg sm:text-xl text-[#FFF8F0]/90 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#FF6347] to-[#FF4500] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Leve a melhor experiência de pizza de Palmas para o seu próximo evento
            </h2>
            
            <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
              Não deixe para depois, nossas datas são limitadas. Fale conosco agora e receba um orçamento personalizado sem compromisso.
            </p>

            <a
              href="https://wa.me/5563984576780?text=Olá! Gostaria de solicitar um orçamento para o buffet de pizzas da Jhay Pizzas."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-[#FF6347] px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-lg sm:text-xl font-bold shadow-2xl hover:shadow-white/50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              Solicitar Orçamento Imediato via WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm sm:text-base">Resposta Rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm sm:text-base">Sem Compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm sm:text-base">Atendimento Personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B4513] py-8 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-2">Jhay Pizzas</h3>
            <p className="text-[#FFF8F0]/80">Buffet de Pizza Gourmet em Domicílio • Palmas, TO</p>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-[#FFF8F0]/60 text-sm">
              © 2024 Jhay Pizzas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
