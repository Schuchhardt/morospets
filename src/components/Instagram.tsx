import { motion } from "framer-motion";
import { Instagram as InstaIcon } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const InstagramSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div {...fadeUp} className="max-w-xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <InstaIcon className="text-accent" size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Síguenos en Instagram
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Compartimos fotos de nuestros servicios, paseos y experiencias con los perritos que nos visitan.
        </p>
        <a
          href="https://www.instagram.com/morospets/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 border-accent text-accent px-6 py-3 rounded-xl font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <InstaIcon size={20} />
          Ver Instagram
        </a>
      </motion.div>
    </div>
  </section>
);

export default InstagramSection;
