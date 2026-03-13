import type { Metadata } from "next";
import Link from "next/link";
import {
  Scissors,
  Droplets,
  SprayCan,
  Ear,
  Dog,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";
import InstagramEmbed from "@/components/InstagramEmbed";

const INSTAGRAM_REELS = [
  "https://www.instagram.com/reel/DUg3DFPjh-Y/",
  "https://www.instagram.com/reel/DUCD9xljlAa/",
  "https://www.instagram.com/reel/DURXhz3juLX/",
];

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: "Peluquería Canina en Santiago — Baño, Corte y Grooming con Bienestar Animal",
  description:
    "Servicios de peluquería canina en Santiago: baño y secado, corte de pelo, corte de uñas, limpieza de oídos y glándulas. Productos naturales, sin bozales ni sedantes. Moro's Pets, Los Cobres de Vitacura.",
  keywords: [
    "peluquería canina Santiago",
    "grooming canino Santiago",
    "baño canino productos naturales",
    "corte de pelo perros Santiago",
    "corte de uñas perros",
    "limpieza de oídos perros",
    "limpieza de glándulas perro",
    "peluquería de perros Vitacura",
    "grooming sin bozales",
    "peluquería canina bienestar animal",
    "Moro's Pets peluquería",
  ],
  openGraph: {
    title: "Peluquería Canina — Moro's Pets",
    description:
      "Baño, corte, limpieza de oídos y glándulas para tu perro con productos naturales y manejo respetuoso en Santiago.",
    url: "https://morospets.cl/peluqueria",
    type: "website",
    images: [{ url: "/images/hero-dog.jpg", width: 1200, height: 630, alt: "Peluquería Canina — Moro's Pets" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peluquería Canina — Moro's Pets",
    description: "Baño, corte, limpieza de oídos y glándulas con productos naturales y manejo respetuoso.",
    images: ["/images/hero-dog.jpg"],
  },
  alternates: { canonical: "https://morospets.cl/peluqueria" },
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
      name: "Baño y secado canino",
      description: "Baño completo con shampoo natural e hipoalergénico, seguido de secado profesional. Ideal para mantener el pelaje limpio, suave y libre de olores.",
      provider: { "@id": "https://morospets.cl/#business" },
      serviceType: "Peluquería canina",
      areaServed: "Santiago, Chile",
    },
    {
      "@type": "Service",
      name: "Corte de pelo canino",
      description: "Corte de pelo profesional adaptado a la raza, tipo de pelaje y preferencias del tutor. Sin bozales ni amarres.",
      provider: { "@id": "https://morospets.cl/#business" },
      serviceType: "Peluquería canina",
      areaServed: "Santiago, Chile",
    },
    {
      "@type": "Service",
      name: "Corte de uñas para perros",
      description: "Corte de uñas seguro y sin estrés. Las uñas largas pueden causar dolor al caminar y problemas posturales.",
      provider: { "@id": "https://morospets.cl/#business" },
      serviceType: "Peluquería canina",
      areaServed: "Santiago, Chile",
    },
    {
      "@type": "Service",
      name: "Limpieza de oídos canina",
      description: "Limpieza profesional de oídos para prevenir infecciones y acumulación de suciedad, especialmente en razas con orejas caídas.",
      provider: { "@id": "https://morospets.cl/#business" },
      serviceType: "Peluquería canina",
      areaServed: "Santiago, Chile",
    },
    {
      "@type": "Service",
      name: "Limpieza de glándulas anales",
      description: "Limpieza de glándulas anales realizada con cuidado y profesionalismo para prevenir molestias e infecciones.",
      provider: { "@id": "https://morospets.cl/#business" },
      serviceType: "Peluquería canina",
      areaServed: "Santiago, Chile",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://morospets.cl" },
        { "@type": "ListItem", position: 2, name: "Peluquería canina", item: "https://morospets.cl/peluqueria" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cuánto cuesta la peluquería canina en Moro's Pets?",
          acceptedAnswer: { "@type": "Answer", text: "Los precios dependen del tamaño del perro, el estado de su pelaje y si necesitas baño, corte o ambos servicios. Envíanos una foto de tu perro por WhatsApp y te daremos un precio aproximado." },
        },
        {
          "@type": "Question",
          name: "¿Qué productos utilizan en la peluquería canina?",
          acceptedAnswer: { "@type": "Answer", text: "Todos nuestros productos son naturales e hipoalergénicos, pensados para cuidar la piel y el pelaje de los perros de forma segura y respetuosa. No son testeados en animales." },
        },
        {
          "@type": "Question",
          name: "¿Usan bozales o sedantes durante el grooming?",
          acceptedAnswer: { "@type": "Answer", text: "No. Nuestra peluquería tiene un enfoque pro bienestar animal. No utilizamos sedantes, bozales ni amarres. Cada perrito pasa un momento tranquilo, relajado y agradable." },
        },
        {
          "@type": "Question",
          name: "¿Cada cuánto tiempo debo bañar a mi perro?",
          acceptedAnswer: { "@type": "Answer", text: "Lo recomendable es bañar a tu perro cada 3 a 4 semanas, dependiendo de la raza y estilo de vida. Bañarlo con demasiada frecuencia puede resecar su piel." },
        },
        {
          "@type": "Question",
          name: "¿Desde qué edad puedo llevar a mi perro a la peluquería?",
          acceptedAnswer: { "@type": "Answer", text: "Lo recomendable es desde los 3 meses de edad, idealmente cuando ya tienen su calendario de vacunas completo. Si aún no tiene todas sus vacunas, lo importante es que quede bien seco después del baño." },
        },
      ],
    },
  ],
};

