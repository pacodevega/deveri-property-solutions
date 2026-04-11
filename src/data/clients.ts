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

export interface Client {
  name: string;
  logo?: string;
}

export const clients: Client[] = [
  { name: "Heineken", logo: heineken },
  { name: "Banco Azteca", logo: bancoAzteca },
  { name: "Atlas", logo: atlas },
  { name: "Casa Tenorio" },
  { name: "Status", logo: status },
  { name: "Super Carranza", logo: superCarranza },
  { name: "Panadería La Especial", logo: panaderiaLaEspecial },
  { name: "Playa Hermosa", logo: playaHermosa },
  { name: "Nieves Guero Guero", logo: gueroGuero },
  { name: "Plaza Hípico" },
  { name: "AT&T", logo: att },
  { name: "Gigios" },
  { name: "Ramada", logo: ramada },
  { name: "Six", logo: six },
];
