import fachada from "@/assets/propiedades/yanez-fachada.jpg";
import ruizCortines from "@/assets/propiedades/ruiz-cortines-fachada.jpg";


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
  {
    slug: "ruiz-cortines-altos",
    nombre: "Ruiz Cortines Altos — Local comercial",
    tipo: "Local comercial",
    operacion: "Renta",
    precio: "$32,000 MXN",
    precioNota: "mensuales · ambas plantas $76,000",
    superficie: "180 m²",
    ubicacion: "Av. Ruiz Cortines",
    ciudad: "Boca del Río",
    resumen:
      "Planta alta de 180 m² sobre la principal avenida comercial de Boca del Río. Amplios espacios, baños, privado, bodega y terraza. Opción de rentar 380 m² con la planta baja.",
    destacados: ["Planta alta", "Terraza", "Alto flujo vehicular"],
    imagen: ruizCortines,
    imagenAlt:
      "Fachada del local comercial en renta sobre Avenida Ruiz Cortines, Boca del Río",
    disponible: true,
  },
  {
    slug: "ruiz-cortines-bajos",
    nombre: "Ruiz Cortines Bajos — Local comercial",
    tipo: "Local comercial",
    operacion: "Renta",
    precio: "Consultar",
    precioNota: "ambas plantas $76,000 MXN / mes",
    superficie: "200 m²",
    ubicacion: "Av. Ruiz Cortines",
    ciudad: "Boca del Río",
    resumen:
      "Planta baja de 200 m² con acceso a pie de calle sobre la principal avenida comercial de Boca del Río. Baños de hombres y mujeres y cuarto bodega. Opción de rentar 380 m² con la planta alta.",
    destacados: ["Planta baja", "Pie de calle", "Alto flujo vehicular"],
    imagen: ruizCortines,
    imagenAlt:
      "Fachada del local comercial en planta baja en renta sobre Avenida Ruiz Cortines, Boca del Río",
    disponible: true,
  },
];

