import React, { useState } from "react";
import profilePhoto from "url:./assets/img/IMG-20251003-WA0029.jpg";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ChatbotSection } from "./components/Chatbot/ChatbotSection";
import { Footer } from "./components/Footer";

const cvPdf = "/docs/Joao-Renan-Celso-CV.pdf";
const linkedinPdf = "/docs/Profile_Linkedin.pdf";

const apiUrl = process.env.CHATBOT_API_URL || "";

const initialMessages = [
  {
    role: "assistant",
    text: "Olá! Sou o assistente do Renan. Pergunte sobre experiência, projetos ou tecnologias."
  }
];

const quickQuestions = [
  "Qual é a experiência do Renan?",
  "Quais tecnologias ele usa?",
  "Como posso entrar em contato?"
];

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
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          text: "Não consegui falar com a API agora. Tente novamente em instantes."
        }
      ]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    askChatbot(question);
  }

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Barra de Navegação Superior */}
      <Navbar cvPdf={cvPdf} />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* Apresentação Inicial */}
        <Hero
          profilePhoto={profilePhoto}
          linkedinPdf={linkedinPdf}
        />

        {/* Sobre Mim e Habilidades Técnicas */}
        <About />

        {/* Seção Interativa com Chatbot */}
        <ChatbotSection
          messages={messages}
          loading={loading}
          question={question}
          onQuestionChange={(e) => setQuestion(e.target.value)}
          onSubmit={handleFormSubmit}
          onQuickQuestionClick={(q) => askChatbot(q)}
          quickQuestions={quickQuestions}
        />
      </main>

      {/* Rodapé da Página */}
      <Footer
        cvPdf={cvPdf}
        linkedinPdf={linkedinPdf}
      />
    </div>
  );
}

export default App;
