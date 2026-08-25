// Motor de compatibilidad DEVERI Match (estudio DEVERI, corte 24/08/2026).
// Los cálculos ocurren 100% en el navegador; no se envía información a ningún servidor.

export interface MatchState {
  tipo: string | null;
  estado: string;
  ciudad: string;
  cp: string;
  calle: string;
  citysize: string | null;
  zona: string | null;
  m2: number | null;
  frente: number | null;
  niveles: string | null;
  altura: string | null;
  esquina: string | null;
  cajones: string | null;
  drive: string | null;
  carga: string | null;
  vveh: string | null;
  vpea: string | null;
  nse: string | null;
  gens: string[];
  renta: number | null;
  uso: string | null;
  papeles: string | null;
}

export const initialState: MatchState = {
  tipo: null, estado: "", ciudad: "", cp: "", calle: "", citysize: null, zona: null,
  m2: null, frente: null, niveles: null, altura: null,
  esquina: null, cajones: null, drive: null, carga: null,
  vveh: null, vpea: null, nse: null, gens: [],
  renta: null, uso: null, papeles: null,
};

export interface MatchResult {
  out?: string;
  pct?: number;
  pros?: string[];
  cons?: string[];
}

export const ESTADOS: [string, string][] = [
 ["AGS","Aguascalientes"],["BC","Baja California"],["BCS","Baja California Sur"],["CAM","Campeche"],
 ["CHIS","Chiapas"],["CHIH","Chihuahua"],["CDMX","Ciudad de México"],["COAH","Coahuila"],
 ["COL","Colima"],["DGO","Durango"],["GTO","Guanajuato"],["GRO","Guerrero"],["HGO","Hidalgo"],
 ["JAL","Jalisco"],["MEX","Estado de México"],["MICH","Michoacán"],["MOR","Morelos"],["NAY","Nayarit"],
 ["NL","Nuevo León"],["OAX","Oaxaca"],["PUE","Puebla"],["QRO","Querétaro"],["QROO","Quintana Roo"],
 ["SLP","San Luis Potosí"],["SIN","Sinaloa"],["SON","Sonora"],["TAB","Tabasco"],["TAMPS","Tamaulipas"],
 ["TLAX","Tlaxcala"],["VER","Veracruz"],["YUC","Yucatán"],["ZAC","Zacatecas"]
];
/* Estructura oficial SEPOMEX (Correos de México): los 2 primeros dígitos del CP identifican la entidad;
   en CDMX (01–16) identifican la alcaldía en orden alfabético; el prefijo 00 y 17–19 no se usan. */
export const CP_ESTADO: Record<string, string> = (function () { const m: Record<string, string> = {}; const add=(a,b,e)=>{ for(let i=a;i<=b;i++) m[String(i).padStart(2,"0")]=e; };
 add(1,16,"CDMX"); add(20,20,"AGS"); add(21,22,"BC"); add(23,23,"BCS"); add(24,24,"CAM"); add(25,27,"COAH");
 add(28,28,"COL"); add(29,30,"CHIS"); add(31,33,"CHIH"); add(34,35,"DGO"); add(36,38,"GTO"); add(39,41,"GRO");
 add(42,43,"HGO"); add(44,49,"JAL"); add(50,57,"MEX"); add(58,61,"MICH"); add(62,62,"MOR"); add(63,63,"NAY");
 add(64,67,"NL"); add(68,71,"OAX"); add(72,75,"PUE"); add(76,76,"QRO"); add(77,77,"QROO"); add(78,79,"SLP");
 add(80,82,"SIN"); add(83,85,"SON"); add(86,86,"TAB"); add(87,89,"TAMPS"); add(90,90,"TLAX"); add(91,96,"VER");
 add(97,97,"YUC"); add(98,99,"ZAC"); return m; })();
export const CP_ALCALDIA: Record<string, string> = {"01":"Álvaro Obregón","02":"Azcapotzalco","03":"Benito Juárez","04":"Coyoacán","05":"Cuajimalpa","06":"Cuauhtémoc","07":"Gustavo A. Madero","08":"Iztacalco","09":"Iztapalapa","10":"La Magdalena Contreras","11":"Miguel Hidalgo","12":"Milpa Alta","13":"Tláhuac","14":"Tlalpan","15":"Venustiano Carranza","16":"Xochimilco"};
/* Prefijos núcleo de las 3 grandes ZM (conservador): CDMX completa, Guadalajara 44–45, Monterrey 64 y 66 */
export const CP_METRO = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","44","45","64","66"];
export function cpInfo(cp: string): any { if(!/^\d{5}$/.test(cp)) return null; const pfx=cp.slice(0,2); const est=CP_ESTADO[pfx];
  if(!est) return {invalid:true,pfx}; return {pfx, estado:est, alcaldia:CP_ALCALDIA[pfx]||null, metro:CP_METRO.includes(pfx)}; }
const NORTE = ["NL","TAMPS","COAH","CHIH","BC","BCS","SON","SIN","DGO","ZAC"];
const BAJIO = ["GTO","QRO","AGS","SLP","JAL","MICH"];
const SURGOLFO = ["VER","TAB","CHIS","OAX","PUE","GRO","MOR","CAM","YUC","QROO","HGO","TLAX"];

const CITYRENT: Record<string, number> = { zm:1.35, grande:1.15, media:1.0, pequena:0.8, micro:0.65 };
/* Afinidad con zonas en desarrollo (pocas casas construidas): 7+ = toma posiciones anticipadas */
const ENDES: Record<string, number> = { oxxo:7, mcd:7, oxxogas:8, inmchedraui:8, heb:7, autozone:6, caffenio:6, bodegaexp:5, starbucks:5, bk:5, "3b":4, fguadalajara:4, pollofeliz:4, neto:3, bara:3, supercito:3, waldos:3, fahorro:3, similares:3, seven:3, littlec:3, dominos:3, polloperez:3, pollolenero:3, modelorama:3, six:3, coppel:3, polloloco:3, sirloin:2, smartfit:2 };

