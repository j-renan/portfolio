import React from "react";
import { SparklesIcon, CodeIcon } from "./Icons";

export function About() {
  const pillars = [
    {
      symbol: "∞",
      title: "Curiosidade Contínua",
      desc: "Busca constante por aprendizado, novas ferramentas e formas eficientes de resolver desafios."
    },
    {
      symbol: "100%",
      title: "Compromisso com Entrega",
      desc: "Dedicação de ponta a ponta: do entendimento do problema à entrega estável em produção."
    },
    {
      symbol: "01",
      title: "Mentalidade de Equipe",
      desc: "Comunicação transparente, foco em colaboração e abertura para feedbacks construtivos."
    }
  ];

  const skills = [
    "React",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "DaisyUI",
    "HTML5 / CSS3 Semântico",
    "Integração de APIs REST",
    "Arquitetura de Componentes",
    "Git & GitHub",
    "Parcel & Bundlers",
    "Design Responsivo"
  ];

  return (
    <section id="sobre" className="relative border-y border-white/5 bg-zinc-900/20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* About Info Header */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">01 / sobre mim</p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Construindo produtos com impacto real.
            </h2>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-lime-300">
              <CodeIcon className="h-4 w-4" />
              <span>DESENVOLVIMENTO DE SOFTWARE & DESIGN</span>
            </div>
          </div>

          <div>
            <p className="text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-8">
              Minha trajetória combina paixão por tecnologia, aprendizado constante e foco em experiência do usuário. 
              Acredito que um bom software vai além de linhas de código: trata-se de compreender necessidades humanas, 
              estruturar soluções elegantes e entregar aplicações rápidas, acessíveis e intuitivas.
            </p>

            {/* Pillars Cards */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="group relative rounded-2xl border border-white/5 bg-zinc-900/50 p-5 transition-all duration-300 hover:border-lime-300/30 hover:bg-zinc-800/40 hover:-translate-y-1"
                >
                  <span className="font-display text-3xl font-extrabold text-lime-300 transition group-hover:scale-110 inline-block">
                    {pillar.symbol}
                  </span>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack / Skills section */}
        <div id="habilidades" className="mt-20 border-t border-white/5 pt-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="eyebrow">Habilidades & Ferramentas</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">
                Stack e Tecnologias
              </h3>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-zinc-400">
              Conjunto de tecnologias utilizadas na criação de interfaces modernas, eficientes e escaláveis.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900/80 px-3.5 py-2 text-xs font-medium text-zinc-300 transition-all hover:border-lime-300/40 hover:bg-zinc-800 hover:text-white"
              >
                <SparklesIcon className="h-3 w-3 text-lime-400/70" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
