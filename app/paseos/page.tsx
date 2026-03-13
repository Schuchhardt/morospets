import type { Metadata } from "next";
import Link from "next/link";
import {
  TreePine,
  Mountain,
  Sun,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  Clock,
  ThermometerSun,
  Heart,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";
import InstagramEmbed from "@/components/InstagramEmbed";

const INSTAGRAM_REELS = [
  "https://www.instagram.com/reel/DTq255ODibd/",
  "https://www.instagram.com/reel/DTG3CVqjiTS/",
  "https://www.instagram.com/reel/DRdT36Tjri5/",
];

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: "Paseos para Perros en Santiago — Paseos al Parque y al Cerro | Moro's Pets",
  description:
    "Servicio de paseos para perros en Santiago: paseos recreativos en parques y excursiones al cerro. Grupos reducidos, supervisión constante. Moro's Pets.",
  keywords: [
    "paseos para perros Santiago",
    "paseo canino Santiago",
    "paseo de perros al parque",
    "paseo de perros al cerro",
    "dog walking Santiago Chile",
    "paseador de perros Vitacura",
    "paseos grupales perros",
    "excursiones caninas cerro",
    "servicio paseo perros Santiago",
    "Moro's Pets paseos",
  ],
  openGraph: {
    title: "Paseos para Perros — Moro's Pets",
    description:
      "Paseos recreativos al parque y excursiones al cerro para perros en Santiago. Grupos reducidos y supervisión constante.",
    url: "https://morospets.cl/paseos",
    type: "website",
    images: [{ url: "/images/hero-dog.jpg", width: 1200, height: 630, alt: "Paseos para Perros — Moro's Pets" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paseos para Perros — Moro's Pets",
    description: "Paseos recreativos al parque y excursiones al cerro. Grupos reducidos y supervisión constante.",
    images: ["/images/hero-dog.jpg"],
  },
  alternates: { canonical: "https://morospets.cl/paseos" },
};

/* ── JSON-LD ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://morospets.cl/#business",
      name: "Moro's Pets",
      url: "https://morospets.cl",
      telephone: "+56988881125",
      image: "https://morospets.cl/images/hero-dog.jpg",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Los Cobres de Vitacura, Local D01",
        addressLocality: "Vitacura, Santiago",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
    },
    {
      "@type": "Service",
      name: "Paseos en el parque para perros",
      description: "Paseos recreativos en el parque ideales para socializar, olfatear y jugar en un entorno seguro con supervisión constante.",
      provider: { "@id": "https://morospets.cl/#business" },
      serviceType: "Paseo canino",
      areaServed: "Santiago, Chile",
    },
    {
      "@type": "Service",
      name: "Paseos al cerro para perros",
      description: "Excursiones al cerro para perros con más energía. Ejercicio potente, conexión con la naturaleza y socialización en grupos reducidos.",
      provider: { "@id": "https://morospets.cl/#business" },
      serviceType: "Paseo canino",
      areaServed: "Santiago, Chile",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://morospets.cl" },
        { "@type": "ListItem", position: 2, name: "Paseos", item: "https://morospets.cl/paseos" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto dura un paseo para perros con Moro's Pets?",
          acceptedAnswer: { "@type": "Answer", text: "Los paseos al parque duran aproximadamente 1 hora y los paseos al cerro entre 1.5 a 2 horas, dependiendo de la ruta y el grupo." },
        },
        {
          "@type": "Question",
          name: "¿Cuántos perros van en cada grupo de paseo?",
          acceptedAnswer: { "@type": "Answer", text: "Trabajamos con grupos reducidos de entre 3 a 5 perros para garantizar una supervisión adecuada y una experiencia segura para todos." },
        },
        {
          "@type": "Question",
          name: "¿A qué hora se realizan los paseos?",
          acceptedAnswer: { "@type": "Answer", text: "Nuestros paseos se adaptan al clima. En verano, salimos temprano por la mañana o al atardecer para evitar las horas de más calor. En invierno, aprovechamos las horas centrales del día." },
        },
        {
          "@type": "Question",
          name: "¿Los paseos son seguros para mi perro?",
          acceptedAnswer: { "@type": "Answer", text: "Sí. Cada paseo cuenta con supervisión constante, grupos reducidos y evaluamos el temperamento de cada perro antes de incorporarlo al grupo." },
        },
      ],
    },
  ],
};

const WHATSAPP_LINK = "https://wa.me/56988881125?text=Hola,%20quiero%20agendar%20un%20paseo%20para%20mi%20perro";

const walkServices = [
  {
    id: "paseos-parque",
    icon: TreePine,
    title: "Paseos en el parque",
    summary: "Paseos recreativos ideales para socializar, olfatear y jugar.",
    details: [
      "Paseo grupal en parques con áreas verdes y seguras",
      "Grupos reducidos (3 a 5 perros) para una supervisión adecuada",
      "Ideal para perros que disfrutan socializando con otros perritos",
      "Incluye juego libre y tiempo de exploración",
      "Perfecto para razas de energía moderada",
    ],
    recommendation: "Recomendado para perros de todas las edades que necesitan ejercicio regular y socialización.",
  },
  {
    id: "paseos-cerro",
    icon: Mountain,
    title: "Paseos al cerro",
    summary: "Excursiones al cerro para perros con más energía.",
    details: [
      "Excursiones con actividad física más intensa para perros enérgicos",
      "Conexión con la naturaleza y estímulos sensoriales diferentes",
      "Grupos reducidos con supervisión constante",
      "Rutas seleccionadas por seguridad y disfrute (sombra, agua, terreno apto)",
      "Ideal para razas de alta energía que necesitan desgaste físico",
    ],
    recommendation: "Recomendado para perros con mucha energía que necesitan actividad física más allá del paseo habitual.",
  },
];

export default function PaseosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="pt-24 pb-20">
        <div className="container max-w-4xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li>/</li>
              <li className="text-foreground font-medium">Paseos</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-16">
            <span className="text-sm font-semibold text-accent tracking-wide uppercase">Paseos caninos</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-5 leading-tight">
              Paseos para perros en Santiago: parque y cerro
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Nuestros paseos están diseñados para que tu perro disfrute, socialice y se ejercite de manera segura.
              Trabajamos con{" "}
              <strong className="text-foreground">grupos reducidos</strong> y{" "}
              <strong className="text-foreground">supervisión constante</strong> para una experiencia de calidad.
            </p>
          </header>

          {/* Differentiators */}
          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            {[
              { icon: Heart, text: "Grupos reducidos", desc: "3 a 5 perritos por grupo" },
              { icon: Clock, text: "Horarios adaptados", desc: "Según clima y estación" },
              { icon: Sun, text: "Supervisión constante", desc: "Seguridad en todo momento" },
            ].map((d) => (
              <div key={d.text} className="bg-card border border-border rounded-2xl p-5 text-center">
                <div className="flex justify-center mb-2">
                  <d.icon className="text-accent" size={20} />
                </div>
                <p className="font-display font-bold text-foreground text-sm">{d.text}</p>
                <p className="text-xs text-muted-foreground mt-1">{d.desc}</p>
              </div>
            ))}
          </div>

          {/* Walk Services */}
          <div className="grid gap-6 mb-16">
            {walkServices.map((service) => (
              <article key={service.id} id={service.id} className="bg-card border border-border rounded-2xl p-6 md:p-8 scroll-mt-20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <service.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl text-foreground">{service.title}</h2>
                    <p className="text-muted-foreground mt-1">{service.summary}</p>
                  </div>
                </div>
                <ul className="grid gap-2 mb-4 pl-14">
                  {service.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
                {service.recommendation && (
                  <p className="text-xs text-muted-foreground bg-primary/5 rounded-lg px-4 py-2.5 ml-14">
                    💡 {service.recommendation}
                  </p>
                )}
              </article>
            ))}
          </div>

          {/* Instagram Reels */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <span className="text-sm font-semibold text-accent tracking-wide uppercase">Nuestros paseos</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-3">Así disfrutamos los paseos</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Mira cómo la pasan nuestros perritos en cada salida al parque y al cerro.</p>
            </div>
            <InstagramEmbed reelUrls={INSTAGRAM_REELS} />
          </section>

          {/* Walk Tips */}
          <section className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-10 mb-16">
            <div className="flex items-center gap-2 text-accent mb-4">
              <ThermometerSun size={20} />
              <span className="text-sm font-semibold uppercase tracking-wide">Consejos para los paseos</span>
            </div>
            <h2 className="text-2xl font-bold text-primary mb-4">Cuidados importantes durante los paseos</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "En verano", tip: "Evita las horas de más calor (12-16 h). Lleva agua fresca y revisa la temperatura del asfalto antes de salir — si quema tu mano, quema sus patitas." },
                { title: "Hidratación", tip: "Asegúrate de que tu perro tenga acceso a agua antes y después del paseo. En nuestros paseos siempre llevamos agua para todos." },
                { title: "Post-paseo", tip: "Después de un paseo activo, especialmente al cerro, dale un tiempo de descanso y acceso a agua fresca antes de alimentarlo." },
                { title: "Socialización", tip: "Los paseos grupales ayudan a mejorar las habilidades sociales de tu perro. Evaluamos el temperamento de cada perro antes de incorporarlo al grupo." },
              ].map((item) => (
                <div key={item.title} className="bg-background/60 rounded-xl p-4">
                  <p className="font-display font-bold text-foreground text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">¿Quieres agendar un paseo para tu perro?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                <MessageCircle size={20} />
                Agendar paseo
              </a>
              <Link href="/" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-7 py-3.5 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                <ArrowLeft size={18} />
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </>
  );
}