export const EMP: any[] = [
 {id:"3b", n:"Tiendas 3B", sec:"Hard discount", tipos:["local","bodega","terreno"],
  m2:{local:[405,450,800,1200], terreno:[585,650,1200,2500]}, frente:10, altura:true,
  city:{zm:15,grande:15,media:14,pequena:11,micro:5}, zonas:{colonia:10,avenida:8,centro:6,residencial:5,carretera:3,turistica:4},
  nse:{ "C-":6,"C":6,"C+":2,"AB":-4 }, rate:[140,220], pea:true, carga:true,
  canal:{cls:"aa",lbl:"Portal A+ verificado",href:"https://www.tiendas3b.com/tienes-un-local-rentalo/",tel:"55 4510 9999",go:"Cargar en portal 3B"},
  acc:"Llena el formulario oficial con superficie, frente, fondo, renta y fotos. Abren 590–630 tiendas en 2026."},
 {id:"oxxo", n:"OXXO", sec:"Conveniencia · FEMSA", tipos:["local","terreno","plaza"],
  m2:{local:[50,80,200,350], terreno:[250,300,500,800], plaza:[50,80,180,300]}, frente:null, altura:false,
  city:{zm:15,grande:15,media:14,pequena:12,micro:6}, zonas:{avenida:10,colonia:9,centro:9,residencial:6,carretera:8,turistica:9},
  nse:{ "C-":5,"C":6,"C+":6,"AB":5 }, rate:[180,320], esquinaBonus:9, veh:true,
  canal:{cls:"aa",lbl:"Portal A+ verificado",href:"https://www.ganacontuinmueble.com",go:"Registrar en Gana con tu Inmueble"},
  acc:"Crea tu cuenta y registra el inmueble con coordenadas y expectativa de renta. ~1,100 aperturas en 2026; también compran."},
 {id:"bara", n:"Tiendas Bara", sec:"Hard discount · FEMSA", tipos:["local","terreno","bodega"],
  m2:{local:[220,280,450,700], terreno:[300,380,700,1200]}, frente:8, altura:true, estados:["GTO","JAL","QRO","SLP","AGS","HGO","NL"],
  city:{zm:12,grande:14,media:15,pequena:12,micro:5}, zonas:{colonia:10,avenida:8,centro:7,residencial:5,carretera:3,turistica:3},
  nse:{ "C-":6,"C":6,"C+":1,"AB":-4 }, rate:[130,210], pea:true, carga:true,
  canal:{cls:"aa",lbl:"Portal A+ verificado",href:"https://bara.com.mx/?page_id=1088",go:"Abrir formulario Bara"},
  acc:"Formulario oficial de Bienes Raíces (Google Forms). Duplicando presencia en el Bajío: +96 tiendas en GTO en 2026."},
 {id:"neto", n:"Tiendas Neto", sec:"Hard discount · G. Salinas", tipos:["local","terreno"],
  m2:{local:[220,240,350,450], terreno:[220,260,350,500]}, frente:10, altura:false,
  city:{zm:12,grande:13,media:14,pequena:12,micro:6}, zonas:{colonia:10,avenida:8,centro:7,residencial:5,carretera:3,turistica:3},
  nse:{ "C-":6,"C":5,"C+":0,"AB":-4 }, rate:[120,200], pea:true,
  canal:{cls:"a",lbl:"Formulario oficial",href:"https://tiendasneto.com.mx/rentanos-tu-local/",go:"Abrir Réntanos tu local"},
  acc:"El ticket de superficie más bajo del hard discount (220–350 m², dato histórico 2022)."},
 {id:"supercito", n:"Supercito (Chedraui)", sec:"Súper de proximidad", tipos:["local","plaza","bodega"],
  m2:{local:[240,280,400,600]}, frente:8, altura:false, estadosBonus:SURGOLFO.concat(["CDMX","MEX","SLP","TAMPS"]),
  city:{zm:15,grande:14,media:13,pequena:8,micro:3}, zonas:{colonia:9,avenida:9,centro:8,residencial:7,carretera:3,turistica:6},
  nse:{ "C-":4,"C":6,"C+":5,"AB":2 }, rate:[130,210], pea:true, carga:true,
  canal:{cls:"a",lbl:"Inmobiliaria Chedraui",href:"https://www.grupochedraui.com.mx",go:"Contactar Inmobiliaria Chedraui"},
  acc:"130 Supercitos de ~300 m² por año. Ofrécelo vía el formulario de Inmobiliaria Chedraui."},
 {id:"smartfit", n:"Smart Fit", sec:"Gimnasios", tipos:["local","plaza","bodega"],
  m2:{local:[850,1000,1500,2200]}, frente:null, altura:false, maxNiveles:2, parkMin:"6",
  city:{zm:15,grande:14,media:10,pequena:3,micro:0}, zonas:{avenida:10,centro:8,colonia:6,residencial:5,carretera:3,turistica:6},
  nse:{ "C-":2,"C":5,"C+":6,"AB":6 }, rate:[110,190],
  canal:{cls:"aa",lbl:"Portal A+ verificado",href:"https://www.smartfit.com.mx/indica-un-local",go:"Indicar local a Smart Fit"},
  acc:"Formulario pide m², plantas y cajones. ~70 aperturas al año; buscan zonas densas y estacionamiento."},
 {id:"waldos", n:"Waldo's", sec:"Variedades / descuento", tipos:["local","bodega","plaza"],
  m2:{local:[280,350,700,1200]}, frente:null, altura:false,
  city:{zm:11,grande:12,media:14,pequena:15,micro:9}, zonas:{centro:10,colonia:9,avenida:8,residencial:4,carretera:4,turistica:5},
  nse:{ "C-":6,"C":6,"C+":2,"AB":-3 }, rate:[100,180], pea:true,
  canal:{cls:"cd",lbl:"VP Inmobiliario",href:null,go:"Prospectar corporativo Waldo's"},
  acc:"130 aperturas/año, rentable desde 20,000 habitantes: el mejor postor en ciudades pequeñas. Vía waldos.com.mx › Contacto, dirigido al VP de Inmobiliario."},
 {id:"bodegaexp", n:"Bodega Aurrera Express", sec:"Autoservicio · Walmex", tipos:["local","bodega","terreno"],
  m2:{local:[300,380,900,1400], terreno:[600,800,1500,2500]}, frente:null, altura:false,
  city:{zm:15,grande:14,media:13,pequena:10,micro:5}, zonas:{colonia:9,avenida:9,centro:8,residencial:6,carretera:4,turistica:5},
  nse:{ "C-":6,"C":6,"C+":3,"AB":-2 }, rate:[130,220], carga:true,
  canal:{cls:"cd",lbl:"Vía desarrolladores BTS",href:null,go:"Ofrecer vía BTS / corporativo"},
  acc:"Walmex invierte $43,000 MDP en 2026. El camino práctico: desarrolladores build-to-suit aliados o su equipo de bienes raíces."},
 {id:"autozone", n:"AutoZone", sec:"Refacciones", tipos:["terreno","local","bodega"],
  m2:{terreno:[1200,1500,2500,4000], local:[350,450,800,1500]}, frente:null, altura:false, parkReq15:true,
  city:{zm:14,grande:14,media:14,pequena:11,micro:4}, zonas:{avenida:10,carretera:8,colonia:6,centro:6,residencial:3,turistica:3},
  nse:{ "C-":5,"C":6,"C+":5,"AB":3 }, rate:[100,180], veh:true,
  canal:{cls:"a",lbl:"Página oficial + correo",href:"https://www.autozone.com.mx/lp/expansion-de-tiendas",go:"Ver requisitos AutoZone",mail:"expansion@autozone.com"},
  acc:"Más de 900 tiendas y página oficial de expansión: acepta renta o venta. Envía ubicación, precio y contacto a expansion@autozone.com."},
 {id:"six", n:"SIX", sec:"Proximidad · Heineken", tipos:["local","plaza"],
  m2:{local:[45,60,100,160]}, frente:null, altura:false,
  city:{zm:13,grande:13,media:13,pequena:12,micro:8}, zonas:{colonia:10,avenida:8,centro:8,residencial:7,carretera:4,turistica:6},
  nse:{ "C-":6,"C":6,"C+":3,"AB":-2 }, rate:[150,260], pea:true, estadosBonus:NORTE,
  canal:{cls:"a",lbl:"Web oficial",href:"https://www.tiendasix.com.mx/trabaja-con-nosotros",go:"Ofrecer local a SIX"},
  acc:"Heineken paga la renta y equipa la tienda; un empresario la opera. Local chico de alto flujo = su perfil exacto."},
 {id:"modelorama", n:"Modelorama", sec:"Proximidad · G. Modelo", tipos:["local","plaza"],
  m2:{local:[35,45,100,150]}, frente:null, altura:false,
  city:{zm:12,grande:12,media:13,pequena:12,micro:9}, zonas:{colonia:10,centro:8,avenida:7,residencial:7,carretera:4,turistica:6},
  nse:{ "C-":6,"C":6,"C+":2,"AB":-2 }, rate:[140,240], pea:true,
  canal:{cls:"a",lbl:"Formulario oficial",href:"https://www.modelorama.com.mx",go:"Ir a Renta tu local"},
  acc:"Solo rentan locales (no terrenos). Ten a la mano uso de suelo, predial y croquis: lo piden al avanzar."},
 {id:"fguadalajara", n:"Farmacias Guadalajara", sec:"Superfarmacia · Fragua", tipos:["local","terreno"],
  m2:{local:[350,450,800,1200], terreno:[500,600,1200,2000]}, frente:null, altura:false, esquinaBonus:8, parkMin:"6",
  city:{zm:15,grande:14,media:13,pequena:9,micro:3}, zonas:{avenida:10,centro:8,colonia:7,residencial:5,carretera:4,turistica:6},
  nse:{ "C-":4,"C":6,"C+":6,"AB":4 }, rate:[170,300], veh:true,
  canal:{cls:"cd",lbl:"Corporativo Fragua",href:null,go:"Prospectar corporativo (GDL)"},
  acc:"2,944 sucursales y ritmo de ~2 aperturas/semana, pero sin portal público: dossier directo al corporativo en Guadalajara."},
 {id:"fahorro", n:"Farmacias del Ahorro", sec:"Farmacia + consultorio", tipos:["local","plaza"],
  m2:{local:[70,90,250,400]}, frente:null, altura:false,
  city:{zm:14,grande:14,media:13,pequena:10,micro:5}, zonas:{avenida:9,colonia:9,centro:8,residencial:6,carretera:4,turistica:6},
  nse:{ "C-":5,"C":6,"C+":5,"AB":3 }, rate:[170,300], pea:true,
  canal:{cls:"b",lbl:"Correo de expansión",href:null,go:"Enviar dossier por correo",mail:"promolocales@fahorro.com.mx"},
  acc:"~1,800 sucursales, modelo mixto. Envía dossier de 1 página a promolocales@fahorro.com.mx y pide acuse."},
 {id:"similares", n:"F. Similares (franquiciatario)", sec:"Farmacia genéricos", tipos:["local","plaza"],
  m2:{local:[66,80,150,250]}, frente:null, altura:false, minPop:true,
  city:{zm:13,grande:13,media:13,pequena:12,micro:7}, zonas:{colonia:10,centro:9,avenida:8,residencial:7,carretera:3,turistica:5},
  nse:{ "C-":6,"C":6,"C+":3,"AB":-1 }, rate:[150,260], pea:true,
  canal:{cls:"cd",lbl:"Vía franquiciatarios",href:null,go:"Buscar franquiciatario local"},
  acc:"Mínimo 66 m² (norma Cofepris) y sin otra sucursal a 500 m. La vía rápida es el franquiciatario de tu ciudad, no el corporativo."},
 {id:"seven", n:"7-Eleven", sec:"Conveniencia · Iconn", tipos:["local","plaza"],
  m2:{local:[70,90,200,320]}, frente:null, altura:false, estadosBonus:NORTE.concat(["JAL","CDMX","MEX"]),
  city:{zm:14,grande:13,media:11,pequena:7,micro:2}, zonas:{avenida:9,centro:9,colonia:8,residencial:5,carretera:6,turistica:8},
  nse:{ "C-":3,"C":5,"C+":6,"AB":6 }, rate:[190,340], pea:true,
  canal:{cls:"b",lbl:"Tel. Bienes Raíces",href:"https://www.7-eleven.com.mx",tel:"800 83 711 00",go:"Contactar Bienes Raíces 7-Eleven"},
  acc:"La cadena paga la renta del local. Llama al 800-83-711-00 y pide el departamento de Bienes Raíces / Expansión."},
 {id:"caffenio", n:"Caffenio / andatti drive", sec:"Café drive-thru", tipos:["terreno","local"],
  m2:{terreno:[180,220,450,700], local:[120,150,300,500]}, frente:null, altura:false, driveReq:true,
  estados:["SON","BC","BCS","CHIH","COAH","DGO","SIN","NL","SLP","JAL","MICH","GTO","AGS","QROO","NAY","TAMPS","VER"],
  city:{zm:14,grande:14,media:12,pequena:7,micro:2}, zonas:{avenida:10,carretera:7,centro:5,colonia:4,residencial:3,turistica:7},
  nse:{ "C-":1,"C":4,"C+":6,"AB":6 }, rate:[180,320], veh:true,
  canal:{cls:"cd",lbl:"Corporativo",href:"https://caffenio.com",go:"Contactar Caffenio"},
  acc:"~300 drive-thru y expansión a occidente, centro y Golfo (ya opera en Veracruz). Pads sobre avenida con carril vehicular: su formato exacto."},
 {id:"littlec", n:"Little Caesars (franq.)", sec:"Pizza QSR", tipos:["local","plaza"],
  m2:{local:[70,85,150,220]}, frente:null, altura:false,
  city:{zm:14,grande:13,media:12,pequena:9,micro:4}, zonas:{avenida:9,colonia:9,centro:8,residencial:6,carretera:5,turistica:6},
  nse:{ "C-":5,"C":6,"C+":5,"AB":2 }, rate:[160,280], driveBonus:6,
  canal:{cls:"cd",lbl:"Vía franquiciatarios",href:null,go:"Buscar franquiciatario local"},
  acc:"El franquiciatario consigue el local y el corporativo aprueba el sitio. End-caps y esquinas con drive-thru suman puntos."},
 {id:"dominos", n:"Domino's (Alsea)", sec:"Pizza QSR", tipos:["local","plaza"],
  m2:{local:[55,70,130,200]}, frente:null, altura:false,
  city:{zm:15,grande:14,media:12,pequena:8,micro:3}, zonas:{avenida:9,colonia:9,centro:8,residencial:6,carretera:4,turistica:7},
  nse:{ "C-":4,"C":6,"C+":6,"AB":4 }, rate:[180,320], vehOrPea:true,
  canal:{cls:"cd",lbl:"Desarrollo Alsea",href:"https://www.alsea.net",go:"Contactar desarrollo Alsea"},
  acc:"983 unidades y la marca de Alsea que más abre. Locales chicos con buen acceso para reparto."},
 {id:"starbucks", n:"Starbucks (Alsea)", sec:"Cafeterías", tipos:["local","plaza","terreno"],
  m2:{local:[90,120,250,400], terreno:[300,350,600,900]}, frente:null, altura:false, esquinaBonus:7, driveBonus:8,
  city:{zm:15,grande:13,media:9,pequena:3,micro:0}, zonas:{avenida:10,centro:8,turistica:9,colonia:4,residencial:5,carretera:5},
  nse:{ "C-":-4,"C":2,"C+":6,"AB":8 }, rate:[280,520],
  canal:{cls:"cd",lbl:"Desarrollo Alsea",href:"https://www.alsea.net",go:"Contactar desarrollo Alsea"},
  acc:"Meta de 1,000 unidades en México; en 2026 priorizan esquinas AAA y drive-thru. Zonas C+/AB de alto perfil."},
 {id:"coppel", n:"Coppel", sec:"Departamental de crédito", tipos:["local","bodega","terreno"],
  m2:{local:[700,900,2000,3500], terreno:[1200,1500,3000,6000]}, frente:null, altura:false,
  city:{zm:13,grande:14,media:14,pequena:10,micro:4}, zonas:{centro:10,avenida:9,colonia:7,residencial:3,carretera:3,turistica:4},
  nse:{ "C-":6,"C":6,"C+":3,"AB":-2 }, rate:[90,160], pea:true,
  canal:{cls:"cd",lbl:"Corporativo",href:null,go:"Prospectar corporativo Coppel"},
  acc:"Meta oficial: 2,000 tiendas al cierre de 2026 (+80 aperturas y ~100 remodelaciones). Centros de ciudad y avenidas."},
 {id:"oxxogas", n:"OXXO Gas", sec:"Gasolineras · FEMSA", tipos:["terreno"],
  m2:{terreno:[700,900,2000,4000]}, frente:null, altura:false,
  city:{zm:13,grande:13,media:13,pequena:11,micro:6}, zonas:{avenida:10,carretera:10,colonia:3,centro:2,residencial:1,turistica:5},
  nse:{ "C-":5,"C":5,"C+":5,"AB":4 }, rate:[60,140], veh:true,
  canal:{cls:"a",lbl:"Formulario oficial",href:"https://oxxogas.com/articulo/inmuebles",go:"Ofrecer a OXXO Gas"},
  acc:"Renta o compra terrenos y estaciones existentes. Avenidas y carreteras de alto aforo."},
 {id:"heb", n:"H-E-B", sec:"Supermercado premium", tipos:["terreno"],
  m2:{terreno:[15000,20000,45000,80000]}, frente:null, altura:false, estados:["NL","TAMPS","COAH","CHIH","SLP","GTO","QRO","MEX","CDMX"],
  city:{zm:15,grande:13,media:7,pequena:1,micro:0}, zonas:{avenida:10,carretera:7,centro:4,colonia:3,residencial:4,turistica:3},
  nse:{ "C-":-2,"C":3,"C+":6,"AB":7 }, rate:[45,90], veh:true,
  canal:{cls:"cd",lbl:"Corporativo MTY",href:null,go:"Prospectar corporativo H-E-B"},
  acc:"86 tiendas en norte y Bajío; pocas operaciones al año pero de alto valor. Solo macro-lotes premium."},

 {id:"mcd", n:"McDonald's (Arcos Dorados)", sec:"QSR hamburguesas", tipos:["terreno","local","plaza"],
  m2:{terreno:[800,1000,2500,5000], local:[150,200,450,700]}, frente:null, altura:false, driveBonus:10, esquinaBonus:7,
  city:{zm:15,grande:14,media:11,pequena:5,micro:0}, zonas:{avenida:10,carretera:7,centro:8,colonia:5,residencial:4,turistica:8},
  nse:{ "C-":2,"C":5,"C+":6,"AB":6 }, rate:[200,380], veh:true,
  canal:{cls:"aa",lbl:"Portal Real Estate oficial",href:"https://www.arcosdorados.com/real-estate/",go:"Postular terreno a McDonald's"},
  acc:"Portal lanzado en agosto 2026: postula ubicación, superficie, fotos y documentos. Priorizan formato Auto-Mac (drive-thru). ~380 restaurantes en México."},
 {id:"bk", n:"Burger King (Alsea)", sec:"QSR hamburguesas", tipos:["terreno","local","plaza"],
  m2:{terreno:[130,140,200,350], local:[90,120,250,400]}, frente:null, altura:false, driveBonus:8, parkMin:"6",
  city:{zm:14,grande:13,media:10,pequena:5,micro:1}, zonas:{avenida:10,centro:8,colonia:6,residencial:4,carretera:6,turistica:7},
  nse:{ "C-":3,"C":6,"C+":5,"AB":3 }, rate:[190,340], veh:true,
  canal:{cls:"cd",lbl:"Desarrollo Alsea",href:"https://www.alsea.net",go:"Contactar desarrollo Alsea"},
  acc:"Terrenos de 140–180 m² con 6+ cajones para free-standing con drive-thru. Red estable (171 uds): crecimiento selectivo."},
 {id:"pollofeliz", n:"El Pollo Feliz", sec:"Pollo asado", tipos:["local","terreno","plaza"],
  m2:{local:[70,90,250,400], terreno:[150,200,400,600]}, frente:null, altura:false, esquinaBonus:7, driveBonus:5,
  city:{zm:13,grande:13,media:14,pequena:13,micro:8}, zonas:{avenida:10,colonia:9,centro:8,residencial:6,carretera:6,turistica:6},
  nse:{ "C-":6,"C":6,"C+":3,"AB":0 }, rate:[140,250], veh:true,
  canal:{cls:"cd",lbl:"Operadores regionales",href:null,go:"Contactar operador regional"},
  acc:"Entre 700 y 1,500 sucursales según la fuente: la red de pollo asado más grande del país. Esquinas con paso vehicular son su sitio clásico."},
 {id:"polloperez", n:"Pollo Pérez", sec:"Pollo frito · emergente", tipos:["local","plaza"],
  m2:{local:[55,70,150,260]}, frente:null, altura:false, estadosBonus:["VER","CHIS","OAX","TAB","PUE","CDMX","MEX","QROO","YUC","CAM"],
  city:{zm:13,grande:13,media:14,pequena:12,micro:7}, zonas:{colonia:10,centro:9,avenida:9,residencial:6,carretera:4,turistica:6},
  nse:{ "C-":6,"C":6,"C+":2,"AB":-1 }, rate:[140,250], pea:true,
  canal:{cls:"b",lbl:"Franquicias activas",href:null,go:"Contactar franquicias Pollo Pérez"},
  acc:"Cadena emergente de alto crecimiento: ~250 sucursales (2025) con meta de 500 en 2029. Origen Veracruz, franquicia muy activa en sur-golfo-centro."},
 {id:"polloloco", n:"El Pollo Loco (MX)", sec:"Pollo a la parrilla", tipos:["local","plaza"],
  m2:{local:[110,140,300,500]}, frente:null, altura:false, estados:["COAH","MICH","NL","SIN","TAMPS","CDMX"], driveBonus:6, esquinaBonus:5,
  city:{zm:13,grande:13,media:11,pequena:6,micro:1}, zonas:{avenida:10,centro:7,colonia:7,residencial:4,carretera:6,turistica:5},
  nse:{ "C-":4,"C":6,"C+":4,"AB":1 }, rate:[150,270], veh:true,
  canal:{cls:"cd",lbl:"Corporativo (San Pedro, NL)",href:null,go:"Prospectar corporativo"},
  acc:"Cadena familiar sinaloense con sede en NL. Red pública documentada con antigüedad (52 uds, 2017): confirmar apetito actual antes de invertir tiempo."},
 {id:"pollolenero", n:"Pollo Leñero", sec:"Pollo asado · regional", tipos:["local","plaza"],
  m2:{local:[55,70,160,280]}, frente:null, altura:false, esquinaBonus:5,
  city:{zm:11,grande:12,media:12,pequena:11,micro:7}, zonas:{colonia:9,avenida:8,centro:8,residencial:6,carretera:5,turistica:4},
  nse:{ "C-":6,"C":5,"C+":2,"AB":-1 }, rate:[130,230], pea:true,
  canal:{cls:"cd",lbl:"Datos por verificar",href:null,go:"Verificación de campo DEVERI"},
  acc:"Cadena regional de pollo asado registrada a petición de DEVERI: sin información pública verificable localizada. Confirmar operador y apetito en campo."},
 {id:"sirloin", n:"Sirloin Stockade", sec:"Buffet familiar", tipos:["local","plaza"],
  m2:{local:[550,700,1400,2000]}, frente:null, altura:false, parkMin:"6",
  city:{zm:14,grande:13,media:9,pequena:2,micro:0}, zonas:{avenida:9,centro:7,colonia:5,residencial:3,carretera:5,turistica:8},
  nse:{ "C-":2,"C":6,"C+":6,"AB":3 }, rate:[110,200],
  canal:{cls:"cd",lbl:"Franquiciatarios regionales",href:"https://www.sirloin.mx",go:"Contactar operador regional"},
  acc:"Buffet de formato grande operado por franquiciatarios regionales (MTY, CDMX, Bajío, destinos turísticos). Subanclas de plaza con estacionamiento."},

 {id:"cielito", n:"Cielito Querido Café (G. Nutrisa)", sec:"Cafeterías", tipos:["local","plaza"],
  m2:{local:[60,80,180,280]}, frente:null, altura:false, esquinaBonus:6,
  city:{zm:15,grande:13,media:9,pequena:3,micro:0}, zonas:{avenida:10,centro:9,turistica:8,colonia:5,residencial:4,carretera:2},
  nse:{ "C-":-2,"C":3,"C+":6,"AB":7 }, rate:[250,450], pea:true,
  canal:{cls:"b",lbl:"Grupo Nutrisa (BMV)",href:"https://www.gruponutrisa.mx",go:"Contactar Grupo Nutrisa"},
  acc:"93 unidades y plan del grupo de hasta 60 aperturas/año entre sus 4 marcas (150 MDP anuales a 2030). Foco: QRO, Puebla, Veracruz, norte y Valle de México."},
 {id:"nutrisamoyo", n:"Nutrisa · Moyo · Chilim Balam (G. Nutrisa)", sec:"Helado, yogurt y dulces — formatos de plaza", tipos:["plaza","local"],
  m2:{plaza:[15,30,70,120], local:[25,40,90,150]}, frente:null, altura:false,
  city:{zm:15,grande:13,media:10,pequena:4,micro:0}, zonas:{avenida:7,centro:8,turistica:9,colonia:5,residencial:4,carretera:2},
  nse:{ "C-":1,"C":5,"C+":6,"AB":6 }, rate:[300,600], pea:true,
  canal:{cls:"b",lbl:"Grupo Nutrisa (BMV)",href:"https://www.gruponutrisa.mx",go:"Contactar Grupo Nutrisa"},
  acc:"570 puntos entre las 3 marcas (378 Nutrisa, 92 Moyo, 100 Chilim Balam): locales chicos e islas, sobre todo en centros comerciales. 10–15 aperturas por marca al año, con franquicias."},
 {id:"sevenclean", n:"7clean (tintorerías)", sec:"Servicios — tintorería premium", tipos:["local","plaza"],
  m2:{local:[35,50,110,180]}, frente:null, altura:false, estadosBonus:["CDMX","MEX","QRO","HGO","SLP","CHIH","PUE","AGS","QROO","BCS","BC"],
  city:{zm:15,grande:13,media:9,pequena:3,micro:0}, zonas:{avenida:9,colonia:7,centro:7,residencial:8,carretera:2,turistica:7},
  nse:{ "C-":-3,"C":2,"C+":6,"AB":8 }, rate:[200,380], pea:true,
  canal:{cls:"b",lbl:"Correo verificado",href:"https://www.7clean.mx/franquicias",mail:"franquicias@7clean.mx",tel:"55 5683 7339",go:"Escribir a 7clean"},
  acc:"27+ sucursales en 11 entidades y expansión declarada al interior (Tijuana próximamente). Zonas residenciales C+/AB y plazas de servicios; franquicias 7clean, 7wash y 7shoes."},
 {id:"farmatuya", n:"Farmatuya", sec:"Farmacia — micro-red en franquicia", tipos:["local","plaza"],
  m2:{local:[20,30,60,120]}, frente:null, altura:false,
  city:{zm:13,grande:12,media:12,pequena:10,micro:6}, zonas:{colonia:10,centro:8,avenida:8,residencial:7,carretera:3,turistica:4},
  nse:{ "C-":5,"C":6,"C+":4,"AB":1 }, rate:[160,280], pea:true,
  canal:{cls:"b",lbl:"Formulario oficial",href:"https://ga.farmatuya.com.mx/",go:"Contactar Farmatuya"},
  acc:"Red joven (~14 franquicias, dato 2023) con modelo llave en mano desde 20 m² y requisito de 150–200 peatones/hora. La demanda del local viene del franquiciatario."},
 {id:"finca", n:"Finca Santa VeraCruz", sec:"Barras de café", tipos:["local","plaza"],
  m2:{local:[9,20,60,100], plaza:[9,15,40,80]}, frente:null, altura:false,
  city:{zm:14,grande:13,media:11,pequena:6,micro:2}, zonas:{avenida:9,centro:9,colonia:6,residencial:5,carretera:3,turistica:7},
  nse:{ "C-":2,"C":6,"C+":6,"AB":4 }, rate:[220,420], pea:true,
  canal:{cls:"b",lbl:"Correo y tel. oficiales (AMF)",href:"https://finca.com.mx/franquicias/",mail:"ventas@finca.com.mx",tel:"55 5219 8342",go:"Contactar Finca"},
  acc:"~120 puntos (26 propios + 94 franquiciados). Modelos desde 9 m² (isla) hasta 80 m² (local): avenidas, esquinas, plazas, hospitales y corporativos."},
 {id:"donjusto", n:"Cafeterías Don Justo", sec:"Cafeterías — regional Veracruz", tipos:["local","plaza"],
  m2:{local:[40,60,120,200]}, frente:null, altura:false, estadosBonus:["VER","PUE","CDMX","OAX"],
  city:{zm:12,grande:12,media:12,pequena:8,micro:3}, zonas:{centro:10,avenida:8,colonia:6,residencial:5,carretera:3,turistica:8},
  nse:{ "C-":1,"C":5,"C+":6,"AB":5 }, rate:[180,320], pea:true,
  canal:{cls:"b",lbl:"Formulario de franquicias",href:"https://cafeteriasdonjusto.com/franquicias/",go:"Contactar Don Justo"},
  acc:"Marca cafetalera de Coatepec (desde 1891) en expansión por franquicia. Red actual concentrada en Veracruz; unidades totales no publicadas."},
 {id:"calufe", n:"Calufe", sec:"Boutique de café — regional Córdoba, Ver.", tipos:["local","plaza"],
  m2:{local:[30,45,100,160]}, frente:null, altura:false, estadosBonus:["VER","PUE","OAX","TAB"],
  city:{zm:11,grande:11,media:12,pequena:9,micro:4}, zonas:{centro:10,avenida:8,colonia:6,residencial:5,carretera:3,turistica:7},
  nse:{ "C-":2,"C":6,"C+":5,"AB":3 }, rate:[160,300], pea:true,
  canal:{cls:"cd",lbl:"Corporativo (Al Cafeci)",href:"https://calufe.com",go:"Contactar Calufe"},
  acc:"Grupo cafetalero de Córdoba, Veracruz (Al Cafeci S.A. de C.V.), franquicia miembro de la AMF. Unidades totales no publicadas: confirmar apetito por plaza."},
 {id:"aguainm", n:"Agua Inmaculada (franquiciatarios)", sec:"Purificadoras de agua", tipos:["local"],
  m2:{local:[25,30,60,120]}, frente:null, altura:false,
  city:{zm:13,grande:13,media:13,pequena:13,micro:10}, zonas:{colonia:10,residencial:8,centro:7,avenida:7,carretera:4,turistica:4},
  nse:{ "C-":6,"C":6,"C+":2,"AB":-2 }, rate:[100,200], pea:true,
  canal:{cls:"b",lbl:"Formulario oficial",href:"https://www.aguainmaculada.com",go:"Contactar Agua Inmaculada"},
  acc:"1,820 sucursales franquiciadas (2024; solo 1 propia) y red histórica de miles de franquiciatarios. Local mínimo ~30 m² en colonia: la demanda la ejerce el franquiciatario, no el corporativo."},
 {id:"aquaclyva", n:"Aqua+ by AQUAClyva", sec:"Tiendas de agua y vending", tipos:["local","plaza"],
  m2:{local:[4,10,30,60]}, frente:null, altura:false,
  city:{zm:13,grande:12,media:12,pequena:12,micro:9}, zonas:{colonia:10,residencial:8,centro:7,avenida:7,carretera:4,turistica:4},
  nse:{ "C-":6,"C":6,"C+":3,"AB":-1 }, rate:[100,220], pea:true,
  canal:{cls:"b",lbl:"Corporativo AMF (CDMX)",href:"https://aquaclyva.mx",go:"Contactar AQUAClyva"},
  acc:"Grupo con 30 años en purificación (miembro AMF): tiendas de agua y vending desde 4 m². Las cifras de red varían por fuente (19 tiendas modelo vs +2,500 franquicias/equipos): tratar como demanda vía franquiciatarios."},
 {id:"inmchedraui", n:"Inmobiliaria Chedraui", sec:"Desarrollador ancla + plaza", tipos:["terreno"],
  m2:{terreno:[2500,4000,15000,60000]}, frente:null, altura:false,
  city:{zm:14,grande:14,media:13,pequena:8,micro:3}, zonas:{avenida:10,carretera:7,centro:6,colonia:5,residencial:3,turistica:6},
  nse:{ "C-":4,"C":6,"C+":5,"AB":4 }, rate:[40,100], veh:true,
  canal:{cls:"a",lbl:"Formulario en línea",href:"https://www.grupochedraui.com.mx",go:"Contactar Inmobiliaria Chedraui"},
  acc:"Compra o se asocia en terrenos para tienda ancla + plaza comercial (~500,000 m² rentables en portafolio)."}
];

