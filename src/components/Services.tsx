import { motion } from "framer-motion";
import { Scissors, TreePine } from "lucide-react";
import { fadeUp, fadeUpDelay } from "@/lib/animations";
import heroImg from "@/assets/hero-dog.jpg";
import paseosImg from "@/assets/paseos-dog.jpg";

const groomingServices = ["Baño y secado", "Corte de pelo", "Corte de uñas", "Limpieza de oídos", "Limpieza de glándulas"];

const Services = () => (
  <section id="servicios" className="py-20 md:py-28">
    <div className="container">
      <motion.div {...fadeUp} className="text-center mb-16">
        <span className="text-sm font-semibold text-accent tracking-wide uppercase">Servicios</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3">Lo que hacemos por tu perro</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div {...fadeUp} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-500">
          <img src={heroImg} alt="Servicio de peluquería canina" className="w-full h-56 object-cover" loading="lazy" />
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Scissors className="text-primary" size={20} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">Peluquería canina</h3>
            </div>
            <p className="text-muted-foreground mb-5">
              Servicios de higiene y cuidado para mantener a tu perro limpio, cómodo y saludable.
              Cada servicio se realiza con productos naturales y manejo respetuoso.
            </p>
            <ul className="grid gap-2">
              {groomingServices.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div {...fadeUp} {...fadeUpDelay(0.15)} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-500">
          <img src={paseosImg} alt="Servicio de paseos para perros" className="w-full h-56 object-cover" loading="lazy" />
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <TreePine className="text-primary" size={20} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">Paseos</h3>
            </div>
            <p className="text-muted-foreground mb-5">
              Ofrecemos paseos para que tu perro pueda ejercitarse, explorar y salir de su rutina diaria.
              Los paseos mejoran el bienestar físico y mental.
            </p>
            <ul className="grid gap-2">
              {["Paseos al parque", "Paseos al cerro"].map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Services;
