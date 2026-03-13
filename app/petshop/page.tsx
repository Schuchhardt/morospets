import type { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingBag,
  Sparkles,
  Bone,
  Gamepad2,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  MapPin,
  Heart,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";
import InstagramEmbed from "@/components/InstagramEmbed";

const INSTAGRAM_REELS = [
  "https://www.instagram.com/reel/DSi4FMHDgb5/",
  "https://www.instagram.com/p/DLONs1_s_F-/",
  "https://www.instagram.com/reel/DHRopZLuE3S/",
];

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: "Petshop Canino en Santiago — Productos Naturales y Accesorios | Moro's Pets",
  description:
    "Petshop canino en Santiago: productos naturales para el pelaje, accesorios, juguetes, snacks y premios saludables para perros. Visítanos en Los Cobres de Vitacura. Moro's Pets.",
  keywords: [
    "petshop canino Santiago",
    "productos naturales para perros",
    "tienda para perros Santiago",
    "accesorios para perros Vitacura",
    "juguetes para perros",
    "snacks saludables perros",
    "premios naturales perros",
    "shampoo natural perros",
    "petshop Vitacura",
    "Moro's Pets petshop",
  ],
  openGraph: {
    title: "Petshop Canino — Moro's Pets",
    description:
      "Productos naturales para el pelaje, accesorios, juguetes y snacks saludables para tu perro en Santiago.",
    url: "https://morospets.cl/petshop",
    type: "website",
    images: [{ url: "/images/hero-dog.jpg", width: 1200, height: 630, alt: "Petshop Canino — Moro's Pets" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petshop Canino — Moro's Pets",
    description: "Productos naturales, accesorios, juguetes y snacks saludables para tu perro.",
    images: ["/images/hero-dog.jpg"],
  },
  alternates: { canonical: "https://morospets.cl/petshop" },
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
      "@type": "Store",
      name: "Moro's Pets — Petshop",
      description: "Tienda de productos naturales para el cuidado canino: shampoo, acondicionadores, accesorios, juguetes y snacks saludables.",
      url: "https://morospets.cl/petshop",
      image: "https://morospets.cl/images/hero-dog.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Los Cobres de Vitacura, Local D01",
        addressLocality: "Vitacura, Santiago",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
      priceRange: "$$",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://morospets.cl" },
        { "@type": "ListItem", position: 2, name: "Petshop", item: "https://morospets.cl/petshop" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué productos venden en el petshop de Moro's Pets?",
          acceptedAnswer: { "@type": "Answer", text: "Vendemos productos naturales para el cuidado del pelaje (shampoo, acondicionadores, perfumes), accesorios (collares, correas, arneses), juguetes interactivos y snacks saludables para perros." },
        },
        {
          "@type": "Question",
          name: "¿Los productos son naturales?",
          acceptedAnswer: { "@type": "Answer", text: "Sí. Seleccionamos marcas que utilizan ingredientes naturales, hipoalergénicos y que no son testeados en animales. Buscamos productos que cuiden la piel y pelaje de los perros de forma segura." },
        },
        {
          "@type": "Question",
          name: "¿Puedo comprar productos sin agendar un servicio de peluquería?",
          acceptedAnswer: { "@type": "Answer", text: "¡Por supuesto! Nuestro petshop está abierto para todos. Puedes visitarnos en nuestro local en Los Cobres de Vitacura, Local D01, o consultarnos por WhatsApp." },
        },
      ],
    },
  ],
};

const WHATSAPP_LINK = "https://wa.me/56988881125?text=Hola,%20quiero%20consultar%20por%20productos%20del%20petshop";

