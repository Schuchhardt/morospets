import { MessageCircle } from "lucide-react";
import Image from "next/image";

const WHATSAPP_LINK = "https://wa.me/56988881125?text=Hola,%20quiero%20agendar%20un%20servicio%20para%20mi%20perro";

const Hero = () => (
  <section id="inicio" className="pt-16">
    <div className="container grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-4rem)] py-12">
      <div className="flex flex-col gap-6 animate-hero-left">
        <span className="text-sm font-semibold text-accent tracking-wide uppercase">
          Bienestar animal
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
          Peluquería canina con enfoque en bienestar
        </h1>
        <p className="text-lg text-muted-foreground max-w-md">
          En Moro&apos;s Pets cuidamos a tu perro con respeto, paciencia y productos naturales.
          Cada experiencia es tranquila, segura y libre de estrés.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base"
          >
            <MessageCircle size={20} />
            Agendar servicio
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-base"
          >
            Hablar por WhatsApp
          </a>
        </div>
      </div>

      <div className="relative animate-hero-right">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/hero-dog.jpg"
            alt="Perro feliz siendo atendido en Moro's Pets"
            width={600}
            height={500}
            className="w-full h-[400px] md:h-[500px] object-cover"
            priority
          />
        </div>
        <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border">
          <p className="font-display font-bold text-primary text-sm">Sin bozales · Sin estrés</p>
          <p className="text-xs text-muted-foreground">Productos 100% naturales</p>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
