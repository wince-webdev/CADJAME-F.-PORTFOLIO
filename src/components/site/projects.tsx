import { ExternalLink, Globe, Network, ShieldCheck, Activity, Server, HardDrive } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/reveal";
import { useLanguage } from "@/lib/i18n";

const PROJECT_ICONS = {
  ceph: HardDrive,
  interco: Network,
  detection: ShieldCheck,
  supervision: Activity,
  ad: Server,
  afroassets: Globe,
} as const;

const PROJECT_LINKS: Record<string, string> = {
  afroassets: "https://afroassets.com",
};

export function Projects() {
  const { t } = useLanguage();
  return (
    <section id="realisations" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="05." title={t.projects.sectionTitle} />
      <div className="grid gap-5 md:grid-cols-2">
        {t.projects.items.map((p, i) => {
          const Icon = PROJECT_ICONS[p.key as keyof typeof PROJECT_ICONS] ?? Globe;
          const link = PROJECT_LINKS[p.key];
          return (
            <Reveal key={p.key} delay={i * 80}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_60px_-32px_var(--glow)]">
                <div className="flex items-start gap-3">
                  <span className="rounded-md bg-primary/10 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-0.5 font-mono text-xs text-accent">{p.context}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-primary hover:underline"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> {p.linkLabel ?? t.projects.viewSite}
                  </a>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
