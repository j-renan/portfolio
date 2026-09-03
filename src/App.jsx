import React, { useState } from "react";
const cvPdf = "/docs/Joao-Renan-Celso-CV.pdf";
const linkedinPdf = "/docs/Profile_Linkedin.pdf";
import profilePhoto from "url:./assets/img/perfil.jpg";

const apiUrl = process.env.CHATBOT_API_URL || "";

const initialMessages = [
  {
    role: "assistant",
    text: "Olá! Sou o assistente do Renan. Pergunte sobre experiência, projetos ou tecnologias."
  }
];

const quickQuestions = ["Qual é a experiência do Renan?", "Quais tecnologias ele usa?", "Como posso entrar em contato?"];

function Icon({ children }) {
  return <span className="inline-flex h-5 w-5 items-center justify-center">{children}</span>;
}

function App() {
  const [messages, setMessages] = useState(initialMessages);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);


  async function askChatbot(text) {
    const prompt = text.trim();
    if (!prompt || loading) return;
    setQuestion("");
    setMessages((current) => [...current, { role: "user", text: prompt }]);
    setLoading(true);

    try {
      let answer;
      if (apiUrl) {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: prompt })
        });
        if (!response.ok) throw new Error(`Chatbot respondeu com ${response.status}`);
        const data = await response.json();
        answer = data.answer || data.message || data.response;
        if (!answer) throw new Error("Resposta do chatbot sem conteúdo");
      } else {
        answer = "Ainda estou conectado ao modo demonstração. Configure CHATBOT_API_URL para conversar com a API sobre o Renan.";
      }
      setMessages((current) => [...current, { role: "assistant", text: answer }]);
    } catch (error) {
      setMessages((current) => [...current, {
        role: "assistant",
        text: "Não consegui falar com a API agora. Tente novamente em instantes."
      }]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 lg:px-8">
        <a href="#" className="font-display text-lg font-bold tracking-tight">JRC<span className="text-lime-300">.</span></a>
        <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          <a className="transition hover:text-white" href="#sobre">Sobre</a>
          <a className="transition hover:text-white" href="#conversa">Converse comigo</a>
          <a className="btn btn-sm border-0 bg-lime-300 text-zinc-950 hover:bg-lime-200" href={cvPdf} target="_blank" rel="noreferrer">Baixar CV</a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <p className="eyebrow mb-6">Olá, eu sou</p>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-7xl">
            João Renan <span className="text-lime-300">Celso.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-400">
            Desenvolvedor apaixonado por transformar problemas complexos em experiências digitais simples, úteis e bem construídas.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="btn border-0 bg-lime-300 px-6 text-zinc-950 hover:bg-lime-200" href="#conversa">Vamos conversar <span aria-hidden="true">↗</span></a>
            <a className="btn btn-outline border-zinc-700 px-6 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-900" href={linkedinPdf} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
          <div className="mt-12 flex items-center gap-3 text-sm text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_#a3e635]" /> Disponível para novos projetos
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-5 rounded-full border border-dashed border-lime-300/20" />
          <div className="absolute -right-4 top-12 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl" />
          <div className="relative aspect-square overflow-hidden rounded-full border-8 border-zinc-800 bg-zinc-900 shadow-2xl shadow-lime-300/10">
            <img className="h-full w-full object-cover object-[center_25%]" src={profilePhoto} alt="João Renan Celso" />
          </div>
          <div className="panel absolute -bottom-4 -left-7 rounded-2xl px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">foco atual</p>
            <p className="mt-1 text-sm font-semibold text-zinc-100">Código com propósito</p>
          </div>
        </div>
      </section>

      <section id="sobre" className="border-y border-white/5 bg-zinc-900/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div><p className="eyebrow">01 / sobre mim</p><h2 className="mt-4 font-display text-3xl font-semibold">Construindo o próximo passo.</h2></div>
          <div><p className="text-lg leading-8 text-zinc-400">Minha trajetória combina curiosidade, aprendizado contínuo e colaboração. Gosto de participar de todo o ciclo: entender o contexto, desenhar a solução e entregar software que faz diferença.</p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3"><div><p className="font-display text-3xl font-bold text-lime-300">∞</p><p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Curiosidade</p></div><div><p className="font-display text-3xl font-bold text-lime-300">100%</p><p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Compromisso</p></div><div><p className="font-display text-3xl font-bold text-lime-300">01</p><p className="mt-1 text-xs uppercase tracking-wider text-zinc-500">Mente aberta</p></div></div>
          </div>
        </div>
      </section>

      <section id="conversa" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div><p className="eyebrow">02 / assistente pessoal</p><h2 className="mt-4 font-display text-4xl font-semibold">Quer saber mais?</h2><p className="mt-4 leading-7 text-zinc-400">Converse com a inteligência artificial treinada com as informações do meu currículo e perfil profissional.</p><div className="mt-7 flex flex-wrap gap-2">{quickQuestions.map((item) => <button key={item} onClick={() => askChatbot(item)} className="rounded-full border border-zinc-700 px-3 py-2 text-left text-xs text-zinc-400 transition hover:border-lime-300/60 hover:text-lime-200">{item}</button>)}</div></div>
          <div className="panel rounded-3xl p-4 sm:p-6">
            <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4"><div className="grid h-10 w-10 place-items-center rounded-full bg-lime-300 font-display font-bold text-zinc-950">R</div><div><p className="text-sm font-semibold">Renan.bot</p><p className="flex items-center gap-1 text-xs text-lime-300"><span className="h-1.5 w-1.5 rounded-full bg-lime-300" /> online</p></div></div>
            <div className="min-h-48 space-y-4">{messages.map((message, index) => <div key={`${message.role}-${index}`} className={`chat ${message.role === "user" ? "chat-end" : "chat-start"}`}><div className={`chat-bubble max-w-[85%] text-sm leading-6 ${message.role === "user" ? "bg-lime-300 text-zinc-950" : "bg-zinc-800 text-zinc-200"}`}>{message.text}</div></div>)}{loading && <div className="chat chat-start"><div className="chat-bubble bg-zinc-800 text-zinc-400">Digitando...</div></div>}</div>
            <form className="mt-5 flex gap-2 border-t border-white/10 pt-4" onSubmit={(event) => { event.preventDefault(); askChatbot(question); }}><input aria-label="Sua pergunta" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Digite sua pergunta..." className="input input-bordered min-w-0 flex-1 border-zinc-700 bg-zinc-950 text-sm focus:border-lime-300" /><button disabled={loading || !question.trim()} className="btn bg-lime-300 text-zinc-950 hover:bg-lime-200 disabled:bg-zinc-700 disabled:text-zinc-500">Enviar <Icon>↗</Icon></button></form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs text-zinc-500 sm:flex-row lg:px-8"><span>© 2025 João Renan Celso</span><span>Feito com curiosidade e café.</span></div></footer>
    </main>
  );
}

export default App;
