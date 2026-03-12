import { motion } from "framer-motion";
import { MessageCircle, Phone, Instagram } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/56988881125?text=Hola,%20quiero%20agendar%20un%20servicio%20para%20mi%20perro";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Contact = () => (
  <section id="contacto" className="py-20 md:py-28 bg-primary/5">
    <div className="container">
      <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center mb-12">
        <span className="text-sm font-semibold text-accent tracking-wide uppercase">Contacto</span>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-5">
          Contáctanos
        </h2>
        <p className="text-muted-foreground text-lg">
          Si tienes dudas sobre nuestros servicios o quieres más información, puedes escribirnos directamente.
        </p>
      </motion.div>

      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-lg transition-shadow duration-500 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <MessageCircle className="text-primary" size={22} />
            </div>
            <p className="font-display font-bold text-foreground">WhatsApp</p>
            <p className="text-sm text-muted-foreground mt-1">Escríbenos directo</p>
          </a>

          <a
            href="tel:+56988881125"
            className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-lg transition-shadow duration-500 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="text-primary" size={22} />
            </div>
            <p className="font-display font-bold text-foreground">Teléfono</p>
            <p className="text-sm text-muted-foreground mt-1">+56 9 8888 1125</p>
          </a>

          <a
            href="https://www.instagram.com/morospets/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-lg transition-shadow duration-500 group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Instagram className="text-primary" size={22} />
            </div>
            <p className="font-display font-bold text-foreground">Instagram</p>
            <p className="text-sm text-muted-foreground mt-1">@morospets</p>
          </a>
        </div>
      </motion.div>

      <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="text-center">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={20} />
          Escribir por WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

export default Contact;
