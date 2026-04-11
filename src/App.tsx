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
import ComoFunciona from "./pages/ComoFunciona";
import Clientes from "./pages/Clientes";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/servicios/administracion" element={<Administracion />} />
            <Route path="/servicios/renta" element={<Renta />} />
            <Route path="/servicios/mantenimiento" element={<Mantenimiento />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
