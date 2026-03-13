import { Scissors, TreePine, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const groomingServices = ["Baño y secado", "Corte de pelo", "Corte de uñas", "Limpieza de oídos", "Limpieza de glándulas"];

const Services = () => (
  <section id="servicios" className="py-20 md:py-28" aria-labelledby="services-heading">
    <div className="container">
      <AnimateOnScroll className="text-center mb-16">
        <span className="text-sm font-semibold text-accent tracking-wide uppercase">Servicios</span>
        <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-primary mt-3">Lo que hacemos por tu perro</h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Peluquería canina, petshop y paseos. Todo con productos naturales y enfoque en bienestar animal.</p>
      </AnimateOnScroll>

      <div className="grid md:grid-cols-3 gap-8">
        <AnimateOnScroll className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-500">
          <Image src="/images/hero-dog.jpg" alt="Servicio de peluquería canina en Moro's Pets" width={600} height={224} className="w-full h-56 object-cover" />
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
            <Link href="/peluqueria" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline mt-5">
              Ver detalle completo <ArrowRight size={14} />
            </Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-500">
          <Image src="/images/paseos-dog.jpg" alt="Servicio de paseos para perros en Moro's Pets" width={600} height={224} className="w-full h-56 object-cover" />
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
            <Link href="/paseos" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline mt-5">
              Ver detalle completo <ArrowRight size={14} />
            </Link>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.3} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-500">
          <Image src="/images/petshop.jpg" alt="Petshop canino en Moro's Pets" width={600} height={224} className="w-full h-56 object-cover" />
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShoppingBag className="text-primary" size={20} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">Petshop</h3>
            </div>
            <p className="text-muted-foreground mb-5">
              En nuestro petshop encontrarás productos naturales seleccionados para consentir y
              cuidar a tu perro. Todo pensado para su bienestar.
            </p>
            <ul className="grid gap-2">
              {["Productos naturales para el pelaje", "Accesorios y juguetes", "Snacks y premios saludables"].map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
            <Link href="/petshop" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline mt-5">
              Ver detalle completo <ArrowRight size={14} />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default Services;
