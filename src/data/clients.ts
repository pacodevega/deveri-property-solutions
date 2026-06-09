import superCarranza from "@/assets/clients/super-carranza.png";
import ramada from "@/assets/clients/ramada.png";
import six from "@/assets/clients/six.png";
import playaHermosa from "@/assets/clients/playa-hermosa.png";
import panaderiaLaEspecial from "@/assets/clients/panaderia-la-especial.png";
import gueroGuero from "@/assets/clients/guero-guero.png";
import bancoAzteca from "@/assets/clients/banco-azteca.png";
import att from "@/assets/clients/att.png";
import atlas from "@/assets/clients/atlas.png";
import heineken from "@/assets/clients/heineken.png";
import status from "@/assets/clients/status.png";
import casaTenorio from "@/assets/clients/casa-tenorio.webp";
import gigios from "@/assets/clients/gigios.webp";
import plazaHipico from "@/assets/clients/plaza-hipico.png";
import vanderai from "@/assets/clients/vanderai.png";
import gingaGroup from "@/assets/clients/ginga-group.png";
import aguaInmaculada from "@/assets/clients/agua-inmaculada.webp";
import elektra from "@/assets/clients/elektra.png";
import florYAzucar from "@/assets/clients/flor-y-azucar.png";

export interface Client {
  name: string;
  logo?: string;
  large?: boolean;
}

export const clients: Client[] = [
  { name: "Heineken", logo: heineken, large: true },
  { name: "Banco Azteca", logo: bancoAzteca, large: true },
  { name: "Atlas", logo: atlas },
  { name: "Casa Tenorio", logo: casaTenorio, large: true },
  { name: "Status", logo: status },
  { name: "Super Carranza", logo: superCarranza },
  { name: "Panadería La Especial", logo: panaderiaLaEspecial },
  { name: "Playa Hermosa", logo: playaHermosa },
  { name: "Nieves Guero Guero", logo: gueroGuero, large: true },
  { name: "Plaza Hípico", logo: plazaHipico },
  { name: "AT&T", logo: att, large: true },
  { name: "Gigios", logo: gigios, large: true },
  { name: "Ramada", logo: ramada, large: true },
  { name: "Six", logo: six },
  { name: "Vander AI", logo: vanderai, large: true },
  { name: "Ginga Group", logo: gingaGroup, large: true },
  { name: "Agua Inmaculada", logo: aguaInmaculada, large: true },
  { name: "Elektra", logo: elektra, large: true },
];
