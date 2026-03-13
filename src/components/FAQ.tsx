"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const WHATSAPP_LINK =
  "https://wa.me/message/H5HOEHTYPTJJK1";

const faqs = [
  {
    question: "¿Cuánto cuesta el servicio?",
    answer:
      "Los precios dependen de varios factores, como el tamaño del perrito, el estado de su pelaje (manto) y si necesitas baño, corte o ambos servicios. Para poder darte un valor más preciso, puedes enviarnos una foto de tu perrito o perrita y te enviaremos un precio aproximado.",
  },
  {
    question: "¿Sus productos son testeados en animales?",
    answer:
      "No. Todos los productos que utilizamos son naturales e hipoalergénicos, pensados para cuidar la piel y el pelaje de los perros de forma segura y respetuosa.",
  },
  {
    question: "¿En qué horario trabajan?",
    answer:
      "Nuestro horario es de lunes a sábado desde las 8:00 AM. Además, contamos con horarios flexibles, por lo que te recomendamos escribirnos para coordinar el horario que mejor te acomode.",
  },
  {
    question: "¿Desde qué edad puedo bañar a mi perro?",
    answer:
      "Lo recomendable es bañar a los perros desde los 3 meses de edad en adelante, idealmente cuando ya tienen su calendario de vacunas completo. Si aún no tiene todas sus vacunas, lo más importante es que quede bien seco después del baño.",
  },
  {
    question: "¿Utilizan aromaterapia o sedantes para los perros?",
    answer:
      "No. Nuestra peluquería tiene un enfoque pro bienestar animal, por lo que no utilizamos sedantes ni forzamos a los perros. La idea es que cada perrito pueda pasar un momento tranquilo, relajado y agradable durante su atención.",
  },
  {
    question: "¿Cómo puedo agendar una hora?",
    answer: "agendar",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos pagos mediante transferencia bancaria, pago en efectivo y pago con tarjetas en nuestro local en Los Cobres de Vitacura Local D01.",
  },
  {
    question: "¿Hay alguna condición para atender a mi perro?",
    answer:
      "La única condición es que el perro no sea agresivo, para evitar que alguien pueda salir lastimado. Nuestro objetivo es que cada visita sea una experiencia relajante, segura y agradable tanto para los perros como para quienes los atienden.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const isAgendar = answer === "agendar";

  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-card">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full p-5 md:p-6 text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="font-display font-bold text-foreground text-base md:text-lg group-hover:text-primary transition-colors">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-muted-foreground shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6">
          {isAgendar ? (
            <div className="text-muted-foreground leading-relaxed">
              <p className="mb-3">Puedes agendar de tres formas:</p>
              <ul className="grid gap-2 mb-4">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Escribiéndonos por WhatsApp
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Llamándonos directamente
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  Enviándonos un mensaje por Instagram
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/morospets/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground leading-relaxed">{answer}</p>
          )}
        </div>
      </div>
    </div>
  );
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-20 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <AnimateOnScroll className="text-center mb-14">
          <span className="text-sm font-semibold text-accent tracking-wide uppercase">
            Preguntas frecuentes
          </span>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4"
          >
            ¿Tienes dudas?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Aquí respondemos las preguntas más comunes sobre nuestros servicios.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <div className="max-w-3xl mx-auto grid gap-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FAQ;
