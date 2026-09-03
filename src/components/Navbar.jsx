import React, { useState } from "react";
import { DownloadIcon, MenuIcon, CloseIcon } from "./Icons";

export function Navbar({ cvPdf }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Chatbot IA", href: "#conversa" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a 
          href="#inicio" 
          className="group flex items-center gap-1.5 font-display text-xl font-bold tracking-tight text-white transition hover:opacity-90"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-300 text-sm font-black text-zinc-950 transition group-hover:scale-105">
            JR
          </span>
          <span className="font-semibold text-zinc-100">Renan</span>
          <span className="text-lime-300">.</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href={cvPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-lime-300 px-4 py-2 text-xs font-bold text-zinc-950 shadow-sm transition hover:bg-lime-200 hover:shadow-lime-300/20 active:scale-95"
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            Baixar CV
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href={cvPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-lime-300 px-3 py-1.5 text-xs font-bold text-zinc-950"
          >
            <DownloadIcon className="h-3 w-3" />
            CV
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white focus:outline-none"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer/Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-zinc-900/95 px-6 py-5 backdrop-blur-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-lime-300"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={cvPdf}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-lime-300 py-3 text-sm font-bold text-zinc-950 shadow hover:bg-lime-200"
              >
                <DownloadIcon className="h-4 w-4" />
                Baixar Currículo Completo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