const WHATSAPP_LINK = "https://wa.me/56988881125?text=Hola,%20quiero%20agendar%20un%20servicio%20de%20peluquer%C3%ADa%20para%20mi%20perro";

const services = [
  {
    id: "bano",
    icon: Droplets,
    title: "Baño y secado",
    summary: "Baño completo con shampoo natural e hipoalergénico, seguido de secado profesional.",
    details: [
      "Shampoo natural e hipoalergénico adaptado al tipo de piel y pelaje",
      "Secado profesional con temperatura controlada",
      "Revisión general del estado del pelaje y la piel",
      "Experiencia libre de estrés, sin bozales ni amarres",
      "Ideal para mantener el pelaje limpio, suave y libre de olores",
    ],
    recommendation: "Recomendado cada 3 a 4 semanas dependiendo de la raza y estilo de vida.",
  },
  {
    id: "corte",
    icon: Scissors,
    title: "Corte de pelo",
    summary: "Corte profesional adaptado a la raza, tipo de pelaje y preferencias del tutor.",
    details: [
      "Corte adaptado a la raza y tipo de pelaje",
      "Respetamos las preferencias del tutor y las necesidades del perro",
      "Manejo respetuoso y con paciencia durante todo el proceso",
      "Se pueden solicitar cortes específicos por raza o estilos personalizados",
      "Incluye desenredado previo si es necesario",
    ],
    recommendation: "Recomendado aproximadamente cada mes para mantener el pelaje saludable.",
  },
  {
    id: "unas",
    icon: SprayCan,
    title: "Corte de uñas",
    summary: "Corte de uñas seguro y sin estrés para tu mascota.",
    details: [
      "Las uñas largas pueden causar dolor al caminar y problemas posturales",
      "Corte seguro realizado por profesionales con experiencia",
      "Proceso calmado y sin prisa para la comodidad del perro",
      "Usamos herramientas de calidad profesional",
    ],
    recommendation: "Recomendado cada 2 a 3 semanas o cuando escuches que hacen ruido contra el suelo.",
  },
  {
    id: "oidos",
    icon: Ear,
    title: "Limpieza de oídos",
    summary: "Limpieza profesional para prevenir infecciones y acumulación de suciedad.",
    details: [
      "Previene infecciones y acumulación de cerumen",
      "Especialmente importante en razas con orejas caídas (Cocker, Basset, etc.)",
      "Se utiliza solución suave y segura para el canal auditivo",
      "Revisión visual del estado general de los oídos",
    ],
    recommendation: "Recomendado revisar semanalmente en casa y limpiar profesionalmente en cada visita.",
  },
  {
    id: "glandulas",
    icon: Dog,
    title: "Limpieza de glándulas",
    summary: "Limpieza de glándulas anales realizada con cuidado y profesionalismo.",
    details: [
      "Previene molestias, infecciones e impactación de las glándulas",
      "Procedimiento realizado con delicadeza y experiencia",
      "Señales de que tu perro necesita este servicio: arrastrar la zona en el suelo, lamerse excesivamente",
      "Se realiza durante el baño para mayor comodidad",
    ],
    recommendation: "Recomendado consultarlo en cada visita de baño o según indicación veterinaria.",
  },
];

