import React from "react";
import { SendIcon } from "../Icons";

export function ChatInput({ value, onChange, onSubmit, loading }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center gap-2 border-t border-white/10 pt-4"
    >
      <input
        type="text"
        aria-label="Sua pergunta para o assistente"
        value={value}
        onChange={onChange}
        disabled={loading}
        placeholder="Pergunte sobre experiência, projetos ou stack..."
        className="min-w-0 flex-1 rounded-xl border border-zinc-700/70 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 transition-colors focus:border-lime-300 focus:outline-none focus:ring-1 focus:ring-lime-300 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={loading || !value.trim()}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-lime-300 px-5 text-sm font-bold text-zinc-950 transition-all hover:bg-lime-200 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-500 active:scale-95"
      >
        <span>Enviar</span>
        <SendIcon className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}
