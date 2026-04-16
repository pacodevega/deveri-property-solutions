import { CheckCircle, AlertTriangle, Lightbulb, TrendingUp, Shield, Clock, Target, Zap } from "lucide-react";

/* ── Callout card (tip, warning, insight) ── */
const calloutStyles = {
  tip: { icon: Lightbulb, border: "border-accent/30", bg: "bg-accent/5", iconColor: "text-accent" },
  warning: { icon: AlertTriangle, border: "border-destructive/30", bg: "bg-destructive/5", iconColor: "text-destructive" },
  insight: { icon: TrendingUp, border: "border-primary/30", bg: "bg-primary/5", iconColor: "text-primary" },
};

export function Callout({ type = "tip", title, children }: { type?: "tip" | "warning" | "insight"; title: string; children: React.ReactNode }) {
  const s = calloutStyles[type];
  const Icon = s.icon;
  return (
    <div className={`rounded-2xl border ${s.border} ${s.bg} p-6 md:p-8 my-8`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center ${s.iconColor}`}>
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-bold text-foreground text-lg">{title}</h3>
      </div>
      <div className="text-muted-foreground leading-relaxed pl-[52px]">{children}</div>
    </div>
  );
}

/* ── Stat highlight row ── */
export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-10">
      {stats.map((s, i) => (
        <div key={i} className="text-center p-5 rounded-2xl bg-muted/50 border border-border/50">
          <div className="text-3xl md:text-4xl font-extrabold text-accent mb-1">{s.value}</div>
          <div className="text-sm text-muted-foreground">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Numbered step cards ── */
export function StepCards({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <div className="grid gap-4 my-8">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-5 p-5 md:p-6 rounded-2xl border border-border/50 bg-card hover:border-accent/30 hover:shadow-lg transition-all group">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 text-accent font-extrabold text-xl flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            {i + 1}
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Feature / benefit list with icons ── */
const featureIcons = [CheckCircle, Shield, Target, Zap, Clock, TrendingUp];

export function FeatureList({ items, columns = 1 }: { items: { title: string; description: string }[]; columns?: 1 | 2 }) {
  return (
    <div className={`grid ${columns === 2 ? "md:grid-cols-2" : ""} gap-4 my-8`}>
      {items.map((item, i) => {
        const Icon = featureIcons[i % featureIcons.length];
        return (
          <div key={i} className="flex gap-4 p-5 rounded-xl bg-muted/30 border border-transparent hover:border-accent/20 transition-colors">
            <Icon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold text-foreground">{item.title}</span>
              <span className="text-muted-foreground"> — {item.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Highlight box (key takeaway) ── */
export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-transparent border border-accent/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="relative text-foreground font-medium leading-relaxed text-lg">{children}</div>
    </div>
  );
}

/* ── Comparison table ── */
export function ComparisonTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-8 overflow-x-auto rounded-2xl border border-border/50">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50">
            {headers.map((h, i) => (
              <th key={i} className="text-left p-4 font-bold text-foreground">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border/30">
              {row.map((cell, j) => (
                <td key={j} className={`p-4 ${j === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
