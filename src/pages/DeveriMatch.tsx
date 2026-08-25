import { useMemo, useState } from "react";
import { MessageCircle, Printer, RotateCcw, ArrowRight, ArrowLeft, Check, X, MapPin, Ruler, Building2, Coins } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SEOHead from "@/components/SEOHead";
import {
  ESTADOS,
  EMP,
  LABELS,
  cpInfo,
  evalEmp,
  initialState,
  type MatchState,
} from "@/data/deveriMatch";

const WHATSAPP_NUMBER = "5212296840727";

const steps = [
  { id: "intro", name: "Bienvenida" },
  { id: "tipo", name: "Tipo de inmueble" },
  { id: "ubic", name: "Ubicación" },
  { id: "medidas", name: "Medidas" },
  { id: "atrib", name: "Atributos" },
  { id: "entorno", name: "Entorno" },
  { id: "cond", name: "Condiciones" },
  { id: "result", name: "Resultados" },
];

type Opt = { v: string; t: string; s?: string };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "DEVERI Match",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Herramienta gratuita de DEVERI que cruza los datos de tu local o terreno contra los requisitos y planes de expansión de más de 30 cadenas nacionales y franquicias en México.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "MXN" },
  provider: { "@type": "RealEstateAgent", name: "DEVERI" },
};

