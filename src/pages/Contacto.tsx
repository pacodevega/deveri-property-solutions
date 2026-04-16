import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Send } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PHONE = "522296840727";

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `Hola, quiero información sobre sus servicios.`,
      ``,
      `*Nombre:* ${nombre}`,
      email && `*Correo:* ${email}`,
      telefono && `*Teléfono:* ${telefono}`,
      servicio && `*Servicio de interés:* ${servicio}`,
      ubicacion && `*Ubicación del inmueble:* ${ubicacion}`,
      mensaje && `*Mensaje:* ${mensaje}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hablemos de tu propiedad</h1>
          <p className="text-lg text-primary-foreground/80">Completa el formulario y te contactamos por WhatsApp con toda tu información.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow max-w-2xl">
          <div className="bg-card border rounded-xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Cuéntanos sobre tu propiedad</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo *</Label>
                <Input id="nombre" placeholder="Tu nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" placeholder="correo@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" type="tel" placeholder="229 000 0000" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Servicio de interés</Label>
                  <Select value={servicio} onValueChange={setServicio}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Administración de propiedades">Administración de propiedades</SelectItem>
                      <SelectItem value="Renta de propiedades">Renta de propiedades</SelectItem>
                      <SelectItem value="Mantenimiento">Mantenimiento</SelectItem>
                      <SelectItem value="Otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ubicacion">Ubicación del inmueble</Label>
                  <Input id="ubicacion" placeholder="Ej. Boca del Río, Col. Centro" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea id="mensaje" placeholder="Cuéntanos más sobre lo que necesitas..." rows={4} value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full">
                <MessageCircle className="w-5 h-5" /> Enviar por WhatsApp
              </Button>
              <p className="text-xs text-muted-foreground text-center">Al enviar, se abrirá WhatsApp con toda tu información para que podamos atenderte de inmediato.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
