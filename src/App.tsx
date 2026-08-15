import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import Administracion from "./pages/Administracion";
import Renta from "./pages/Renta";
import Mantenimiento from "./pages/Mantenimiento";
import AdministracionSEO from "./pages/AdministracionSEO";
import RentaSEO from "./pages/RentaSEO";
import MantenimientoSEO from "./pages/MantenimientoSEO";
import ComoFunciona from "./pages/ComoFunciona";
import MCP from "./pages/MCP";

import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import PoliticasPrivacidad from "./pages/PoliticasPrivacidad";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";

// Blog posts
import ComoAdministrar from "./pages/blog/ComoAdministrar";
import ErroresRentarLocal from "./pages/blog/ErroresRentarLocal";
import CuantoCobrarRenta from "./pages/blog/CuantoCobrarRenta";
import InquilinosConfiables from "./pages/blog/InquilinosConfiables";
import ValeLaPena from "./pages/blog/ValeLaPena";
import ProblemasInquilinos from "./pages/blog/ProblemasInquilinos";
import MantenimientoPreventivo from "./pages/blog/MantenimientoPreventivo";
import RentarSinVivirEnVeracruz from "./pages/blog/RentarSinVivirEnVeracruz";
import TiempoParaRentar from "./pages/blog/TiempoParaRentar";
import AumentarValorPropiedad from "./pages/blog/AumentarValorPropiedad";
import TerrenosCarosVeracruz from "./pages/blog/TerrenosCarosVeracruz";
import TerrenosBaratosVeracruz from "./pages/blog/TerrenosBaratosVeracruz";
import RentaBuenaInversion from "./pages/blog/RentaBuenaInversion";
import LimpiezaCisternasTinacos from "./pages/blog/LimpiezaCisternasTinacos";
import Impermeabilizacion from "./pages/blog/Impermeabilizacion";
import ProblemasPlomeria from "./pages/blog/ProblemasPlomeria";
import InstalacionesElectricas from "./pages/blog/InstalacionesElectricas";
import AdministracionCondominios from "./pages/blog/AdministracionCondominios";
import MantenimientoCorrectivo from "./pages/blog/MantenimientoCorrectivo";
import SalitrePrevencion from "./pages/blog/SalitrePrevencion";
import AirbnbVsRentaLargoPlazo from "./pages/blog/AirbnbVsRentaLargoPlazo";
import RentarACadenasNacionales from "./pages/blog/RentarACadenasNacionales";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/administracion" element={<Administracion />} />
            <Route path="/servicios/renta" element={<Renta />} />
            <Route path="/servicios/mantenimiento" element={<Mantenimiento />} />
            <Route path="/administracion-de-propiedades-veracruz" element={<AdministracionSEO />} />
            <Route path="/renta-de-propiedades-veracruz" element={<RentaSEO />} />
            <Route path="/mantenimiento-de-propiedades-veracruz" element={<MantenimientoSEO />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/mcp" element={<MCP />} />
            
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/como-administrar-una-propiedad-en-veracruz" element={<ComoAdministrar />} />
            <Route path="/blog/errores-al-rentar-un-local-comercial-veracruz" element={<ErroresRentarLocal />} />
            <Route path="/blog/cuanto-cobrar-de-renta-en-veracruz" element={<CuantoCobrarRenta />} />
            <Route path="/blog/como-encontrar-inquilinos-confiables" element={<InquilinosConfiables />} />
            <Route path="/blog/administracion-de-propiedades-vale-la-pena" element={<ValeLaPena />} />
            <Route path="/blog/problemas-comunes-con-inquilinos" element={<ProblemasInquilinos />} />
            <Route path="/blog/mantenimiento-preventivo-propiedades" element={<MantenimientoPreventivo />} />
            <Route path="/blog/como-rentar-si-no-vives-en-veracruz" element={<RentarSinVivirEnVeracruz />} />
            <Route path="/blog/tiempo-promedio-para-rentar-propiedad" element={<TiempoParaRentar />} />
            <Route path="/blog/como-aumentar-el-valor-de-una-propiedad-en-renta" element={<AumentarValorPropiedad />} />
            <Route path="/blog/terrenos-mas-caros-veracruz-boca-del-rio" element={<TerrenosCarosVeracruz />} />
            <Route path="/blog/terrenos-mas-baratos-veracruz-boca-del-rio" element={<TerrenosBaratosVeracruz />} />
            <Route path="/blog/renta-buena-inversion" element={<RentaBuenaInversion />} />
            <Route path="/blog/limpieza-de-cisternas-y-tinacos-veracruz" element={<LimpiezaCisternasTinacos />} />
            <Route path="/blog/impermeabilizacion-en-veracruz" element={<Impermeabilizacion />} />
            <Route path="/blog/problemas-de-plomeria-mas-comunes" element={<ProblemasPlomeria />} />
            <Route path="/blog/renovar-instalaciones-electricas-viejas" element={<InstalacionesElectricas />} />
            <Route path="/blog/administracion-de-condominios-areas-comunes" element={<AdministracionCondominios />} />
            <Route path="/blog/mantenimiento-correctivo-propiedades" element={<MantenimientoCorrectivo />} />
            <Route path="/blog/como-eliminar-y-prevenir-salitre" element={<SalitrePrevencion />} />
            <Route path="/blog/airbnb-vs-renta-largo-plazo-veracruz" element={<AirbnbVsRentaLargoPlazo />} />
            <Route path="/blog/rentar-propiedad-a-oxxo-six-cadenas-nacionales" element={<RentarACadenasNacionales />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
            <Route path="/aviso-de-privacidad" element={<PoliticasPrivacidad />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