export default function PeluqueriaPage() {
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
              <li className="text-foreground font-medium">Peluquería canina</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-16">
            <span className="text-sm font-semibold text-accent tracking-wide uppercase">Peluquería canina</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-5 leading-tight">
              Peluquería canina con productos naturales y bienestar animal
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Ofrecemos servicios de higiene y cuidado para mantener a tu perro limpio, cómodo y saludable. 
              Cada servicio se realiza con{" "}
              <strong className="text-foreground">productos naturales e hipoalergénicos</strong>,
              sin bozales, sin amarres y sin sedantes.
            </p>
          </header>

          {/* Differentiators */}
          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            {[
              { text: "Productos 100% naturales", desc: "Shampoo y productos hipoalergénicos" },
              { text: "Sin bozales ni amarres", desc: "Manejo respetuoso y paciente" },
              { text: "Enfoque pro bienestar", desc: "Experiencia libre de estrés" },
            ].map((d) => (
              <div key={d.text} className="bg-card border border-border rounded-2xl p-5 text-center">
                <p className="font-display font-bold text-foreground text-sm">{d.text}</p>
                <p className="text-xs text-muted-foreground mt-1">{d.desc}</p>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className="grid gap-6 mb-16">
            {services.map((service) => (
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
              <span className="text-sm font-semibold text-accent tracking-wide uppercase">Nuestros clientes</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-3">Mira el proceso con algunas mascotas</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Así trabajamos con cada perrito que nos visita. Sin bozales, sin estrés, con mucho cariño.</p>
            </div>
            <InstagramEmbed reelUrls={INSTAGRAM_REELS} />
          </section>

          {/* Local */}
          <section className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-10 text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-accent mb-3">
              <MapPin size={20} />
              <span className="text-sm font-semibold uppercase tracking-wide">Nuestro local</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Visítanos en Los Cobres de Vitacura</h2>
            <p className="text-muted-foreground mb-2 max-w-xl mx-auto">
              Nuestro primer local físico está en{" "}
              <strong className="text-foreground">Los Cobres de Vitacura, Local D01</strong>. 
              Aceptamos transferencia bancaria, efectivo y{" "}
              <strong className="text-foreground">pago con tarjetas</strong> en el local.
            </p>
          </section>

          {/* Pricing */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-16">
            <h2 className="text-2xl font-bold text-primary mb-3">¿Cuánto cuesta la peluquería canina?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Los precios dependen del tamaño del perro, el estado de su pelaje (manto) y los servicios solicitados. 
              Para darte un valor más preciso, envíanos una foto de tu perrito y te enviaremos un precio aproximado.
            </p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm">
              <MessageCircle size={18} />
              Consultar precio por WhatsApp
            </a>
          </div>

          {/* CTA */}
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">¿Quieres agendar una hora de peluquería?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                <MessageCircle size={20} />
                Agendar peluquería
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
