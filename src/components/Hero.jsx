import React from "react";
import { ArrowUpRight, MessageSquareIcon, SparklesIcon } from "./Icons";

export function Hero({ profilePhoto, linkedinPdf }) {
  return (
    <section id="inicio" className="relative mx-auto max-w-6xl px-6 pt-12 pb-16 sm:pt-16 sm:pb-24 lg:px-8 lg:pt-24 lg:pb-32">
      {/* Background glow orb */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-400/10 blur-[120px] lg:h-96 lg:w-96"
      />

      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        {/* Left Column: Hero Text & CTAs */}
        <div className="flex flex-col items-start">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-lime-300/20 bg-lime-400/5 px-3.5 py-1.5 text-xs font-medium text-lime-300 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
            </span>
            Disponível para novos projetos
          </div>

          <p className="eyebrow mt-6">Desenvolvedor de Software</p>

          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Olá, eu sou <br />
            <span className="bg-gradient-to-r from-lime-300 via-emerald-300 to-lime-200 bg-clip-text text-transparent">
              João Renan Celso
            </span>
            <span className="text-lime-300">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg sm:leading-8">
            Desenvolvedor focado em transformar problemas complexos em produtos digitais de alta performance, simples de usar e com arquitetura sólida.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:mt-10">
            <a
              href="#conversa"
              className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-6 py-3.5 text-sm font-bold text-zinc-950 shadow-lg shadow-lime-300/10 transition-all hover:bg-lime-200 hover:shadow-lime-300/25 active:scale-95"
            >
              <MessageSquareIcon className="h-4 w-4" />
              Converse com a IA
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href={linkedinPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700/80 bg-zinc-900/60 px-5 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur transition-all hover:border-zinc-500 hover:bg-zinc-800/80 hover:text-white active:scale-95"
            >
              Perfil LinkedIn
              <ArrowUpRight className="h-4 w-4 text-zinc-400" />
            </a>
          </div>

          {/* Highlights pills */}
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/5 pt-6 text-xs text-zinc-500">
            <span className="inline-flex items-center gap-1.5 font-medium text-zinc-400">
              <SparklesIcon className="h-3.5 w-3.5 text-lime-300" /> Soluções Inteligentes
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" /> Clean Code
            </span>
            <span className="inline-flex items-center gap-1.5 font-medium text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" /> Foco na Experiência
            </span>
          </div>
        </div>

        {/* Right Column: Profile Photo Visual */}
        <div className="relative mx-auto flex w-full max-w-sm items-center justify-center lg:max-w-none">
          {/* Subtle glowing ring background */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-lime-400/20 via-cyan-400/10 to-transparent blur-2xl" />
          
          {/* Outer dashed ring decorative */}
          <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-lime-300/25" />

          {/* Circular avatar frame */}
          <div className="relative aspect-square w-64 sm:w-80 overflow-hidden rounded-full border-4 sm:border-8 border-zinc-800/90 bg-zinc-900 shadow-2xl shadow-lime-300/10">
            <img
              src={profilePhoto}
              alt="Foto de João Renan Celso"
              className="h-full w-full object-cover object-[center_18%] scale-105 transition-transform duration-500 hover:scale-110"
              loading="eager"
            />
          </div>

          {/* Floating Pill: Foco Atual */}
          <div className="panel absolute -bottom-3 left-0 sm:-left-4 rounded-2xl p-3 sm:p-3.5 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300">
                <SparklesIcon className="h-4 w-4" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">Foco atual</p>
                <p className="text-xs sm:text-sm font-semibold text-zinc-100">Código com propósito</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
