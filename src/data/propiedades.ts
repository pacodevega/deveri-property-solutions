import fachada from "@/assets/propiedades/yanez-fachada.jpg";
import ruizCortines from "@/assets/propiedades/ruiz-cortines-fachada.jpg";
import ruizCortinesBajos from "@/assets/propiedades/bajos-fachada.jpg";
import hipicoFachada from "@/assets/propiedades/hipico-fachada.jpg";
import palmerasFachada from "@/assets/propiedades/palmeras-1.jpg";
import grijalvaFachada from "@/assets/propiedades/grijalva-2.jpg";
import ponienteFachada from "@/assets/propiedades/poniente-1.jpg";
import americasFachada from "@/assets/propiedades/americas-1.jpg";
import maestroFachada from "@/assets/propiedades/maestro-1.jpg";
import orizabaFachada from "@/assets/propiedades/orizaba-1.jpg";
import casaOrizabaFachada from "@/assets/propiedades/casa-orizaba-1.jpg";




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
    precio: "$7,320 MXN",
    precioNota: "mensuales + $580 de agua · total $7,900",
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
    precio: "$30,900 MXN",
    precioNota: "mensuales + $1,100 de agua · total $32,000 · ambas plantas $76,000",
    superficie: "180 m²",
    ubicacion: "Av. Ruiz Cortines",
    ciudad: "Boca del Río",
    resumen:
      "Planta alta de 180 m² sobre la principal avenida comercial de Boca del Río. Amplios espacios, baños, privado, bodega y terraza. Opción de rentar 400 m² con la planta baja.",
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
    precio: "$53,500 MXN",
    precioNota: "mensuales + $1,500 de agua · total $55,000 · ambas plantas $76,000",
    superficie: "220 m²",
    ubicacion: "Av. Ruiz Cortines",
    ciudad: "Boca del Río",
    resumen:
      "Planta baja de 220 m² con acceso a pie de calle sobre la principal avenida comercial de Boca del Río. Baño de hombres con mingitorios, baño de mujeres, zona de caja, privado climatizado, 4 aires acondicionados y cuarto bodega. Opción de rentar 400 m² con la planta alta.",
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
  {

    slug: "avenida-palmeras",
    nombre: "Local comercial Avenida Palmeras",
    tipo: "Local comercial",
    operacion: "Renta",
    precio: "$28,100 MXN",
    precioNota: "mensuales + $900 de agua · total $29,000",
    superficie: "180 m²",
    ubicacion: "Avenida Palmeras, cerca de Walmart",
    ciudad: "Veracruz",
    resumen:
      "Local de 180 m² en planta baja y alta sobre Avenida Palmeras, a pasos de Walmart. 3 cubículos, sala de juntas, cocina, bodega, 3 baños y 5 aires acondicionados.",
    destacados: ["Dos plantas", "Cerca de Walmart", "Sala de juntas"],
    imagen: palmerasFachada,
    imagenAlt:
      "Fachada del local comercial sobre Avenida Palmeras, cerca de Walmart, Veracruz",
    disponible: false,
  },
  {
    slug: "grijalva-reforma",
    nombre: "Local comercial en Grijalva, Reforma",
    tipo: "Local comercial",
    operacion: "Renta",
    precio: "$12,000 MXN",
    precioNota: "mensuales + $900 de agua · total $12,900",
    superficie: "40 m²",
    ubicacion: "Grijalva, casi esquina con Colón, Reforma",
    ciudad: "Veracruz",
    resumen:
      "Local de 40 m² sobre Grijalva, casi esquina con Colón, en Reforma. 2 baños privados, tarja y distribución funcional adaptable a distintos giros.",
    destacados: ["2 baños privados", "Tarja", "Zona comercial activa"],
    imagen: grijalvaFachada,
    imagenAlt:
      "Fachada del local comercial sobre Grijalva, casi esquina con Colón, Reforma, Veracruz",
    disponible: false,
  },
  {
    slug: "poniente-3",
    nombre: "Local comercial en Poniente 3",
    tipo: "Local comercial",
    operacion: "Renta",
    precio: "$9,000 MXN",
    precioNota: "mensuales + $900 de agua · total $9,900",
    superficie: "90 m²",
    ubicacion: "Poniente 3, a pasos de Avenida Sugasti",
    ciudad: "Veracruz",
    resumen:
      "Local comercial de 90 m² en Poniente 3, a pasos de Avenida Sugasti. 2 baños, espacio amplio y versátil en zona de alto movimiento peatonal.",
    destacados: ["2 baños", "90 m² amplios", "Alto flujo peatonal"],
    imagen: ponienteFachada,
    imagenAlt:
      "Fachada del local comercial en Poniente 3, a pasos de Avenida Sugasti, Veracruz",
    disponible: false,
  },
  {
    slug: "americas-reforma",
    nombre: "Oficina en Avenida de las Américas, Reforma",
    tipo: "Oficina",
    operacion: "Renta",
    precio: "$14,000 MXN",
    precioNota: "mensuales + $900 de agua · total $14,900",
    superficie: "110 m²",
    ubicacion: "Avenida de las Américas, colonia Reforma",
    ciudad: "Veracruz",
    resumen:
      "Oficina de 110 m² en segundo piso, totalmente climatizada: 2 privados, zona de cocina, bodega, 2 medios baños y 4 aires acondicionados.",
    destacados: ["2 privados", "4 aires acondicionados", "Cocina y bodega"],
    imagen: americasFachada,
    imagenAlt:
      "Área principal de la oficina en Avenida de las Américas, colonia Reforma, Veracruz",
    disponible: false,
  },
  {
    slug: "callejon-del-maestro",
    nombre: "Departamento en Callejón del Maestro",
    tipo: "Departamento",
    operacion: "Renta",
    precio: "$7,000 MXN",
    precioNota: "mensuales + $650 de agua · total $7,650",
    superficie: "90 m²",
    ubicacion: "Callejón del Maestro",
    ciudad: "Veracruz",
    resumen:
      "Departamento de 90 m² en segundo piso con 3 recámaras, cocina, 1 baño completo y 1 cajón de estacionamiento.",
    destacados: ["3 recámaras", "1 estacionamiento", "Segundo piso"],
    imagen: maestroFachada,
    imagenAlt: "Interior del departamento en renta en Callejón del Maestro, Veracruz",
    disponible: false,
  },
  {
    slug: "orizaba-tampiquera",
    nombre: "Departamento amueblado en calle Orizaba, Boca del Río",
    tipo: "Departamento",
    operacion: "Renta",
    precio: "$8,400 MXN",
    precioNota: "mensuales + $500 de agua · total $8,900",
    superficie: "70 m²",
    ubicacion: "Calle Orizaba, junto a La Tampiquera",
    ciudad: "Boca del Río",
    resumen:
      "Departamento completamente amueblado y climatizado junto a La Tampiquera, con 2 recámaras y 2 baños. Listo para habitar.",
    destacados: ["Amueblado", "2 recámaras", "Climatizado"],
    imagen: orizabaFachada,
    imagenAlt:
      "Sala y comedor amueblados del departamento en calle Orizaba, Boca del Río",
    disponible: false,
  },
  {
    slug: "casa-orizaba",
    nombre: "Casa en calle Orizaba, Boca del Río",
    tipo: "Casa",
    operacion: "Renta",
    precio: "$12,300 MXN",
    precioNota: "mensuales + $600 de agua · total $12,900",
    superficie: "190 m² construidos",
    ubicacion: "Calle Orizaba, a unas cuadras de La Tampiquera",
    ciudad: "Boca del Río",
    resumen:
      "Casa de 3 recámaras con 1 baño completo, 1 medio baño, cuarto de lavado y 2 aires acondicionados, a unas cuadras de La Tampiquera.",
    destacados: ["3 recámaras", "Cuarto de lavado", "2 aires acondicionados"],
    imagen: casaOrizabaFachada,
    imagenAlt: "Fachada de la casa en renta sobre calle Orizaba, Boca del Río",
    disponible: false,
  },
];
