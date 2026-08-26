import { useState } from "react";
import { Share2, Check, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

interface SharePropertyButtonProps {
  /** URL to share. Defaults to window.location.href if omitted. */
  url?: string;
  /** Title passed to the native share dialog. */
  title?: string;
  /** Text passed to the native share dialog. */
  text?: string;
  /** Visual variant. */
  variant?: "outline" | "outline-light" | "secondary" | "ghost" | "cta";
  /** Button size. */
  size?: "sm" | "default" | "lg";
  /** Full width on mobile. */
  className?: string;
  /** Optional label text. Defaults to nothing (icon-only) or "Compartir". */
  label?: string;
}

export default function SharePropertyButton({
  url,
  title = "DEVERI — Propiedades en renta",
  text = "Mira esta propiedad disponible con DEVERI:",
  variant = "outline",
  size = "default",
  className = "",
  label,
}: SharePropertyButtonProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  const handleShare = async () => {
    if (!shareUrl) return;

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text,
          url: shareUrl,
        });
        return;
      }
    } catch (err) {
      // User cancelled or share failed — fall through to clipboard.
      if (err instanceof Error && err.name === "AbortError") return;
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Enlace copiado", {
        description: "Ya puedes compartir esta propiedad.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("No se pudo copiar el enlace", {
        description: "Copia la URL directamente desde la barra del navegador.",
      });
    }
  };

  const Icon = copied ? Check : label === undefined ? Share2 : Link2;

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleShare}
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Compartir propiedad"
    >
      <Icon className="w-4 h-4" />
      {label !== undefined ? label : copied ? "Copiado" : "Compartir"}
    </Button>
  );
}
