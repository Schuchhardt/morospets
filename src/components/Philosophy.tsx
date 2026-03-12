import { motion } from "framer-motion";
import { Check } from "lucide-react";

const points = [
  "Atención sin estrés",
  "Sin bozales ni amarres",
  "Sin sedantes",
  "Uso de productos naturales",
  "Paciencia y manejo respetuoso",
  "Paseos para estimulación física y mental",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Philosophy = () => (
  <section className="py-20 md:py-28 bg-primary/5">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <motion.div {...fadeUp}>
        <span className="text-sm font-semibold text-accent tracking-wide uppercase">Nuestra filosofía</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-5">
          Cuidado respetuoso para cada perro
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          En Moro's Pets cada perro es único, por eso adaptamos nuestra atención según sus necesidades.
          Queremos que cada visita sea una experiencia positiva.
        </p>
      </motion.div>

      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
        <div className="grid gap-4">
          {points.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Check className="text-primary" size={16} />
              </div>
              <span className="font-medium text-foreground">{point}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Philosophy;
