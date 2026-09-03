import React from "react";
import { BotIcon, UserIcon } from "../Icons";

export function ChatMessage({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`flex w-full gap-3 ${isUser ? "justify-end" : "justify-start"} animate-in fade-in duration-200`}>
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-lime-300 text-zinc-950 shadow-sm">
          <BotIcon className="h-4 w-4" />
        </div>
      )}

      <div
        className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? "rounded-br-sm bg-lime-300 font-medium text-zinc-950 shadow-md shadow-lime-300/10"
            : "rounded-bl-sm border border-white/5 bg-zinc-800/90 text-zinc-200 shadow-sm"
        }`}
      >
        <p className="whitespace-pre-wrap">{text}</p>
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-800 text-zinc-300 border border-white/10">
          <UserIcon className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}
