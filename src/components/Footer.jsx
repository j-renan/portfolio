import React from "react";
import { DownloadIcon, ArrowUpRight } from "./Icons";

export function Footer({ cvPdf, linkedinPdf }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-zinc-950/80 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <a href="#inicio" className="font-display text-lg font-bold tracking-tight text-white">
            João Renan Celso<span className="text-lime-300">.</span>
          </a>
          <p className="text-xs text-zinc-500">
            © {currentYear} • Desenvolvido com foco em performance e usabilidade.
          </p>
        </div>

        <div className="flex items-center gap-5 text-xs text-zinc-400">
          <a
            href={linkedinPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-lime-300"
          >
            LinkedIn
            <ArrowUpRight className="h-3 w-3" />
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href={cvPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-lime-300"
          >
            Currículo PDF
            <DownloadIcon className="h-3 w-3" />
          </a>
          <span className="text-zinc-700">•</span>
          <a
            href="#inicio"
            className="transition-colors hover:text-white"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
