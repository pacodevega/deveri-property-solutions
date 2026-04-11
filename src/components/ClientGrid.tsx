import { clients } from "@/data/clients";

export default function ClientGrid() {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
      {clients.map((c) => (
        <div
          key={c.name}
          className={`bg-card border rounded-lg px-6 py-4 flex items-center justify-center ${c.large ? 'min-w-[180px] h-24' : 'min-w-[140px] h-20'}`}
        >
          {c.logo ? (
            <img
              src={c.logo}
              alt={c.name}
              className={`object-contain ${c.large ? 'max-h-20 max-w-[170px]' : 'max-h-16 max-w-[140px]'}`}
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
