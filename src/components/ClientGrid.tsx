import { clients } from "@/data/clients";

export default function ClientGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
      {clients.map((c) => (
        <div
          key={c.name}
          className="bg-card border rounded-lg px-6 py-4 flex items-center justify-center min-w-[140px] h-20"
        >
          {c.logo ? (
            <img
              src={c.logo}
              alt={c.name}
              className="max-h-14 max-w-[120px] object-contain"
              loading="lazy"
            />
          ) : (
            <span className="font-semibold text-foreground/60 text-lg">{c.name}</span>
          )}
        </div>
      ))}
    </div>
  );
}
