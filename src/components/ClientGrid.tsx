import { clients } from "@/data/clients";

export default function ClientGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
      {clients.map((c) => (
        <div
          key={c.name}
          className="bg-card border rounded-lg px-4 py-4 flex items-center justify-center h-24"
        >
          {c.logo ? (
            <img
              src={c.logo}
              alt={c.name}
              className={`object-contain ${
                c.large ? 'max-h-20 max-w-[170px]' :
                c.small ? 'max-h-10 max-w-[100px]' :
                'max-h-14 max-w-[130px]'
              }`}
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