const CATP: Record<string, number> = {"0":0,"1":1,"6":2,"15":3};

export function evalEmp(e: any, state: MatchState): MatchResult {
  const pros: string[] = [], cons: string[] = [];
  // --- reglas duras ---
  if(state.uso==="no") return {out:"Sin uso de suelo comercial"};
  if(!e.tipos.includes(state.tipo)) return {out:`No toma inmuebles tipo «${({local:"local",plaza:"local en plaza",terreno:"terreno",bodega:"bodega"})[state.tipo]}»`};
  if(e.estados && !e.estados.includes(state.estado)) return {out:"Aún no opera en tu estado"};
  const rango = e.m2[state.tipo] || e.m2.local || Object.values(e.m2)[0];
  const [mn,i0,i1,mx] = rango;
  if(state.m2 < mn*0.92) return {out:`Pide mínimo ~${mn.toLocaleString()} m² y tu inmueble tiene ${state.m2.toLocaleString()}`};
  if(state.m2 > mx*1.6) return {out:`Tu superficie (${state.m2.toLocaleString()} m²) excede mucho su formato (~${mx.toLocaleString()} m² máx.)`};
  if(e.driveReq && state.drive!=="si" && state.tipo==="terreno") return {out:"Su formato requiere carril drive-thru"};
  if(e.city[state.citysize]===0) return {out:"No abre en localidades de este tamaño"};

  let sc = 0;
  // superficie (20)
  if(state.m2>=i0 && state.m2<=i1){ sc+=20; pros.push(`Superficie ideal (${i0.toLocaleString()}–${i1.toLocaleString()} m²)`);}
  else if(state.m2>=mn && state.m2<=mx){ sc+=14; pros.push("Superficie dentro de su rango");}
  else if(state.m2<mn){ sc+=6; cons.push(`Ligeramente abajo del mínimo (~${mn.toLocaleString()} m²)`);}
  else { sc+=8; cons.push("Superficie por encima de su formato típico");}
  // frente
  if(e.frente){
    if(state.frente==null){ cons.push(`Confirma frente ≥${e.frente} m (lo piden)`); sc+=2; }
    else if(state.frente>=e.frente){ sc+=6; pros.push(`Frente de ${state.frente} m cumple`); }
    else { sc-=4; cons.push(`Pide frente ≥${e.frente} m y tienes ${state.frente} m`); }
  }
  // altura
  if(e.altura){
    if(state.altura==="alta"){ sc+=3; }
    else if(state.altura==="baja"){ sc-=3; cons.push("Piden altura ≥3.5 m"); }
  }
  // niveles
  if(e.maxNiveles && state.niveles && parseInt(state.niveles)>e.maxNiveles){ sc-=4; cons.push("Prefiere máximo 2 plantas"); }
  // ciudad (0–15)
  sc += e.city[state.citysize]||0;
  if((e.city[state.citysize]||0)>=14) pros.push("Tamaño de ciudad prioritario para la marca");
  if((e.city[state.citysize]||0)<=6 && (e.city[state.citysize]||0)>0) cons.push("Tamaño de ciudad poco prioritario");
  // zona (0–10)
  const zp = state.zona==="endesarrollo" ? (ENDES[e.id]??3) : (e.zonas[state.zona]||3); sc+=zp;
  if(state.zona==="endesarrollo"){
    if(zp>=7) pros.push("Toma posiciones anticipadas en zonas de crecimiento");
    else if(zp<=3) cons.push("Prefiere zonas ya consolidadas con vivienda construida");
  } else {
    if(zp>=9) pros.push("Tipo de vialidad ideal para su formato");
    if(zp<=3) cons.push("Tipo de zona poco compatible");
  }
  // NSE
  const np = e.nse[state.nse]??0; sc+=np;
  if(np>=6) pros.push("NSE de la zona es su mercado objetivo");
  if(np<0) cons.push("NSE de la zona fuera de su perfil");
  // esquina
  if(state.esquina==="si"){ sc += (e.esquinaBonus||4); if((e.esquinaBonus||0)>=7) pros.push("Esquina: alto valor para esta marca"); }
  // estacionamiento
  const pk = CATP[state.cajones]??0;
  if(e.parkReq15){ if(pk>=3||state.tipo==="terreno"){ sc+=5; pros.push("Estacionamiento suficiente (15+)"); } else { sc-=6; cons.push("Local existente requiere 15+ cajones al frente"); } }
  else if(e.parkMin){ if(pk>=2){ sc+=5; pros.push("Buen estacionamiento propio"); } else { sc-=3; cons.push("Poco estacionamiento para su formato"); } }
  else if(pk>=2){ sc+=3; }
  // drive-thru
  if(e.driveReq && state.drive==="si"){ sc+=8; pros.push("Cabe drive-thru: requisito del formato"); }
  if(e.driveBonus && state.drive==="si"){ sc+=e.driveBonus; pros.push("Drive-thru posible: suma mucho"); }
  // flujo
  const lowVeh = state.vveh==="bajo", lowPea = state.vpea==="bajo";
  if(e.pea){ sc += state.vpea==="alto"?7:state.vpea==="medio"?4:-5; if(lowPea) cons.push("Su formato necesita flujo peatonal alto y aquí es bajo"); else if(state.vpea==="alto") pros.push("Alto flujo peatonal"); }
  if(e.veh){ sc += state.vveh==="alto"?7:state.vveh==="medio"?4:-5; if(lowVeh) cons.push("Su formato necesita tráfico vehicular alto y aquí es bajo"); else if(state.vveh==="alto") pros.push("Alto tráfico vehicular"); }
  if(e.vehOrPea){ if(lowVeh&&lowPea){ sc-=6; cons.push("Requiere al menos un tipo de flujo medio o alto"); } else { const b=Math.max(state.vveh==="alto"?6:state.vveh==="medio"?3:0, state.vpea==="alto"?6:state.vpea==="medio"?3:0); sc+=b; } }
  /* Sanidad global: sin tráfico vehicular NI peatonal, ningún retail funciona */
  if(lowVeh && lowPea){ sc-=12; cons.push("Sin flujo vehicular ni peatonal: la causa #1 de rechazo en retail"); }
  // carga
  if(e.carga){ if(state.carga==="si"){ sc+=4; } else { sc-=3; cons.push("Requiere acceso fácil de carga y descarga"); } }
  // generadores
  const g = state.gens.filter((x) => x !== "ninguno").length;
  if(g>0){ sc += Math.min(6, g*2); if(g>=2) pros.push("Buenos generadores de flujo cercanos"); }
  else if(e.pea){ cons.push("Sin generadores de flujo cercanos"); }
  // población mínima (Similares)
  if(e.minPop && state.citysize==="micro"){ sc-=6; cons.push("Piden zona con 12–15 mil habitantes mínimo"); }
  // renta
  if(state.renta && state.m2){
    const f = CITYRENT[state.citysize]||1;
    const maxImp = e.rate[1]*f*state.m2;
    const ratio = state.renta/maxImp;
    if(ratio<=1.05){ sc+=12; pros.push("Renta pedida dentro de su capacidad"); }
    else if(ratio<=1.3){ sc+=4; cons.push("Renta pedida algo arriba de su rango"); }
    else { sc-=10; cons.push(`Renta pedida excede su capacidad (~$${Math.round(maxImp).toLocaleString()}/mes est.)`); }
  } else { sc+=6; }
  // condiciones
  if(state.uso==="si"){ sc+=5; } else { cons.push("Uso de suelo en trámite: resuélvelo antes de firmar"); }
  if(state.papeles==="pend"){ sc-=4; cons.push("Papeles con pendientes: causa común de rechazo"); }
  // bonus regional
  if(e.estadosBonus && e.estadosBonus.includes(state.estado)){ sc+=4; pros.push("Tu estado está en su región prioritaria"); }
  if(e.estados && e.estados.includes(state.estado)){ sc+=4; pros.push("Opera y crece en tu estado"); }

  /* Techos de cordura: con flujo pobre, la probabilidad no puede ser alta por buenos que sean los demás datos */
  let cap = 92;
  if(lowVeh && lowPea) cap = 48;
  else if((e.pea && lowPea) || (e.veh && lowVeh)) cap = 65;
  const pct = Math.max(4, Math.min(cap, Math.round(sc)));
  return { pct, pros:pros.slice(0,4), cons:cons.slice(0,3) };
}

