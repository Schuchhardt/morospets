import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, ClipboardList, CheckCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/56988881125?text=Hola,%20quiero%20agendar%20un%20servicio%20para%20mi%20perro";

const steps = [
  { icon: ClipboardList, label: "Elige el servicio" },
  { icon: CalendarCheck, label: "Selecciona la fecha" },
  { icon: MessageCircle, label: "Escríbenos por WhatsApp" },
  { icon: CheckCircle, label: "Confirma la reserva" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Booking = () => (
  <section id="agenda" className="py-20 md:py-28 bg-primary/5">
    <div className="container">
      <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center mb-14">
        <span className="text-sm font-semibold text-accent tracking-wide uppercase">Agenda</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-5">
          Reserva fácilmente el cuidado de tu perro
        </h2>
        <p className="text-muted-foreground text-lg">
          Puedes agendar tu servicio de forma rápida a través de WhatsApp.
          Nos pondremos en contacto si necesitamos más información.
        </p>
      </motion.div>

      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => (
            <div key={step.label} className="bg-card rounded-2xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="text-accent" size={22} />
              </div>
              <span className="text-xs font-semibold text-accent mb-1 block">Paso {i + 1}</span>
              <p className="font-display font-bold text-foreground">{step.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="text-center">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
        >
          <MessageCircle size={24} />
          Agendar por WhatsApp
        </a>
        <p className="text-sm text-muted-foreground mt-4">
          Es la forma más rápida y directa de reservar
        </p>
      </motion.div>
    </div>
  </section>
);

export default Booking;