export default function DeveriMatch() {
  const [cur, setCur] = useState(0);
  const [state, setState] = useState<MatchState>({ ...initialState, gens: [] });
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const [cpAck, setCpAck] = useState(false);

  const set = (patch: Partial<MatchState>) => setState((s) => ({ ...s, ...patch }));
  const step = steps[cur];

  const toggleGen = (v: string) => {
    setState((s) => {
      if (v === "ninguno") return { ...s, gens: s.gens.includes("ninguno") ? [] : ["ninguno"] };
      const next = s.gens.filter((g) => g !== "ninguno");
      return { ...s, gens: next.includes(v) ? next.filter((g) => g !== v) : [...next, v] };
    });
  };

  const OptGrid = ({
    value,
    options,
    onSelect,
    multi = false,
    selected = [],
  }: {
    value?: string | null;
    options: Opt[];
    onSelect: (v: string) => void;
    multi?: boolean;
    selected?: string[];
  }) => (
    <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      {options.map((o) => {
        const isSel = multi ? selected.includes(o.v) : value === o.v;
        return (
          <button
            key={o.v}
            type="button"
            onClick={() => onSelect(o.v)}
            aria-pressed={isSel}
            className={`rounded-xl border-2 px-4 py-3 text-left transition-all ${
              isSel
                ? "border-primary bg-secondary shadow-sm"
                : "border-border bg-card hover:border-primary/60 hover:-translate-y-0.5"
            }`}
          >
            <span className="flex items-start justify-between gap-2">
              <span className="text-sm font-semibold text-foreground">{o.t}</span>
              {isSel && <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />}
            </span>
            {o.s && <span className="mt-1 block text-xs text-muted-foreground">{o.s}</span>}
          </button>
        );
      })}
    </div>
  );

  const Question = ({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) => (
    <div className="mb-7">
      <div className="mb-2.5 flex flex-wrap items-baseline gap-2">
        <h3 className="text-sm font-bold text-foreground">{title}</h3>
        {hint && <span className="text-xs font-medium text-muted-foreground">{hint}</span>}
      </div>
      {children}
    </div>
  );

  /* -------- CP helper -------- */
  const cpHint = useMemo(() => {
    if (!state.cp) return null;
    if (state.cp.length < 5) return { tone: "muted", text: "Escribe los 5 dígitos." };
    const info = cpInfo(state.cp);
    if (!info || info.invalid) return { tone: "bad", text: `El CP ${state.cp} no existe en el catálogo oficial de Correos de México.` };
    const nombre = ESTADOS.find((x) => x[0] === info.estado)?.[1] || info.estado;
    if (state.estado && info.estado !== state.estado)
      return { tone: "bad", text: `Según Correos de México, el CP ${state.cp} pertenece a ${nombre}.` };
    return {
      tone: "ok",
      text: `CP válido · ${nombre}${info.alcaldia ? ` · ${info.alcaldia}` : ""}${info.metro ? " · zona metropolitana" : ""}`,
    };
  }, [state.cp, state.estado]);

  const applyCpAutofill = (cp: string) => {
    const info = cpInfo(cp);
    if (!info || info.invalid) return;
    setState((s) => ({
      ...s,
      cp,
      estado: s.estado || info.estado,
      citysize: !s.citysize && info.metro ? "zm" : s.citysize,
    }));
  };

  /* -------- Validación -------- */
  const validate = (): boolean => {
    const s = step.id;
    const fail = (msg: string) => {
      toast.error(msg);
      return false;
    };
    if (s === "tipo") return state.tipo ? true : fail("Elige el tipo de inmueble para continuar.");
    if (s === "ubic") {
      const inv = { estado: !state.estado, ciudad: !state.ciudad, calle: !state.calle };
      setInvalid(inv);
      if (inv.estado || inv.ciudad || inv.calle) return fail("Completa estado, ciudad y dirección.");
      if (state.cp.length === 5) {
        const info = cpInfo(state.cp);
        const bad = !info || info.invalid || info.estado !== state.estado;
        if (bad && !cpAck) {
          setCpAck(true);
          return fail("Revisa el código postal. Si tu dato es correcto, presiona Siguiente otra vez.");
        }
      }
      if (!state.citysize) return fail("Indica el tamaño de la ciudad.");
      if (!state.zona) return fail("Indica el tipo de zona o vialidad.");
      return true;
    }
    if (s === "medidas") {
      setInvalid({ m2: !state.m2 });
      if (!state.m2) return fail("Indica la superficie en m².");
      if (state.tipo === "terreno") return true;
      if (!state.niveles) return fail("Indica los niveles.");
      if (!state.altura) return fail("Indica la altura libre (o «No lo sé»).");
      return true;
    }
    if (s === "atrib") {
      if (!state.esquina) return fail("Indica si está en esquina.");
      if (state.tipo !== "terreno" && !state.cajones) return fail("Indica los cajones de estacionamiento.");
      if (!state.drive) return fail("Indica si cabe un drive-thru.");
      if (!state.carga) return fail("Indica el acceso de carga y descarga.");
      return true;
    }
    if (s === "entorno") {
      if (!state.vveh) return fail("Indica el tráfico vehicular.");
      if (!state.vpea) return fail("Indica el flujo peatonal.");
      if (!state.nse) return fail("Indica el nivel socioeconómico de la zona.");
      return true;
    }
    if (s === "cond") {
      if (!state.uso) return fail("Indica el uso de suelo.");
      if (!state.papeles) return fail("Indica la situación de escrituras y predial.");
      return true;
    }
    return true;
  };

  const next = () => {
    if (!validate()) return;
    setInvalid({});
    setCur((c) => c + 1);
    window.scrollTo({ top: 0 });
  };
  const back = () => {
    setCur((c) => Math.max(1, c - 1));
    window.scrollTo({ top: 0 });
  };
  const restart = () => {
    setState({ ...initialState, gens: [] });
    setCur(0);
    setCpAck(false);
    window.scrollTo({ top: 0 });
  };

  /* -------- Resultados -------- */
  const evaluation = useMemo(() => {
    if (step.id !== "result") return null;
    const results: any[] = [];
    const excluded: { n: string; why: string }[] = [];
    EMP.forEach((e) => {
      const r = evalEmp(e, state);
      if (r.out) excluded.push({ n: e.n, why: r.out });
      else results.push({ e, ...r });
    });
    results.sort((a, b) => b.pct - a.pct);
    return {
      results,
      excluded,
      fuertes: results.filter((r) => r.pct >= 55),
      posibles: results.filter((r) => r.pct >= 28 && r.pct < 55),
      bajos: results.filter((r) => r.pct < 28),
    };
  }, [step.id, state]);

  const whatsappHref = useMemo(() => {
    if (!evaluation) return "#";
    const eN = ESTADOS.find((x) => x[0] === state.estado)?.[1] || "";
    const ci = state.cp.length === 5 ? cpInfo(state.cp) : null;
    const gens = state.gens.map((g) => LABELS.gen[g]).join(", ") || "—";
    const lines = [
      "*SOLICITUD DE DELEGACIÓN — DEVERI MATCH*",
      "Quiero delegar mi propiedad con DEVERI para encontrar la mejor renta.",
      "",
      "*INMUEBLE*",
      `• Tipo: ${LABELS.tipo[state.tipo || ""] || "-"}`,
      `• Dirección: ${state.calle}, ${state.ciudad}, ${eN}${state.cp ? " · CP " + state.cp : ""}${ci && ci.alcaldia ? " (" + ci.alcaldia + ")" : ""}`,
      `• Zona: ${LABELS.zona[state.zona || ""] || state.zona} · ${LABELS.city[state.citysize || ""] || state.citysize}`,
      `• Superficie: ${state.m2 ? state.m2.toLocaleString() : "-"} m²${state.frente ? " · Frente: " + state.frente + " m" : ""}`,
      state.tipo !== "terreno"
        ? `• Niveles: ${state.niveles || "-"} · Altura: ${state.altura === "alta" ? "≥3.5 m" : state.altura === "baja" ? "<3.5 m" : "por confirmar"}`
        : "• Terreno: construcción a proyectar",
      `• Esquina: ${state.esquina === "si" ? "Sí" : "No"} · Cajones: ${LABELS.caj[state.cajones || ""] || "-"}${state.tipo === "terreno" ? " (proyectados)" : ""}`,
      `• Drive-thru posible: ${state.drive === "si" ? "Sí" : "No"} · Carga/descarga: ${state.carga === "si" ? "Fácil" : "Complicada"}`,
      `• Tráfico vehicular: ${LABELS.fl[state.vveh || ""]} · Flujo peatonal: ${LABELS.fl[state.vpea || ""]} · NSE zona: ${state.nse}`,
      `• Generadores cercanos: ${gens}`,
      `• Renta pedida: ${state.renta ? "$" + state.renta.toLocaleString() + "/mes" : "abierta a propuesta"}`,
      `• Uso de suelo: ${LABELS.uso[state.uso || ""]} · Papeles: ${LABELS.pap[state.papeles || ""]}`,
      "",
      "*TOP PROSPECTOS DETECTADOS*",
      ...evaluation.results.slice(0, 8).map((r, i) => `${i + 1}. ${r.e.n} — ${r.pct}%`),
      "",
      "_Generado con DEVERI Match_",
    ];
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [evaluation, state]);

  const ResultCard = ({ r, i }: { r: any; i: number }) => {
    const c = r.e.canal;
    const href = c.href || (c.mail ? `mailto:${c.mail}` : null);
    return (
      <article className="mb-3.5 rounded-2xl border bg-card p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h4 className="text-base font-bold text-primary">
              {i + 1}. {r.e.n}
            </h4>
            <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{r.e.sec}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-extrabold leading-none text-primary">{r.pct}%</div>
            <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Probabilidad</div>
          </div>
        </div>

        <div className="my-4 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div className="h-2 rounded-full bg-primary transition-all duration-700" style={{ width: `${r.pct}%` }} />
        </div>

        <div className="flex flex-wrap gap-1.5">
          {r.pros.map((p: string) => (
            <span key={p} className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-primary">
              <Check className="h-3 w-3" /> {p}
            </span>
          ))}
          {r.cons.map((p: string) => (
            <span key={p} className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-semibold text-destructive">
              <X className="h-3 w-3" /> {p}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-dashed pt-3.5">
          <span className="rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            {c.lbl}
          </span>
          {c.mail && <span className="text-xs font-semibold text-muted-foreground">✉ {c.mail}</span>}
          {c.tel && <span className="text-xs font-semibold text-muted-foreground">📞 {c.tel}</span>}
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="ml-auto">
              <Button variant="cta" size="sm">
                {c.go} <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          ) : (
            <span className="ml-auto rounded-lg bg-secondary px-3 py-2 text-xs font-bold text-primary">{c.go}</span>
          )}
          <p className="w-full text-xs leading-relaxed text-muted-foreground">{r.e.acc}</p>
        </div>
      </article>
    );
  };

  /* -------- Render de pasos -------- */
  const renderStep = () => {
    switch (step.id) {
      case "intro":
        return (
          <div className="rounded-2xl border bg-card p-7 shadow-sm md:p-10">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.14em] text-accent">
              DEVERI · Inteligencia inmobiliaria
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-primary md:text-4xl">
              Descubre <span className="text-accent">quién puede rentar</span> tu local o terreno
            </h1>
            <p className="mt-4 text-muted-foreground">
              Responde 6 pasos sobre tu inmueble. Cruzamos tus datos contra los requisitos reales y los planes de expansión 2026
              de más de 30 cadenas nacionales y franquicias, y te devolvemos tu lista de prospectos con probabilidad de interés y
              el canal directo para ofrecerlo.
            </p>
            <ul className="my-7 space-y-3">
              {[
                ["Requisitos verificados:", "superficies, frentes y criterios publicados por las propias cadenas (3B, OXXO, Bara, Smart Fit, AutoZone y más)."],
                ["Probabilidad honesta:", "también te decimos quién NO va a tomar tu inmueble y por qué."],
                ["Acción inmediata:", "cada prospecto incluye su portal, correo o teléfono de expansión."],
              ].map(([b, t]) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-primary">
                    <Check className="h-3.5 w-3.5 text-accent" />
                  </span>
                  <span>
                    <strong>{b}</strong> {t}
                  </span>
                </li>
              ))}
            </ul>
            <Button variant="cta" size="lg" onClick={() => setCur(1)}>
              Comenzar evaluación <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              Estudio DEVERI con corte al 24 de agosto de 2026. Tus datos no se envían a ningún servidor: todo se calcula en tu
              navegador.
            </p>
          </div>
        );

      case "tipo":
        return (
          <StepCard num="Paso 1 de 6" title="¿Qué tipo de inmueble tienes?" sub="Cada cadena busca un tipo específico: elige el que mejor describe tu propiedad.">
            <OptGrid
              value={state.tipo}
              onSelect={(v) => set({ tipo: v })}
              options={[
                { v: "local", t: "Local a pie de calle", s: "Frente directo a calle o avenida" },
                { v: "plaza", t: "Local en plaza", s: "Dentro de plaza o centro comercial" },
                { v: "terreno", t: "Terreno", s: "Lote con o sin construcción menor" },
                { v: "bodega", t: "Bodega / nave", s: "Espacio amplio adaptable" },
              ]}
            />
          </StepCard>
        );

      case "ubic":
        return (
          <StepCard num="Paso 2 de 6" title="¿Dónde está ubicado?" sub="La cobertura de cada cadena y la renta que soporta dependen de tu ciudad y zona.">
            <div className="mb-6 grid gap-4 md:grid-cols-3">
              <div>
                <Label htmlFor="estado">Estado *</Label>
                <select
                  id="estado"
                  value={state.estado}
                  onChange={(e) => set({ estado: e.target.value })}
                  className={`mt-1.5 h-11 w-full rounded-lg border bg-background px-3 text-sm ${invalid.estado ? "border-destructive" : "border-input"}`}
                >
                  <option value="">Selecciona…</option>
                  {ESTADOS.map((e) => (
                    <option key={e[0]} value={e[0]}>
                      {e[1]}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="ciudad">Ciudad / municipio *</Label>
                <Input
                  id="ciudad"
                  className={`mt-1.5 ${invalid.ciudad ? "border-destructive" : ""}`}
                  placeholder="Ej. Veracruz"
                  maxLength={80}
                  value={state.ciudad}
                  onChange={(e) => set({ ciudad: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="cp">
                  Código postal <span className="font-normal text-muted-foreground">(opcional)</span>
                </Label>
                <Input
                  id="cp"
                  className="mt-1.5"
                  inputMode="numeric"
                  maxLength={5}
                  placeholder="Ej. 91700"
                  value={state.cp}
                  onChange={(e) => {
                    const cp = e.target.value.replace(/\D/g, "").slice(0, 5);
                    set({ cp });
                    setCpAck(false);
                    if (cp.length === 5) applyCpAutofill(cp);
                  }}
                />
                {cpHint && (
                  <p className={`mt-1.5 text-xs font-semibold ${cpHint.tone === "ok" ? "text-primary" : cpHint.tone === "bad" ? "text-destructive" : "text-muted-foreground"}`}>
                    {cpHint.text}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-7">
              <Label htmlFor="calle">{state.tipo === "terreno" ? "Calle o vialidad *" : "Calle y número *"}</Label>
              <Input
                id="calle"
                className={`mt-1.5 ${invalid.calle ? "border-destructive" : ""}`}
                maxLength={140}
                placeholder={state.tipo === "terreno" ? "Ej. Carretera Veracruz–Medellín km 8" : "Ej. Av. Ruiz Cortines 245"}
                value={state.calle}
                onChange={(e) => set({ calle: e.target.value })}
              />
            </div>

            <Question title="Tamaño de la ciudad" hint="población aproximada">
              <OptGrid
                value={state.citysize}
                onSelect={(v) => set({ citysize: v })}
                options={[
                  { v: "zm", t: "Gran zona metropolitana", s: "CDMX, MTY, GDL" },
                  { v: "grande", t: "Ciudad grande", s: "Más de 500 mil hab." },
                  { v: "media", t: "Ciudad media", s: "100 – 500 mil hab." },
                  { v: "pequena", t: "Ciudad pequeña", s: "20 – 100 mil hab." },
                  { v: "micro", t: "Localidad chica", s: "Menos de 20 mil hab." },
                ]}
              />
            </Question>

            <Question title="¿Sobre qué tipo de vialidad o zona está?">
              <OptGrid
                value={state.zona}
                onSelect={(v) => set({ zona: v })}
                options={[
                  { v: "avenida", t: "Avenida principal", s: "Alto aforo vehicular" },
                  { v: "colonia", t: "Calle comercial de colonia", s: "Comercio de barrio" },
                  { v: "centro", t: "Centro de la ciudad", s: "Zona céntrica peatonal" },
                  { v: "residencial", t: "Zona residencial", s: "Calles habitacionales" },
                  { v: "endesarrollo", t: "Zona en desarrollo", s: "Pocas casas construidas" },
                  { v: "carretera", t: "Carretera o salida", s: "Vialidad de paso" },
                  { v: "turistica", t: "Zona turística", s: "Malecón, playa, hoteles" },
                ]}
              />
            </Question>
          </StepCard>
        );

      case "medidas":
        return (
          <StepCard num="Paso 3 de 6" title="Medidas del inmueble" sub="La superficie y el frente son el primer filtro de todas las cadenas.">
            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="m2">Superficie total (m²) *</Label>
                <Input
                  id="m2"
                  type="number"
                  min={10}
                  className={`mt-1.5 ${invalid.m2 ? "border-destructive" : ""}`}
                  placeholder="Ej. 450"
                  value={state.m2 ?? ""}
                  onChange={(e) => set({ m2: parseFloat(e.target.value) || null })}
                />
              </div>
              <div>
                <Label htmlFor="frente">Frente a la calle (metros)</Label>
                <Input
                  id="frente"
                  type="number"
                  min={1}
                  className="mt-1.5"
                  placeholder="Ej. 12"
                  value={state.frente ?? ""}
                  onChange={(e) => set({ frente: parseFloat(e.target.value) || null })}
                />
              </div>
            </div>

            {state.tipo === "terreno" ? (
              <p className="rounded-xl border border-dashed p-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Es terreno:</strong> niveles y altura no aplican — cada marca proyecta su
                construcción sobre el lote.
              </p>
            ) : (
              <>
                <Question title="Niveles / plantas">
                  <OptGrid
                    value={state.niveles}
                    onSelect={(v) => set({ niveles: v })}
                    options={[
                      { v: "1", t: "1 planta" },
                      { v: "2", t: "2 plantas" },
                      { v: "3", t: "3 o más" },
                    ]}
                  />
                </Question>
                <Question title="Altura libre interior" hint="relevante para bodegas y hard discount">
                  <OptGrid
                    value={state.altura}
                    onSelect={(v) => set({ altura: v })}
                    options={[
                      { v: "alta", t: "3.5 m o más" },
                      { v: "baja", t: "Menos de 3.5 m" },
                      { v: "ns", t: "No lo sé" },
                    ]}
                  />
                </Question>
              </>
            )}
          </StepCard>
        );

      case "atrib": {
        const cajProy = state.m2 ? (state.m2 >= 1200 ? "15 o más" : state.m2 >= 500 ? "~6 a 14" : state.m2 >= 250 ? "~1 a 5" : "muy limitados") : "";
        if (state.tipo === "terreno" && state.m2) {
          const auto = state.m2 >= 1200 ? "15" : state.m2 >= 500 ? "6" : state.m2 >= 250 ? "1" : "0";
          if (state.cajones !== auto) setTimeout(() => set({ cajones: auto }), 0);
        }
        return (
          <StepCard num="Paso 4 de 6" title="Atributos físicos" sub="Esquina, estacionamiento y accesos multiplican tus prospectos.">
            <Question title="¿Está en esquina?">
              <OptGrid
                value={state.esquina}
                onSelect={(v) => set({ esquina: v })}
                options={[
                  { v: "si", t: "Sí, en esquina" },
                  { v: "no", t: "No, a media calle" },
                ]}
              />
            </Question>

            {state.tipo === "terreno" ? (
              <Question title="Cajones de estacionamiento">
                <p className="rounded-xl border border-dashed p-4 text-sm text-muted-foreground">
                  En terreno los cajones <strong className="text-foreground">se construyen según el tamaño del lote</strong>: con
                  tus {state.m2?.toLocaleString()} m² proyectamos <strong className="text-foreground">{cajProy}</strong>. No
                  necesitas responder nada aquí.
                </p>
              </Question>
            ) : (
              <Question title="Cajones de estacionamiento propios">
                <OptGrid
                  value={state.cajones}
                  onSelect={(v) => set({ cajones: v })}
                  options={[
                    { v: "0", t: "Sin cajones" },
                    { v: "1", t: "1 a 5" },
                    { v: "6", t: "6 a 14" },
                    { v: "15", t: "15 o más" },
                  ]}
                />
              </Question>
            )}

            <Question title="¿Cabe un carril drive-thru?" hint="acceso y salida vehicular independientes">
              <OptGrid
                value={state.drive}
                onSelect={(v) => set({ drive: v })}
                options={[
                  { v: "si", t: "Sí es posible" },
                  { v: "no", t: "No" },
                ]}
              />
            </Question>

            <Question title="¿Acceso fácil para carga y descarga?">
              <OptGrid
                value={state.carga}
                onSelect={(v) => set({ carga: v })}
                options={[
                  { v: "si", t: "Sí" },
                  { v: "no", t: "Complicado" },
                ]}
              />
            </Question>
          </StepCard>
        );
      }

      case "entorno":
        return (
          <StepCard num="Paso 5 de 6" title="Entorno y flujo" sub="Las cadenas compran flujo: dinos qué pasa alrededor de tu inmueble.">
            <Question title="Tráfico vehicular frente al inmueble">
              <OptGrid value={state.vveh} onSelect={(v) => set({ vveh: v })} options={[{ v: "alto", t: "Alto" }, { v: "medio", t: "Medio" }, { v: "bajo", t: "Bajo" }]} />
            </Question>
            <Question title="Flujo peatonal">
              <OptGrid value={state.vpea} onSelect={(v) => set({ vpea: v })} options={[{ v: "alto", t: "Alto" }, { v: "medio", t: "Medio" }, { v: "bajo", t: "Bajo" }]} />
            </Question>
            <Question title="Nivel socioeconómico predominante de la zona">
              <OptGrid
                value={state.nse}
                onSelect={(v) => set({ nse: v })}
                options={[
                  { v: "C-", t: "Popular (C-/D)" },
                  { v: "C", t: "Medio (C)" },
                  { v: "C+", t: "Medio alto (C+)" },
                  { v: "AB", t: "Alto (A/B)" },
                ]}
              />
            </Question>
            <Question title="Generadores de flujo a menos de 500 m" hint="elige todos los que apliquen">
              <OptGrid
                multi
                selected={state.gens}
                onSelect={toggleGen}
                options={[
                  { v: "mercado", t: "Mercado / tianguis" },
                  { v: "escuela", t: "Escuelas" },
                  { v: "hospital", t: "Hospital / clínicas" },
                  { v: "transporte", t: "Transporte público" },
                  { v: "oficinas", t: "Oficinas / industria" },
                  { v: "ninguno", t: "Ninguno" },
                ]}
              />
            </Question>
          </StepCard>
        );

      case "cond":
        return (
          <StepCard num="Paso 6 de 6" title="Condiciones y expectativa" sub="Última parte: renta pedida y situación legal.">
            <div className="mb-6 md:w-1/2">
              <Label htmlFor="renta">
                Renta mensual que pides (MXN) <span className="font-normal text-muted-foreground">(opcional)</span>
              </Label>
              <Input
                id="renta"
                type="number"
                min={0}
                className="mt-1.5"
                placeholder="Ej. 65000"
                value={state.renta ?? ""}
                onChange={(e) => set({ renta: parseFloat(e.target.value) || null })}
              />
            </div>
            <Question title="Uso de suelo comercial">
              <OptGrid
                value={state.uso}
                onSelect={(v) => set({ uso: v })}
                options={[
                  { v: "si", t: "Sí, vigente" },
                  { v: "tramite", t: "En trámite / factible" },
                  { v: "no", t: "No / habitacional" },
                ]}
              />
            </Question>
            <Question title="Escrituras y predial en regla">
              <OptGrid
                value={state.papeles}
                onSelect={(v) => set({ papeles: v })}
                options={[
                  { v: "si", t: "Todo en regla" },
                  { v: "pend", t: "Con pendientes" },
                ]}
              />
            </Question>
          </StepCard>
        );

      case "result": {
        if (!evaluation) return null;
        const eN = ESTADOS.find((x) => x[0] === state.estado)?.[1] || "";
        const { fuertes, posibles, bajos, excluded } = evaluation;
        return (
          <div>
            <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 rounded-2xl bg-primary px-6 py-5 text-sm text-primary-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <strong>{state.calle}</strong> — {state.ciudad}, {eN}
                {state.cp && ` · CP ${state.cp}`}
              </span>
              <span className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-accent" /> {LABELS.tipo[state.tipo || ""]}
              </span>
              <span className="flex items-center gap-2">
                <Ruler className="h-4 w-4 text-accent" /> <strong>{state.m2?.toLocaleString()} m²</strong>
                {state.frente ? ` · frente ${state.frente} m` : ""}
              </span>
              {state.renta && (
                <span className="flex items-center gap-2">
                  <Coins className="h-4 w-4 text-accent" /> Renta pedida: <strong>${state.renta.toLocaleString()}/mes</strong>
                </span>
              )}
              <span>{state.esquina === "si" ? "✔ Esquina" : "— Media calle"}</span>
            </div>

            <h1 className="mb-5 text-2xl font-extrabold text-primary">Tus prospectos DEVERI Match</h1>

            {state.tipo === "terreno" && (
              <p className="mb-5 rounded-xl border p-4 text-sm text-muted-foreground">
                <strong className="text-foreground">Filtro aplicado:</strong> solo se muestran marcas que sí rentan o compran
                terrenos. Las que solo toman locales construidos aparecen abajo en descartados.
              </p>
            )}

            {fuertes.length > 0 && (
              <>
                <h2 className="mb-3.5 mt-7 text-lg font-bold text-primary">🎯 Prospectos fuertes — contáctalos hoy ({fuertes.length})</h2>
                {fuertes.map((r, i) => (
                  <ResultCard key={r.e.id} r={r} i={i} />
                ))}
              </>
            )}
            {posibles.length > 0 && (
              <>
                <h2 className="mb-3.5 mt-7 text-lg font-bold text-primary">🔎 Prospectos posibles — vale la pena intentar ({posibles.length})</h2>
                {posibles.map((r, i) => (
                  <ResultCard key={r.e.id} r={r} i={fuertes.length + i} />
                ))}
              </>
            )}
            {bajos.length > 0 && (
              <>
                <h2 className="mb-3.5 mt-7 text-lg font-bold text-primary">🌥 Probabilidad baja ({bajos.length})</h2>
                {bajos.map((r, i) => (
                  <ResultCard key={r.e.id} r={r} i={fuertes.length + posibles.length + i} />
                ))}
              </>
            )}

            <section className="rounded-2xl bg-primary p-8 text-center text-primary-foreground">
              <h2 className="text-xl font-extrabold">
                ¿Quieres que <span className="text-accent">DEVERI</span> lo haga por ti?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed opacity-90">
                Delega tu propiedad con nosotros: cargamos tu inmueble en los portales verificados, preparamos el dossier
                profesional, contactamos a las cadenas compatibles y negociamos para conseguirte la mejor renta posible.
              </p>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block">
                <Button variant="cta" size="lg">
                  <MessageCircle className="h-5 w-5" /> Delegar mi propiedad con DEVERI
                </Button>
              </a>
              <p className="mt-3 text-xs opacity-75">
                Se abrirá WhatsApp con toda la información de tu propiedad lista para enviar al equipo DEVERI.
              </p>
            </section>

            {excluded.length > 0 && (
              <>
                <h2 className="mb-3.5 mt-7 text-lg font-bold text-primary">🚫 Descartados para tu inmueble — y por qué</h2>
                <div className="space-y-2">
                  {excluded.map((x) => (
                    <p key={x.n} className="rounded-xl border border-dashed px-4 py-3 text-sm text-muted-foreground">
                      <strong className="text-foreground">{x.n}:</strong> {x.why}.
                    </p>
                  ))}
                </div>
              </>
            )}

            <p className="mt-4 rounded-xl border px-4 py-3 text-sm text-muted-foreground">
              <strong className="text-foreground">Fuera de prospección hoy (mercado):</strong> Farmacias YZA/Moderna, Soriana,
              Benavides y Elektra (maduras o en ajuste de red, sin expansión documentada).
            </p>


            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="outline" onClick={restart}>
                <RotateCcw className="h-4 w-4" /> Evaluar otro inmueble
              </Button>
              <Button variant="outline" onClick={() => window.print()}>
                <Printer className="h-4 w-4" /> Imprimir / guardar PDF
              </Button>
            </div>

            <p className="mt-7 border-t pt-4 text-xs leading-relaxed text-muted-foreground">
              Estimación orientativa generada por el modelo Match de DEVERI a partir de su estudio de inteligencia inmobiliaria
              con corte al 24 de agosto de 2026 (requisitos publicados, planes de expansión y rangos de renta de mercado). La
              probabilidad no constituye una oferta ni garantiza respuesta de las cadenas. Las rentas de referencia son
              estimaciones de mercado, no tarifas oficiales. La detección de entidad, alcaldía y zona metropolitana a partir del
              código postal se basa en la estructura oficial del Servicio Postal Mexicano.
            </p>
          </div>
        );
      }
      default:
        return null;
    }
  };

  const showRail = step.id !== "intro";
  const showNav = step.id !== "intro" && step.id !== "result";
  const progress = ((Math.max(0, cur - 1)) / (steps.length - 2)) * 100;

  return (
    <>
      <SEOHead
        title="DEVERI Match | ¿Qué cadena puede rentar tu local o terreno?"
        description="Evalúa gratis tu local, terreno o bodega y descubre qué cadenas nacionales y franquicias en expansión hacen match con tu propiedad. Resultado inmediato y contacto directo."
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-[hsl(var(--section-light))] pb-28">
        {showRail && (
          <div className="sticky top-16 z-30 border-b bg-background/95 backdrop-blur">
            <div className="mx-auto max-w-3xl px-4 py-3">
              <div className="mb-2 flex justify-between text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                <span>{step.name}</span>
                <span>{cur < steps.length - 1 ? `Paso ${cur} de 6` : "Resultados"}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div className="h-1.5 rounded-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        )}

        <main className="mx-auto max-w-3xl px-4 py-8">{renderStep()}</main>

        {showNav && (
          <div className="fixed bottom-0 left-0 right-0 z-40 border-t bg-background">
            <div className="mx-auto flex max-w-3xl justify-between gap-3 px-4 py-3">
              <Button variant="outline" onClick={back} className={cur <= 1 ? "invisible" : ""}>
                <ArrowLeft className="h-4 w-4" /> Atrás
              </Button>
              <Button variant="cta" onClick={next}>
                {cur === steps.length - 2 ? "Ver mis prospectos" : "Siguiente"} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function StepCard({ num, title, sub, children }: { num: string; title: string; sub: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm md:p-9">
      <p className="mb-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-accent">{num}</p>
      <h1 className="text-2xl font-extrabold leading-tight text-primary">{title}</h1>
      <p className="mb-6 mt-2 text-sm leading-relaxed text-muted-foreground">{sub}</p>
      {children}
    </section>
  );
}
