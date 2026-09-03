import React from "react";
import { QuickQuestions } from "./QuickQuestions";
import { ChatWindow } from "./ChatWindow";
import { SparklesIcon } from "../Icons";

export function ChatbotSection({
  messages,
  loading,
  question,
  onQuestionChange,
  onSubmit,
  onQuickQuestionClick,
  quickQuestions,
}) {
  return (
    <section id="conversa" className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-28">
      {/* Background glow decoration */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-10 top-1/2 -z-10 h-72 w-72 rounded-full bg-cyan-400/5 blur-[100px]"
      />

      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
        {/* Left: Info and Quick questions */}
        <div>
          <p className="eyebrow">02 / assistente pessoal</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Quer saber mais sobre mim?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Converse com a inteligência artificial interativa, treinada com as informações do meu currículo, formação, projetos e perfil profissional.
          </p>

          <div className="mt-8">
            <QuickQuestions
              questions={quickQuestions}
              onSelectQuestion={onQuickQuestionClick}
              disabled={loading}
            />
          </div>

          <div className="mt-8 rounded-2xl border border-white/5 bg-zinc-900/40 p-4 text-xs text-zinc-400">
            <p className="flex items-center gap-2 font-medium text-zinc-300">
              <SparklesIcon className="h-4 w-4 text-lime-300" />
              Dica rápida
            </p>
            <p className="mt-1 leading-relaxed">
              Você pode perguntar sobre experiências anteriores, metodologias ágeis, disponibilidade ou stacks preferidas!
            </p>
          </div>
        </div>

        {/* Right: Chat Window */}
        <div>
          <ChatWindow
            messages={messages}
            loading={loading}
            question={question}
            onQuestionChange={onQuestionChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </section>
  );
}
