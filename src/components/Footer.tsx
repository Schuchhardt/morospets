import { MessageCircle, Phone, Instagram } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";

const WHATSAPP_LINK = "https://wa.me/56988881125?text=Hola,%20quiero%20agendar%20un%20servicio%20para%20mi%20perro";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logoIcon} alt="" className="h-7 w-7 brightness-0 invert" />
            <span className="font-display text-xl font-bold">Moro's Pets</span>
          </div>
          <p className="text-primary-foreground/70 text-sm max-w-sm">
            Peluquería canina y paseos con enfoque en bienestar animal.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-display font-bold text-sm uppercase tracking-wide text-primary-foreground/50">Contacto</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href="tel:+56988881125" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Phone size={16} /> +56 9 8888 1125
          </a>
          <a href="https://www.instagram.com/morospets/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <Instagram size={16} /> @morospets
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
        <p className="text-xs text-primary-foreground/40">© 2026 Moro's Pets. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
