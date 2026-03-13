import { Lightbulb, Droplets, Bone, Heart, ShieldCheck, Thermometer, ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const tips = [
  {
    icon: Droplets,
    title: "Frecuencia de baño ideal",
    description:
      "Lo recomendable es bañar a tu perro cada 3 a 4 semanas. Bañarlo con demasiada frecuencia puede resecar su piel y eliminar los aceites naturales de su pelaje.",
    tag: "Higiene",
  },
  {
    icon: Bone,
    title: "Cepillado regular",
    description:
      "Cepillar a tu perro al menos 2-3 veces por semana ayuda a prevenir nudos, eliminar pelo muerto y distribuir los aceites naturales para un pelaje más brillante y saludable.",
    tag: "Cuidado",
  },
  {
    icon: Heart,
    title: "Revisa sus oídos semanalmente",
    description:
      "Los oídos de tu perro pueden acumular suciedad y humedad. Revísalos cada semana y límpialos suavemente para prevenir infecciones, especialmente en razas con orejas caídas.",
    tag: "Salud",
  },
  {
    icon: ShieldCheck,
    title: "Corte de uñas a tiempo",
    description:
      "Las uñas largas pueden causar dolor al caminar y problemas posturales. Recórtalas cada 2-3 semanas o cuando escuches que hacen ruido contra el suelo.",
    tag: "Cuidado",
  },
  {
    icon: Thermometer,
    title: "Cuidado con el calor",
    description:
      "En verano, evita pasear en las horas de mayor calor. Toca el pavimento con tu mano: si quema, está demasiado caliente para las almohadillas de tu perro.",
    tag: "Bienestar",
  },
  {
    icon: Lightbulb,
    title: "Primera visita al peluquero",
    description:
      "Lleva a tu cachorro al peluquero canino desde los 3 meses para que se acostumbre al proceso. Una experiencia positiva temprana hará que las futuras visitas sean mucho más fáciles.",
    tag: "Consejos",
  },
];

const PetTips = () => (
  <section
    id="tips"
    className="py-20 md:py-28 bg-primary/5"
    aria-labelledby="tips-heading"
  >
    <div className="container">
      <AnimateOnScroll className="text-center mb-14">
        <span className="text-sm font-semibold text-accent tracking-wide uppercase">
          Blog & Tips
        </span>
        <h2
          id="tips-heading"
          className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4"
        >
          Tips para el cuidado de tu mascota
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Consejos prácticos de nuestros expertos para mantener a tu perro feliz
          y saludable.
        </p>
      </AnimateOnScroll>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, i) => (
          <AnimateOnScroll
            key={tip.title}
            delay={i * 0.08}
            className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow duration-500 group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <tip.icon className="text-primary" size={20} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                {tip.tag}
              </span>
            </div>
            <h3 className="font-display font-bold text-lg text-foreground mb-2">
              {tip.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {tip.description}
            </p>
          </AnimateOnScroll>
        ))}
      </div>

      <AnimateOnScroll delay={0.2} className="text-center mt-10">
        <Link
          href="/tips"
          className="inline-flex items-center gap-2 border-2 border-primary text-primary px-7 py-3.5 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Ver todos los tips
          <ArrowRight size={18} />
        </Link>
      </AnimateOnScroll>
    </div>
  </section>
);

export default PetTips;
