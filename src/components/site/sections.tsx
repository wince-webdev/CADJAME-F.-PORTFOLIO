import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Network,
  Server,
  MonitorCog,
  ShieldCheck,
  Languages,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  Send,
} from "lucide-react";
import { Reveal, SectionTitle } from "@/components/reveal";
import { CV_URL, LINKEDIN_URL, WHATSAPP_URL, WhatsAppIcon } from "./hero";
import { useLanguage } from "@/lib/i18n";

const SKILL_ICONS = {
  systemes: Server,
  reseau: Network,
  virtualisation: MonitorCog,
  cybersecurite: ShieldCheck,
} as const;

export function About() {
  const { t } = useLanguage();
  return (
    <section id="apropos" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="01." title={t.about.sectionTitle} />
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <p className="text-base leading-relaxed text-muted-foreground">{t.about.paragraph}</p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="rounded-lg border border-border bg-card p-5 font-mono text-sm">
            {t.about.info.map(([k, v]) => (
              <li
                key={k}
                className="flex justify-between gap-4 border-b border-border/60 py-2 last:border-0"
              >
                <span className="text-muted-foreground">{k}</span>
                <span className="text-primary">{v}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Experiences() {
  const { t } = useLanguage();
  return (
    <section id="experiences" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="02." title={t.experiences.sectionTitle} />
      <div className="relative border-l border-border pl-6 sm:pl-10">
        {t.experiences.items.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 90} className="relative mb-8 last:mb-0">
            <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-primary bg-background sm:-left-[47px]" />
            <article className="group rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_60px_-32px_var(--glow)]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  <Briefcase className="mr-2 inline h-4 w-4 text-primary" />
                  {exp.role}
                </h3>
                <span className="font-mono text-xs text-accent">{exp.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{exp.company}</p>
              <ul className="mt-4 space-y-2.5">
                {exp.groups.map((g) => (
                  <li key={g.label} className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-mono text-xs text-primary">{g.label} › </span>
                    {g.items}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Formations() {
  const { t } = useLanguage();
  return (
    <section id="formations" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="03." title={t.formations.sectionTitle} />
      <div className="grid gap-5 md:grid-cols-2">
        {t.formations.items.map((f, i) => (
          <Reveal key={f.title} delay={i * 90}>
            <article className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/40">
              <GraduationCap className="h-5 w-5 text-accent" />
              <h3 className="mt-3 text-base font-semibold leading-snug">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.school}</p>
              <p className="mt-1 font-mono text-xs text-primary">{f.period}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.detail}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  const { t } = useLanguage();
  return (
    <section id="competences" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="04." title={t.skills.sectionTitle} />
      <div className="grid gap-5 sm:grid-cols-2">
        {t.skills.items.map((s, i) => {
          const Icon = SKILL_ICONS[s.key as keyof typeof SKILL_ICONS] ?? Server;
          return (
            <Reveal key={s.key} delay={i * 90}>
              <article className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-primary/10 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold">{s.title}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-8">
        <Reveal>
          <div className="rounded-xl border border-border bg-card p-6 sm:max-w-md">
            <h3 className="flex items-center gap-2 font-semibold">
              <Languages className="h-5 w-5 text-primary" /> {t.skills.languagesTitle}
            </h3>
            {t.skills.languages.map((lang) => (
              <div key={lang.label} className="mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span>{lang.label}</span>
                  <span className="font-mono text-xs text-accent">{lang.level}</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    style={{ width: `${lang.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="06." title={t.contact.sectionTitle} />
      <div className="grid gap-8 md:grid-cols-2">
        <Reveal>
          <form
            className="rounded-xl border border-border bg-card p-6"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Contact portfolio — ${data.get("name")}`);
              const body = encodeURIComponent(
                `${data.get("message")}\n\n—\n${data.get("name")} (${data.get("email")})`,
              );
              window.location.href = `mailto:fcadjame@gmail.com?subject=${subject}&body=${body}`;
              setSent(true);
            }}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-muted-foreground">
                  {t.contact.formName}
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs text-muted-foreground">
                  {t.contact.formEmail}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-xs text-muted-foreground">
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" /> {t.contact.send}
              </button>
              {sent && (
                <p className="font-mono text-xs text-primary">{t.contact.sentNotice}</p>
              )}
            </div>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-xl border border-border bg-card p-6">
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:fcadjame@gmail.com" className="hover:text-primary">
                  fcadjame@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+33745694758" className="hover:text-primary">
                  07 45 69 47 58
                </a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="h-4 w-4 text-primary" />
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
                  {t.contact.whatsappChat}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" /> {t.contact.address}
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-primary" />
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  {t.contact.linkedinProfile}
                </a>
              </li>
            </ul>
            <a
              href={CV_URL}
              download
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary/40 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              <Download className="h-4 w-4" /> {t.contact.downloadCv}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 font-mono text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Florentin CADJAME — {t.footer.rights}</p>
        <div className="flex items-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:fcadjame@gmail.com" aria-label="Email" className="hover:text-primary">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