const categories = [
  {
    id: "cuidado-pelaje",
    icon: Sparkles,
    title: "Productos para el cuidado del pelaje",
    description: "Línea completa de productos naturales e hipoalergénicos para mantener el pelaje de tu perro limpio, suave y saludable.",
    products: [
      "Shampoo natural e hipoalergénico para diferentes tipos de pelaje",
      "Acondicionadores y desenredantes naturales",
      "Perfumes y colonias suaves aptas para perros",
      "Cepillos y peines profesionales para uso en casa",
      "Productos sin testeo en animales (cruelty-free)",
    ],
  },
  {
    id: "accesorios",
    icon: Gamepad2,
    title: "Accesorios y juguetes",
    description: "Accesorios funcionales y juguetes para mantener a tu perro activo, entretenido y seguro.",
    products: [
      "Collares, correas y arneses de calidad",
      "Juguetes interactivos y de estimulación mental",
      "Juguetes mordedores resistentes",
      "Platos y bebederos",
      "Bolsos y transportadores",
    ],
  },
  {
    id: "snacks",
    icon: Bone,
    title: "Snacks y premios saludables",
    description: "Premios y snacks elaborados con ingredientes naturales, ideales para el entrenamiento o simplemente para consentir a tu mascota.",
    products: [
      "Snacks deshidratados naturales (sin conservantes artificiales)",
      "Premios de entrenamiento bajos en calorías",
      "Huesos y masticables naturales",
      "Opciones para perros con alergias o sensibilidades",
      "Treats dentales para la salud bucal",
    ],
  },
];

export default function PetshopPage() {
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
              <li className="text-foreground font-medium">Petshop</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-16">
            <span className="text-sm font-semibold text-accent tracking-wide uppercase">Petshop canino</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-5 leading-tight">
              Petshop canino: productos naturales y accesorios
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Encuentra todo lo que tu perro necesita en un solo lugar. Seleccionamos{" "}
              <strong className="text-foreground">productos naturales, hipoalergénicos y de calidad</strong>{" "}
              para el cuidado y bienestar de tu mascota.
            </p>
          </header>

          {/* Values */}
          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            {[
              { icon: Sparkles, text: "100% natural", desc: "Productos sin químicos agresivos" },
              { icon: Heart, text: "Cruelty-free", desc: "Sin testeo en animales" },
              { icon: ShoppingBag, text: "En nuestro local", desc: "Los Cobres de Vitacura, D01" },
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

          {/* Product Categories */}
          <div className="grid gap-6 mb-16">
            {categories.map((cat) => (
              <article key={cat.id} id={cat.id} className="bg-card border border-border rounded-2xl p-6 md:p-8 scroll-mt-20">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <cat.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-xl text-foreground">{cat.title}</h2>
                    <p className="text-muted-foreground mt-1">{cat.description}</p>
                  </div>
                </div>
                <ul className="grid gap-2 pl-14">
                  {cat.products.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Instagram Reels */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <span className="text-sm font-semibold text-accent tracking-wide uppercase">Nuestro petshop</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-3">Conoce nuestros productos</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Mira lo que tenemos disponible en nuestro local para consentir a tu perrito.</p>
            </div>
            <InstagramEmbed reelUrls={INSTAGRAM_REELS} />
          </section>

          {/* Visit us */}
          <section className="bg-accent/10 border border-accent/20 rounded-2xl p-6 md:p-10 text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-accent mb-3">
              <MapPin size={20} />
              <span className="text-sm font-semibold uppercase tracking-wide">Visítanos</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Nuestro Petshop en Los Cobres de Vitacura</h2>
            <p className="text-muted-foreground mb-4 max-w-xl mx-auto">
              Encuéntranos en <strong className="text-foreground">Los Cobres de Vitacura, Local D01</strong>. 
              Puedes ver y elegir los productos en persona. Aceptamos transferencia bancaria, efectivo y{" "}
              <strong className="text-foreground">pago con tarjetas</strong>.
            </p>
            <p className="text-sm text-muted-foreground">
              ¿No puedes venir? Escríbenos por WhatsApp y te enviamos fotos y detalles de los productos disponibles.
            </p>
          </section>

          {/* CTA */}
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground">¿Quieres saber qué productos tenemos disponibles?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                <MessageCircle size={20} />
                Consultar por WhatsApp
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
