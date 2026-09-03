import React from "react";
import { SparklesIcon } from "../Icons";

export function QuickQuestions({ questions, onSelectQuestion, disabled }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-400">
        <SparklesIcon className="h-3 w-3 text-lime-300" />
        Sugestões de perguntas:
      </span>
      <div className="flex flex-wrap gap-2">
        {questions.map((q) => (
          <button
            key={q}
            type="button"
            disabled={disabled}
            onClick={() => onSelectQuestion(q)}
            className="group inline-flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/90 px-3 py-2 text-left text-xs font-medium text-zinc-300 transition-all hover:border-lime-300/60 hover:bg-zinc-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 active:scale-95"
          >
            <span>{q}</span>
            <span className="text-zinc-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-lime-300">
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
