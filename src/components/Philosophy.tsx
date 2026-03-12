import { Check } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const points = [
  "Atención sin estrés",
  "Sin bozales ni amarres",
  "Sin sedantes",
  "Uso de productos naturales",
  "Paciencia y manejo respetuoso",
  "Paseos para estimulación física y mental",
];

const Philosophy = () => (
  <section className="py-20 md:py-28 bg-primary/5" aria-labelledby="philosophy-heading">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <AnimateOnScroll>
        <span className="text-sm font-semibold text-accent tracking-wide uppercase">Nuestra filosofía</span>
        <h2 id="philosophy-heading" className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-5">
          Cuidado respetuoso para cada perro
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          En Moro&apos;s Pets cada perro es único, por eso adaptamos nuestra atención según sus necesidades.
          Queremos que cada visita sea una experiencia positiva.
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll delay={0.2}>
        <div className="grid gap-4">
          {points.map((point, i) => (
            <AnimateOnScroll
              key={point}
              animation="slide-right"
              delay={i * 0.08}
              className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Check className="text-primary" size={16} />
              </div>
              <span className="font-medium text-foreground">{point}</span>
            </AnimateOnScroll>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default Philosophy;
