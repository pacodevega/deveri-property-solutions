import fachada from "@/assets/propiedades/yanez-fachada.jpg";
import ruizCortines from "@/assets/propiedades/ruiz-cortines-fachada.jpg";
import ruizCortinesBajos from "@/assets/propiedades/bajos-fachada.jpg";
import hipicoFachada from "@/assets/propiedades/hipico-fachada.jpg";


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
    precioNota: "mensuales + $400 de agua · total $7,900",
    superficie: "40 m²",
    ubicacion: "Esquina sobre Avenida Yáñez",
    ciudad: "Veracruz",
    resumen:
      "Local en esquina con alto flujo vehicular y peatonal, excelente visibilidad y baño privado. Listo para operar.",
    destacados: ["Esquina", "Alto flujo vehicular", "Baño privado"],
    imagen: fachada,
    imagenAlt: "Fachada del local comercial en renta sobre Avenida Yáñez, Veracruz",
    disponible: false,
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
      "Planta alta de 180 m² sobre la principal avenida comercial de Boca del Río. Amplios espacios, baños, privado, bodega y terraza. Opción de rentar 392 m² con la planta baja.",
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
    precio: "$55,000 MXN",
    precioNota: "mensuales · ambas plantas $76,000",
    superficie: "212 m²",
    ubicacion: "Av. Ruiz Cortines",
    ciudad: "Boca del Río",
    resumen:
      "Planta baja de 212 m² con acceso a pie de calle sobre la principal avenida comercial de Boca del Río. Baño de hombres con mingitorios, baño de mujeres, zona de caja, privado climatizado, 4 aires acondicionados y cuarto bodega. Opción de rentar 392 m² con la planta alta.",
    destacados: ["Planta baja", "Pie de calle", "Alto flujo vehicular"],
    imagen: ruizCortinesBajos,
    imagenAlt:
      "Fachada del local comercial en planta baja en renta sobre Avenida Ruiz Cortines, Boca del Río",
    disponible: true,
  },
  {
    slug: "hipico-local-3",
    nombre: "Plaza Hípico — Local 3",
    tipo: "Local comercial",
    operacion: "Renta",
    precio: "$11,400 MXN",
    precioNota: "mensuales + $600 de agua · total $12,000",
    superficie: "50 m²",
    ubicacion: "Plaza Hípico, junto al Súper Carranza",
    ciudad: "Veracruz",
    resumen:
      "Local de 50 m² en Plaza Hípico, junto al Súper Carranza. Baño privado y espacio funcional adaptable a diferentes giros comerciales.",
    destacados: ["Junto al Súper Carranza", "Baño privado", "Adaptable"],
    imagen: hipicoFachada,
    imagenAlt:
      "Fachada del local comercial en renta en Plaza Hípico, junto al Súper Carranza, Veracruz",
    disponible: true,
  },
];

