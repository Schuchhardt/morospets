import { MapPin, PartyPopper, ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const WHATSAPP_LINK =
  "https://wa.me/56988881125?text=Hola,%20quiero%20conocer%20el%20nuevo%20local%20en%20Los%20Cobres%20de%20Vitacura";

const NewLocation = () => (
  <section
    id="nuevo-local"
    className="py-16 md:py-20 bg-accent/10 border-y border-accent/20"
    aria-labelledby="new-location-heading"
  >
    <div className="container">
      <AnimateOnScroll className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <PartyPopper size={16} />
          ¡Nuevo local!
        </div>

        <h2
          id="new-location-heading"
          className="text-3xl md:text-4xl font-bold text-primary mb-4"
        >
          Ahora también en Los Cobres de Vitacura
        </h2>

        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Inauguramos nuestro primer local físico en{" "}
          <strong className="text-foreground">
            Los Cobres de Vitacura, Local D01
          </strong>
          . Ven a conocernos y obtén un{" "}
          <strong className="text-accent">descuento especial</strong> por ser de
          nuestros primeros visitantes.
        </p>

        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin size={18} className="text-accent" />
          <a
            href="https://maps.app.goo.gl/tpwia8Gn9u3BmJzQ6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            Los Cobres de Vitacura · Local D01
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border shadow-md mb-8 max-w-2xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d832.8433954969448!2d-70.56946981869388!3d-33.38741650823654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c90ce8325e0d%3A0x8ae5483340ae4a82!2zTW9yb-KAmXMgUGV0cw!5e0!3m2!1ses!2scl!4v1773422669673!5m2!1ses!2scl"
            width="600"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Moro's Pets en Los Cobres de Vitacura"
            className="w-full"
          />
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          Quiero mi descuento
          <ArrowRight size={18} />
        </a>
      </AnimateOnScroll>
    </div>
  </section>
);

export default NewLocation;
