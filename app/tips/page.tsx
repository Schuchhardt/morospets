import type { Metadata } from "next";
import Link from "next/link";
import {
  Scissors,
  Footprints,
  Apple,
  Thermometer,
  Droplets,
  Heart,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";

/* ── SEO Metadata ── */
export const metadata: Metadata = {
  title: "Tips para el Cuidado de tu Perro — Guía Completa de Bienestar Canino",
  description:
    "Consejos prácticos sobre cepillado, paseos, alimentación, comportamiento y bienestar canino. Aprende a cuidar mejor a tu perro con los expertos de Moro's Pets en Santiago, Chile.",
  keywords: [
    "tips cuidado perro",
    "cómo cepillar perro",
    "paseos para perros consejos",
    "alimentación saludable perros",
    "frutas para perros",
    "cómo evitar que mi perro tire de la correa",
    "cuidado canino Santiago",
    "bienestar animal perros",
    "peluquería canina consejos",
    "Moro's Pets tips",
  ],
  openGraph: {
    title: "Tips para el Cuidado de tu Perro — Moro's Pets",
    description:
      "Guía completa con consejos sobre cepillado, paseos, alimentación y comportamiento canino por los expertos de Moro's Pets.",
    url: "https://morospets.cl/tips",
    type: "article",
    images: [
      {
        url: "/images/hero-dog.jpg",
        width: 1200,
        height: 630,
        alt: "Tips para el cuidado de tu perro — Moro's Pets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tips para el Cuidado de tu Perro — Moro's Pets",
    description:
      "Guía completa con consejos sobre cepillado, paseos, alimentación y comportamiento canino.",
    images: ["/images/hero-dog.jpg"],
  },
  alternates: {
    canonical: "https://morospets.cl/tips",
  },
};

/* ── JSON-LD structured data for AEO ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://morospets.cl/tips/#article",
      headline:
        "Consejos para el Cuidado y Bienestar de tu Perro — Guía Completa",
      description:
        "Consejos prácticos sobre cepillado, paseos, alimentación, comportamiento y bienestar canino por los expertos de Moro's Pets.",
      url: "https://morospets.cl/tips",
      datePublished: "2026-03-13",
      dateModified: "2026-03-13",
      author: {
        "@type": "Organization",
        name: "Moro's Pets",
        url: "https://morospets.cl",
      },
      publisher: {
        "@type": "Organization",
        name: "Moro's Pets",
        logo: {
          "@type": "ImageObject",
          url: "https://morospets.cl/images/moros-icon.png",
        },
      },
      image: "https://morospets.cl/images/hero-dog.jpg",
      mainEntityOfPage: "https://morospets.cl/tips",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://morospets.cl",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tips para tu Perro",
          item: "https://morospets.cl/tips",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://morospets.cl/tips/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Con qué frecuencia debo cepillar a mi perro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Se recomienda cepillar a tu perro al menos 2 a 3 veces por semana. Si tiene pelo largo o rizado, puede necesitar cepillado diario para evitar nudos y acumulación de pelo muerto.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué hacer si mi perro tira mucho de la correa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usa un arnés con correa larga de al menos 3 metros. Si tira, detente y no avances hasta que se calme. Cuando haga contacto contigo o deje de tirar, refuerza con un premio. La consistencia es clave.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué frutas puede comer un perro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Algunas frutas seguras para perros son: manzana (baja en grasas), plátano (rico en fibra y potasio), arándanos (ricos en antioxidantes), durazno (contiene hierro) y mandarina (vitamina A y E). Siempre sin semillas y en pequeñas cantidades.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo saber si el pavimento está muy caliente para mi perro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Coloca tu mano sobre el pavimento. Si no puedes mantenerla más de 5 segundos, el suelo está demasiado caliente y puede quemar las almohadillas de tu perro. Mejor cancela el paseo o espera a que baje la temperatura.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo reducir el estrés de mi perro con la pirotecnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El método Tellington consiste en colocar una venda o tela alrededor del cuerpo del perro de forma específica, generando presión suave que puede ayudar a calmar la ansiedad en situaciones de estrés como la pirotecnia.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      "@id": "https://morospets.cl/tips/#howto-cepillado",
      name: "Cómo cepillar el pelo rizado o largo de tu perro",
      description:
        "Guía paso a paso para cepillar correctamente a un perro con pelo largo o rizado.",
      step: [
        {
          "@type": "HowToStep",
          name: "Usa el cepillo adecuado",
          text: "Utiliza cepillos de cerdas largas y anchas con puntas redondeadas.",
        },
        {
          "@type": "HowToStep",
          name: "Cepilla en el sentido del pelo",
          text: "Primero cepilla en el sentido del pelo para desenredar.",
        },
        {
          "@type": "HowToStep",
          name: "Cepilla a contrapelo",
          text: "Luego cepilla a contrapelo para dejar el pelaje esponjoso.",
        },
        {
          "@type": "HowToStep",
          name: "Mantén un corte regular",
          text: "Realiza un corte de pelo aproximadamente cada mes para mantener el pelaje saludable.",
        },
      ],
    },
  ],
};

const WHATSAPP_LINK =
  "https://wa.me/56988881125?text=Hola,%20quiero%20agendar%20un%20servicio%20para%20mi%20perro";

/* ── Section component ── */
function TipSection({
  id,
  icon: Icon,
  tag,
  title,
  children,
}: {
  id: string;
  icon: React.ElementType;
  tag: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20" aria-labelledby={`${id}-heading`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="text-primary" size={20} />
        </div>
        <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
          {tag}
        </span>
      </div>
      <h2
        id={`${id}-heading`}
        className="text-2xl md:text-3xl font-bold text-primary mb-6"
      >
        {title}
      </h2>
      <div className="prose-pet">{children}</div>
    </section>
  );
}

/* ── Page ── */
export default function TipsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-24 pb-20">
        <div className="container max-w-4xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground font-medium">
                Tips para tu Perro
              </li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-16">
            <span className="text-sm font-semibold text-accent tracking-wide uppercase">
              Blog & Tips
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-5 leading-tight">
              Consejos para el cuidado y bienestar de tu perro
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              En Moro&apos;s Pets creemos que el bienestar de los perros depende
              tanto del cuidado profesional como de pequeños hábitos diarios.
              Aquí compartimos algunos consejos útiles sobre higiene, paseos,
              alimentación y comportamiento que pueden ayudarte a mejorar la
              calidad de vida de tu perro.
            </p>
          </header>

          {/* Table of Contents */}
          <nav
            aria-label="Tabla de contenidos"
            className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-16"
          >
            <p className="font-display font-bold text-foreground mb-4">
              Contenido
            </p>
            <ol className="grid sm:grid-cols-2 gap-2 text-sm">
              {[
                { href: "#cepillado", label: "Cepillado del pelaje" },
                { href: "#paseos", label: "Paseos y comportamiento" },
                { href: "#premios", label: "Cuándo premiar durante el paseo" },
                { href: "#visitas", label: "Cómo evitar que salte sobre visitas" },
                { href: "#comandos", label: "Comandos básicos" },
                { href: "#alimentacion", label: "Alimentación saludable" },
                { href: "#calor", label: "Cuidado con el calor" },
                { href: "#hidratacion", label: "Hidratación" },
                { href: "#estres", label: "Técnicas para reducir el estrés" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    → {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Content sections */}
          <div className="space-y-16">
            {/* ── Cepillado ── */}
            <TipSection
              id="cepillado"
              icon={Scissors}
              tag="Higiene"
              title="Cepillado del pelaje"
            >
              <h3>Importancia de cepillar el pelo</h3>
              <p>
                La higiene de tu hogar y la salud de tu perro dependen en gran
                parte de la frecuencia con la que cepilles su pelaje. Cuando el
                pelaje no se cepilla regularmente, se acumula pelo muerto, el
                cual se desprende constantemente en el hogar.
              </p>
              <p>
                Además, esta acumulación puede aumentar la probabilidad de que
                aparezcan parásitos o problemas en la piel. El cepillado regular
                ayuda a mantener el pelaje limpio, saludable y libre de nudos.
              </p>

              <h3>Beneficios de cepillar a tu perro</h3>
              <ul>
                <li>Mantiene el pelaje más limpio</li>
                <li>Mejora el aspecto general del perro</li>
                <li>Distribuye los aceites naturales del pelaje</li>
                <li>Estimula la circulación de la piel</li>
                <li>Previene nudos y enredos</li>
                <li>
                  En época de muda, facilita que el pelo viejo dé paso al nuevo
                </li>
              </ul>

              <h3>Tips para cepillar el pelo rizado o largo</h3>
              <p>
                Si tu perro tiene pelaje largo o rizado, estos consejos pueden
                ayudarte:
              </p>
              <p>
                <strong>Usa el cepillo adecuado:</strong> Los cepillos ideales
                son los de cerdas largas y anchas con puntas redondeadas.
              </p>
              <p>
                <strong>Orden correcto del cepillado:</strong> Primero cepilla
                en el sentido del pelo y luego a contrapelo, para que el pelaje
                quede más esponjoso.
              </p>
              <p>
                <strong>Mantén el pelaje sano:</strong> Se recomienda realizar un
                corte de pelo aproximadamente cada mes para mantener el pelaje
                saludable.
              </p>
            </TipSection>

            {/* ── Paseos ── */}
            <TipSection
              id="paseos"
              icon={Footprints}
              tag="Comportamiento"
              title="Paseos y comportamiento"
            >
              <h3>Qué hacer si tu perro tira mucho de la correa</h3>
              <p>
                Algunos perros tiran constantemente durante los paseos. Para
                mejorar este comportamiento puedes aplicar estas técnicas:
              </p>

              <h4>Usa arnés y correa larga</h4>
              <p>
                Es recomendable pasear a tu perro con arnés y una correa larga
                de al menos 3 metros, lo que le da mayor libertad de movimiento
                y reduce la tensión.
              </p>

              <h4>Crea espacios de calma</h4>
              <p>
                Si tu perro está ansioso, detente un momento y permite que
                olfatee el entorno. También puedes entregarle premios para
                reforzar la calma.
              </p>

              <h4>Técnica de frenado</h4>
              <p>Si tu perro tira de la correa:</p>
              <ul>
                <li>Detente</li>
                <li>No avances hasta que se calme</li>
                <li>
                  Cuando haga contacto contigo o deje de tirar, refuerza con un
                  premio
                </li>
              </ul>
            </TipSection>

            {/* ── Premios ── */}
            <TipSection
              id="premios"
              icon={Heart}
              tag="Entrenamiento"
              title="Cuándo premiar durante el paseo"
            >
              <p>
                Los premios son una herramienta muy útil para reforzar
                comportamientos positivos. Puedes premiar a tu perro cuando:
              </p>
              <ul>
                <li>Hace sus necesidades en el lugar adecuado</li>
                <li>Responde cuando lo llamas</li>
                <li>Mantiene la calma durante el paseo</li>
                <li>En momentos de aprendizaje o entrenamiento</li>
              </ul>

              <h3>Recomendaciones sobre premios</h3>
              <ul>
                <li>
                  Siempre acompaña el premio con felicitaciones o refuerzo
                  positivo
                </li>
                <li>
                  Son especialmente útiles durante el proceso de aprendizaje
                </li>
                <li>Evita el exceso de premios</li>
                <li>
                  Utiliza premios que tengan alto valor motivacional para tu
                  perro
                </li>
              </ul>
            </TipSection>

            {/* ── Visitas ── */}
            <TipSection
              id="visitas"
              icon={Footprints}
              tag="Comportamiento"
              title="Cómo evitar que tu perro salte sobre las visitas"
            >
              <p>
                Muchos perros se emocionan demasiado cuando llegan visitas. Para
                mejorar este comportamiento puedes aplicar estas recomendaciones:
              </p>
              <ol>
                <li>No sobreexcitar al perro cuando entras a la casa</li>
                <li>Premiarlo cuando no salte sobre las personas</li>
                <li>Si salta, no prestarle atención</li>
                <li>
                  Pedir a las visitas que mantengan la misma conducta
                </li>
              </ol>
              <p>
                La consistencia es clave para que el perro entienda qué
                comportamiento es el correcto.
              </p>
            </TipSection>

            {/* ── Comandos ── */}
            <TipSection
              id="comandos"
              icon={Heart}
              tag="Entrenamiento"
              title="Importancia de enseñar comandos básicos"
            >
              <p>
                Enseñar comandos básicos ayuda a establecer un sistema de
                comunicación claro entre el perro y su tutor. Esto permite:
              </p>
              <ul>
                <li>Mejorar el comportamiento del perro</li>
                <li>Facilitar el aprendizaje</li>
                <li>Reforzar el vínculo con su dueño</li>
              </ul>
              <p>
                El aprendizaje se basa en premiar cada vez que el perro realiza
                la acción deseada, reforzando así su conducta.
              </p>
            </TipSection>

            {/* ── Alimentación ── */}
            <TipSection
              id="alimentacion"
              icon={Apple}
              tag="Alimentación"
              title="Alimentación saludable"
            >
              <h3>Beneficios de los choritos en la alimentación del perro</h3>
              <p>
                Los choritos (mejillones) pueden ser un buen complemento
                nutricional en pequeñas cantidades. Aportan:
              </p>
              <ul>
                <li>Proteína de alta calidad</li>
                <li>Ácidos grasos Omega 3</li>
                <li>Vitaminas del grupo B</li>
                <li>Minerales esenciales</li>
              </ul>
              <p>
                Siempre deben ofrecerse como complemento y no como reemplazo de
                su alimentación principal.
              </p>

              <h3>Frutas que pueden gustarle a tu perro</h3>
              <p>
                Algunas frutas pueden ser un snack saludable para los perros:
              </p>
              <ul>
                <li>
                  <strong>Manzana:</strong> baja en grasas y proteínas
                </li>
                <li>
                  <strong>Plátano:</strong> rico en fibra y potasio
                </li>
                <li>
                  <strong>Arándanos:</strong> ricos en antioxidantes
                </li>
                <li>
                  <strong>Durazno:</strong> contiene hierro
                </li>
                <li>
                  <strong>Mandarina:</strong> aporta vitamina A y E
                </li>
              </ul>
              <p>
                Siempre deben ofrecerse sin semillas y en pequeñas cantidades.
              </p>
            </TipSection>

            {/* ── Calor ── */}
            <TipSection
              id="calor"
              icon={Thermometer}
              tag="Bienestar"
              title="Cuidado con el calor durante los paseos"
            >
              <p>
                Las altas temperaturas pueden ser peligrosas para las patas de
                los perros. Un buen método para comprobarlo es tocar el
                pavimento con tu mano. Si no puedes mantener la mano más de 5
                segundos, el suelo está demasiado caliente.
              </p>
              <p>
                En ese caso es mejor cancelar el paseo o esperar a que la
                temperatura baje, ya que el pavimento puede provocar quemaduras
                en las almohadillas.
              </p>

              <h3>Cuándo hacer paseos más largos</h3>
              <p>
                Los paseos largos deben realizarse en las horas más frescas del
                día:
              </p>
              <ul>
                <li>Temprano en la mañana</li>
                <li>Al atardecer</li>
                <li>En la noche</li>
              </ul>
              <p>
                Esto evita el sobrecalentamiento y hace que el paseo sea más
                cómodo para el perro.
              </p>
            </TipSection>

            {/* ── Hidratación ── */}
            <TipSection
              id="hidratacion"
              icon={Droplets}
              tag="Salud"
              title="Hidratación"
            >
              <p>
                Es importante que tu perro siempre tenga agua fresca disponible.
                El agua no solo es importante para beber, sino también para
                ayudar a que el perro pueda refrescarse, especialmente durante
                días calurosos o después del ejercicio.
              </p>
            </TipSection>

            {/* ── Estrés ── */}
            <TipSection
              id="estres"
              icon={Heart}
              tag="Bienestar"
              title="Técnicas para reducir el estrés"
            >
              <h3>Método Tellington</h3>
              <p>
                El método Tellington puede ayudar a reducir la ansiedad de
                algunos perros en situaciones de estrés, como la pirotecnia.
                Consiste en colocar una venda o tela alrededor del cuerpo del
                perro de una forma específica que genera una presión suave, lo
                que puede ayudar a calmarlos.
              </p>
            </TipSection>

            {/* ── Consejo final ── */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Consejo final
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cada perro es único y puede reaccionar de forma diferente a
                distintos estímulos. Lo más importante es observar su
                comportamiento, respetar sus tiempos y reforzar siempre los
                comportamientos positivos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En Moro&apos;s Pets creemos que el bienestar animal comienza con
                el conocimiento, el respeto y el cariño hacia nuestros perros.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center space-y-4 pt-4">
              <p className="text-lg text-muted-foreground">
                ¿Necesitas ayuda profesional con el cuidado de tu perro?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={20} />
                  Agendar servicio
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-7 py-3.5 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <ArrowLeft size={18} />
                  Volver al inicio
                </Link>
              </div>
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
