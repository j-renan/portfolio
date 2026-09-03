import React, { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { BotIcon } from "../Icons";

export function ChatWindow({
  messages,
  loading,
  question,
  onQuestionChange,
  onSubmit,
}) {
  const messagesEndRef = useRef(null);

  // Auto-scroll suave para o final sempre que uma nova mensagem for adicionada ou durante loading
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="panel relative flex flex-col rounded-3xl p-4 sm:p-6 shadow-2xl">
      {/* Header do Chat */}
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-lime-300 font-display font-bold text-zinc-950 shadow-md shadow-lime-300/10">
            <BotIcon className="h-5 w-5" />
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-zinc-900 bg-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-white">Renan.bot</p>
              <span className="rounded-md bg-lime-300/10 px-1.5 py-0.5 text-[10px] font-semibold text-lime-300">
                IA
              </span>
            </div>
            <p className="flex items-center gap-1.5 text-xs text-lime-400">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
              Online e pronto para responder
            </p>
          </div>
        </div>

        <div className="hidden sm:block text-right">
          <span className="font-mono text-[11px] text-zinc-500">v1.2 • Assistente</span>
        </div>
      </div>

      {/* Histórico de Mensagens com scroll suave */}
      <div className="flex h-72 sm:h-80 flex-col gap-3.5 overflow-y-auto pr-1 text-sm custom-scrollbar">
        {messages.map((message, index) => (
          <ChatMessage
            key={`${message.role}-${index}`}
            role={message.role}
            text={message.text}
          />
        ))}

        {/* Indicador de carregamento com 3 pontinhos animados */}
        {loading && (
          <div className="flex items-center gap-3 animate-in fade-in duration-200">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime-300 text-zinc-950">
              <BotIcon className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-white/5 bg-zinc-800/90 px-4 py-3 text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-lime-300 animate-bounce [animation-delay:-0.3s]" />
              <span className="h-2 w-2 rounded-full bg-lime-300 animate-bounce [animation-delay:-0.15s]" />
              <span className="h-2 w-2 rounded-full bg-lime-300 animate-bounce" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input de Mensagem */}
      <ChatInput
        value={question}
        onChange={onQuestionChange}
        onSubmit={onSubmit}
        loading={loading}
      />
    </div>
  );
}
