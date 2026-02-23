'use client';

import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Instagram,
  Mail,
  ChevronDown,
  Quote,
  Heart,
  Shield,
  Zap,
  User
} from 'lucide-react';
import Image from 'next/image';

// --- Components ---

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
  >
    {children}
  </motion.div>
);

const Button = ({ children, primary = false, className = "", onClick }: { children: React.ReactNode, primary?: boolean, className?: string, onClick?: () => void }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`
      px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center gap-2
      ${primary
        ? "bg-[#2a2a2a] text-white hover:bg-[#404040] shadow-lg"
        : "bg-transparent border border-[#2a2a2a] text-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-white"}
      ${className}
    `}
  >
    {children}
  </motion.button>
);

// --- Main Page ---

export default function LandingPage() {
  return (
    <main className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/1920/1080?grayscale&blur=2"
            alt="Background"
            fill
            className="object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fdfcfb] via-transparent to-[#fdfcfb]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-[0.2em] uppercase border border-[#2a2a2a]/20 rounded-full text-[#2a2a2a]/60">
              Terapia & Mentoria
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#2a2a2a] leading-[1.1] mb-8 text-balance">
              Encontre a força real para <span className="italic">reconstruir</span> sua vida.
            </h1>
            <p className="text-lg md:text-xl text-[#555] max-w-2xl mx-auto mb-12 leading-relaxed font-sans">
              Uma abordagem terapêutica profunda para quem cansou de repetir padrões e decidiu assumir o protagonismo da própria história — sem atalhos, com verdade.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button primary className="w-full sm:w-auto" onClick={() => document.getElementById('problemas')?.scrollIntoView({ behavior: 'smooth' })}>
                AGENDAR MINHA SESSÃO <ArrowRight size={18} />
              </Button>
            </div>
          </FadeIn>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#2a2a2a]/30 animate-bounce cursor-pointer"
          onClick={() => document.getElementById('problemas')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* 2. PROBLEMATIZAÇÃO (AS DORES) */}
      <Section id="problemas" className="bg-[#f8f5f2]">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Você tem sentido que a vida perdeu o sentido ultimamente?</h2>
            <p className="text-[#666] max-w-xl mx-auto">Muitas vezes, o sucesso externo esconde um vazio interno profundo. Identifique-se em algum desses pontos:</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title: "Vazio no Sucesso", desc: "Tenho tudo que queria, mas nada me preenche.", icon: <Zap className="text-[#8c7a6b]" /> },
            { title: "Padrões Repetitivos", desc: "Por que atraio sempre o mesmo tipo de problema?", icon: <Shield className="text-[#8c7a6b]" /> },
            { title: "Exaustão Emocional", desc: "Cuido de todos, mas ninguém cuida de mim.", icon: <Heart className="text-[#8c7a6b]" /> },
            { title: "Crise de Identidade", desc: "Não sei mais quem sou além dos papéis que cumpro.", icon: <User className="text-[#8c7a6b]" /> }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 bg-white rounded-2xl border border-[#2a2a2a]/5 hover:border-[#2a2a2a]/20 transition-all duration-500 group">
                <div className="mb-4 p-3 bg-[#f8f5f2] inline-block rounded-xl group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-[#666] italic">&quot;{item.desc}&quot;</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-xl font-serif text-[#2a2a2a]/80 italic">
              Você não precisa carregar esse peso em silêncio para sempre. Existe um caminho de volta para si mesma.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* VIDEO DE APRESENTAÇÃO */}
      <Section className="bg-[#fdfcfb]">
        <div className="text-center mb-12">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Conheça o Propósito por Trás do Método</h2>
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <div className="max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-[9/16] relative bg-[#f8f5f2]">
            <iframe
              src="https://www.youtube.com/embed/LVibTByLdkU"
              title="Apresentação Christiane Bernal"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </FadeIn>
      </Section>

      {/* 3. A METODOLOGIA (OS PILARES) */}
      <Section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <FadeIn>
              <span className="text-xs font-bold tracking-widest uppercase text-[#8c7a6b] mb-4 block">A Metodologia</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Um espaço seguro para sua reconstrução.</h2>
              <p className="text-lg text-[#555] mb-8 leading-relaxed">
                Minha abordagem integra técnica, sensibilidade e uma visão integral do ser humano. Não buscamos apenas o alívio imediato, mas a transformação duradoura.
              </p>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {[
              { title: "Autoresponsabilidade Radical", desc: "Não tratamos você como vítima. Devolvemos a você o poder de caneta para reescrever sua história, saindo da postura de espera para a postura de ação." },
              { title: "Gestão Emocional Profunda", desc: "Acolhemos a sua dor sem romantizá-la. Vamos na raiz do trauma ou do bloqueio para limpar o terreno e construir bases sólidas." },
              { title: "Espiritualidade Consciente", desc: "Integramos sua fé e intuição ao processo terapêutico como fonte de força, não como fuga da realidade. Uma conexão que sustenta seus passos." }
            ].map((pilar, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="p-8 border-l-2 border-[#8c7a6b]/20 hover:border-[#8c7a6b] transition-colors duration-500 bg-[#fdfcfb]">
                  <h3 className="text-2xl font-serif mb-3">{pilar.title}</h3>
                  <p className="text-[#666] leading-relaxed">{pilar.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. QUEM SOU EU (BIO) */}
      <Section className="bg-[#2a2a2a] text-[#fdfcfb]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <Image
                src="https://picsum.photos/800/1000?grayscale"
                alt="Christiane Bernal"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-serif">Olá, eu sou Christiane Bernal.</h2>
              <div className="h-1 w-20 bg-[#8c7a6b]" />
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-6 text-lg text-[#ccc] leading-relaxed font-light">
                <p>
                  Sou terapeuta e mentora de mulheres que buscam mais do que apenas &quot;desabafar&quot;. Minha missão é guiar você no resgate da sua força interior.
                </p>
                <p>
                  Minha autoridade não vem apenas dos livros, mas da vida. Atravessei perdas precoces, violências e recomeços absolutos do zero. Sei exatamente o que é sentir o chão desaparecer.
                </p>
                <p>
                  Mas, principalmente, sei como construí-lo de volta — mais firme do que antes.
                </p>
                <p className="italic text-[#fdfcfb]">
                  Hoje, dedico minha vida a ser a guia que eu gostaria de ter tido. Alguém que não promete milagres, mas que caminha ao seu lado com verdade, técnica e acolhimento real enquanto você atravessa o túnel.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* 5. COMO FUNCIONA? (PASSO A PASSO) */}
      <Section>
        <div className="text-center mb-20">
          <FadeIn>
            <h2 className="text-4xl font-serif mb-4">Como funciona o processo?</h2>
            <p className="text-[#666]">Três passos simples para iniciarmos sua jornada.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: "01", title: "Aplicação e Agendamento", desc: "Toque no Botão: Clique no link do WhatsApp para verificar a disponibilidade de horário e alinhar sua expectativa." },
            { step: "02", title: "A Sessão Online", desc: "Conecte-se: Atendimento 100% online por videochamada. Você precisa apenas de um celular ou computador e um lugar privado." },
            { step: "03", title: "O Processo", desc: "Transforme: Iniciamos sua jornada de autoconhecimento, quebra de crenças e fortalecimento emocional já no primeiro encontro." }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="relative">
                <span className="text-8xl font-serif text-[#f0edea] absolute -top-12 -left-4 -z-10">{item.step}</span>
                <h3 className="text-2xl font-serif mb-4 pt-4">{item.title}</h3>
                <p className="text-[#666] leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 6. DEPOIMENTOS */}
      <Section className="bg-[#f8f5f2]">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-serif mb-4">O que dizem quem já caminhou comigo</h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { text: "A Cris não passa a mão na cabeça, ela toca na alma. Foi o que me salvou.", author: "A.L." },
            { text: "Cheguei destruída após o divórcio. Hoje me reconheço no espelho com orgulho.", author: "M.C." },
            { text: "Finalmente uma terapia que une espiritualidade com pé no chão.", author: "J.S." }
          ].map((dep, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-10 bg-white rounded-3xl shadow-sm relative">
                <Quote className="absolute top-6 right-6 text-[#f0edea]" size={40} />
                <p className="text-lg italic text-[#555] mb-6 relative z-10">&quot;{dep.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8c7a6b]/10 flex items-center justify-center text-[#8c7a6b] font-bold text-xs">
                    {dep.author}
                  </div>
                  <span className="font-medium text-[#2a2a2a]">{dep.author}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 7. PERGUNTAS FREQUENTES (FAQ) */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-serif mb-12 text-center">Dúvidas Frequentes</h2>
          </FadeIn>

          <div className="space-y-4">
            {[
              { q: "Como funciona a sessão online?", a: "É realizada por vídeo, com a mesma profundidade e sigilo do presencial. Você precisa garantir um espaço onde possa falar livremente." },
              { q: "Aceita plano de saúde?", a: "Trabalho exclusivamente com atendimento particular para garantir a liberdade e a profundidade que o método exige, sem as limitações dos convênios." },
              { q: "É religião ou terapia?", a: "É terapia com olhar integral. Respeitamos sua crença (ou a falta dela), usando a espiritualidade como ferramenta de fortalecimento interno, sem dogmas." },
              { q: "Qual a duração da sessão?", a: "As sessões têm duração média de 50 a 60 minutos, focados inteiramente no seu processo." }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <details className="group border-b border-[#2a2a2a]/10 pb-4">
                  <summary className="flex items-center justify-between cursor-pointer list-none py-4">
                    <h3 className="text-xl font-serif group-open:text-[#8c7a6b] transition-colors">{faq.q}</h3>
                    <ChevronDown className="group-open:rotate-180 transition-transform text-[#2a2a2a]/30" />
                  </summary>
                  <p className="text-[#666] leading-relaxed pb-4 animate-in fade-in slide-in-from-top-2 duration-500">
                    {faq.a}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* 8. RODAPÉ (CTA FINAL) */}
      <footer className="bg-[#2a2a2a] text-[#fdfcfb] pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Comece a cuidar de você hoje mesmo.</h2>
            <p className="text-xl text-[#ccc] mb-12 font-light">
              A vida que você deseja viver começa com a coragem de olhar para dentro. Não deixe para depois.
            </p>
            <div className="flex justify-center">
              <motion.a
                href="https://wa.me/553497324013?text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20terapia."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#fdfcfb] text-[#2a2a2a] px-12 py-5 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 hover:bg-[#e6d5c3] transition-colors"
              >
                <MessageCircle size={24} /> AGENDAR AGORA
              </motion.a>
            </div>
          </FadeIn>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-2">Christiane Bernal</h3>
            <p className="text-[#888] text-sm">© 2026 Christiane Bernal. Todos os direitos reservados.</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
