import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle } from "lucide-react";

interface WhatsAppContactFormProps {
  service: string;
  phone?: string;
}

export default function WhatsAppContactForm({ service, phone = "522296840727" }: WhatsAppContactFormProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola, soy ${name.trim()}. Estoy interesado en su servicio de ${service}. ${message.trim()}`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-card border rounded-xl p-8">
      <h2 className="text-2xl font-bold text-foreground mb-2">¿Te interesa este servicio?</h2>
      <p className="text-muted-foreground mb-6">Déjanos tu nombre y mensaje, te contactamos por WhatsApp.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          maxLength={100}
        />
        <Textarea
          placeholder="¿Cómo podemos ayudarte?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          required
          maxLength={500}
        />
        <Button type="submit" variant="cta" className="w-full" size="lg">
          <MessageCircle className="w-5 h-5" /> Enviar por WhatsApp
        </Button>
      </form>
    </div>
  );
}
