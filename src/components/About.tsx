import { motion } from "framer-motion";
import { Heart, Leaf, Shield } from "lucide-react";
import { fadeUp, fadeUpDelay } from "@/lib/animations";

const About = () => (
  <section id="sobre" className="py-20 md:py-28">
    <div className="container">
      <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center mb-16">
        <span className="text-sm font-semibold text-accent tracking-wide uppercase">Sobre nosotros</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-5">
          Una peluquería canina pensada desde el bienestar
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          En Moro's Pets creemos que el cuidado de los perros debe hacerse con respeto y conexión.
          Nuestro enfoque está basado en el bienestar animal, buscando que cada perro se sienta
          tranquilo y en confianza durante todo el proceso.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: Shield, title: "Sin bozales ni amarres", desc: "Priorizamos métodos de manejo respetuoso que permitan que cada perro viva la experiencia de forma positiva." },
          { icon: Leaf, title: "Productos naturales", desc: "Cuidamos la piel, el pelaje y la sensibilidad de cada mascota con productos naturales y suaves." },
          { icon: Heart, title: "Bienestar integral", desc: "Nuestro objetivo no es solo que tu perro se vea bien, sino que también se sienta bien." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            {...fadeUp}
            {...fadeUpDelay(i * 0.15)}
            className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <item.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-display font-bold text-lg text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
