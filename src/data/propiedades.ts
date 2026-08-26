import fachada from "@/assets/propiedades/yanez-fachada.jpg";

export type Propiedad = {
  slug: string;
  nombre: string;
  tipo: string;
  operacion: string;
  precio: string;
  precioNota?: string;
  superficie: string;
  ubicacion: string;
  ciudad: string;
  resumen: string;
  destacados: string[];
  imagen: string;
  imagenAlt: string;
  disponible: boolean;
};

export const propiedades: Propiedad[] = [
  {
    slug: "yanez-d",
    nombre: "Local comercial Av. Yáñez",
    tipo: "Local comercial",
    operacion: "Renta",
    precio: "$7,500 MXN",
    precioNota: "mensuales + $400 de agua",
    superficie: "40 m²",
    ubicacion: "Esquina sobre Avenida Yáñez",
    ciudad: "Veracruz",
    resumen:
      "Local en esquina con alto flujo vehicular y peatonal, excelente visibilidad y baño privado. Listo para operar.",
    destacados: ["Esquina", "Alto flujo vehicular", "Baño privado"],
    imagen: fachada,
    imagenAlt: "Fachada del local comercial en renta sobre Avenida Yáñez, Veracruz",
    disponible: true,
  },
];
