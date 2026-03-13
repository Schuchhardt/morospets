import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import NewLocation from "@/components/NewLocation";
import PetTips from "@/components/PetTips";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import InstagramSection from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://morospets.cl/#business",
      name: "Moro's Pets",
      description:
        "Peluquería canina, petshop y paseos con enfoque en bienestar animal. Solo productos naturales, sin bozales. Los Cobres de Vitacura, Local D01.",
      url: "https://morospets.cl",
      telephone: "+56988881125",
      image: "https://morospets.cl/images/hero-dog.jpg",
      logo: "https://morospets.cl/images/moros-icon.png",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressRegion: "Región Metropolitana",
        addressCountry: "CL",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
        },
      ],
      sameAs: ["https://www.instagram.com/morospets/"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Moro's Pets",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Peluquería canina",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Baño y secado",
                  description:
                    "Baño completo con productos naturales y secado profesional para tu perro.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Corte de pelo",
                  description:
                    "Corte de pelo profesional adaptado a la raza y necesidades de cada perro.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Corte de uñas",
                  description:
                    "Corte de uñas seguro y sin estrés para tu mascota.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Limpieza de oídos",
                  description:
                    "Limpieza de oídos profesional para prevenir infecciones.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Limpieza de glándulas",
                  description:
                    "Limpieza de glándulas anales realizada con cuidado y profesionalismo.",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Paseos",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Paseos al parque",
                  description:
                    "Paseos recreativos al parque para estimulación física y mental de tu perro.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Paseos al cerro",
                  description:
                    "Paseos al cerro para que tu perro explore y se ejercite en la naturaleza.",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Petshop",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Product",
                  name: "Productos naturales para mascotas",
                  description:
                    "Productos naturales seleccionados para el cuidado del pelaje, accesorios, juguetes y snacks saludables.",
                },
              },
            ],
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://morospets.cl/#website",
      url: "https://morospets.cl",
      name: "Moro's Pets",
      description:
        "Peluquería canina, petshop y paseos con enfoque en bienestar animal en Los Cobres de Vitacura, Santiago, Chile.",
      publisher: { "@id": "https://morospets.cl/#business" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://morospets.cl/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Usan bozales o amarres en Moro's Pets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. En Moro's Pets priorizamos métodos de manejo respetuoso. No usamos bozales, amarres ni sedantes. Cada perro vive la experiencia de forma positiva y libre de estrés.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué productos utilizan para el cuidado de los perros?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Utilizamos productos 100% naturales que cuidan la piel, el pelaje y la sensibilidad de cada mascota. Son suaves y seguros para todo tipo de perros.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo puedo agendar un servicio en Moro's Pets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Puedes agendar tu servicio fácilmente a través de WhatsApp. Solo elige el servicio, selecciona la fecha, escríbenos y confirma la reserva. Es la forma más rápida y directa.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué servicios de peluquería canina ofrecen?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ofrecemos baño y secado, corte de pelo, corte de uñas, limpieza de oídos y limpieza de glándulas. Todos los servicios se realizan con productos naturales y manejo respetuoso.",
          },
        },
        {
          "@type": "Question",
          name: "¿Ofrecen servicio de paseos para perros?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, ofrecemos paseos al parque y paseos al cerro. Los paseos ayudan a tu perro a ejercitarse, explorar y mejorar su bienestar físico y mental.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <NewLocation />
        <About />
        <Philosophy />
        <Services />
        <PetTips />
        <FAQ />
        <Booking />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
