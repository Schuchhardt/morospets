import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/56988881125?text=Hola,%20quiero%20agendar%20un%20servicio%20para%20mi%20perro";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-whatsapp-float"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="text-[#fff]" size={28} />
  </a>
);

export default WhatsAppFloat;
