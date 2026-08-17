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

const EXPERIENCES = [
  {
    role: "Ingénieur Systèmes, Réseaux et Cybersécurité",
    company: "Dootri — Lyon, France",
    period: "Depuis février 2025",
    groups: [
      {
        label: "Sécurité réseau",
        items:
          "Mise en œuvre et administration de solutions de sécurité réseau (FortiGate 40F, Cisco ASA, pfSense), configuration de tunnels IPsec.",
      },
      {
        label: "Cybersécurité",
        items:
          "Tests d'intrusion en environnement contrôlé, inspection des trafics réseau (Suricata / pfSense — IDS/IPS), collecte et analyse de données avec Splunk.",
      },
      {
        label: "Architecture réseau",
        items:
          "Conception et administration d'architectures réseau avec routage inter-VLAN, routage statique et dynamique (RIP, OSPF, EIGRP).",
      },
      {
        label: "Systèmes Windows",
        items:
          "Windows Server : Active Directory (AD DS), stratégies de groupe (GPO), services DNS, déploiement et supervision via SCCM, clusters de basculement et équilibrage de charge (HA sur Windows Server 2022).",
      },
      {
        label: "Stockage, supervision & sauvegarde",
        items: "TrueNAS, Zabbix et Veeam Backup.",
      },
      {
        label: "Virtualisation",
        items:
          "Installation, configuration et administration d'environnements VMware, Hyper-V et Proxmox : machines virtuelles, réseaux virtuels et haute disponibilité.",
      },
      {
        label: "Cloud",
        items: "Administration Microsoft 365, Entra ID (Azure AD), virtualisation et sauvegarde cloud (notions).",
      },
    ],
  },
  {
    role: "Responsable Infrastructures Réseaux et Systèmes",
    company: "3MAUC — Cotonou, Bénin",
    period: "Octobre 2023 – Octobre 2024",
    groups: [
      {
        label: "Systèmes",
        items:
          "Administration Windows & Linux : installation, configuration, mises à jour, gestion des comptes et droits d'accès (Active Directory).",
      },
      { label: "Virtualisation", items: "Gestion d'environnements virtualisés VMware et Hyper-V." },
      {
        label: "Réseaux",
        items:
          "Configuration et maintenance des switches, routeurs et firewalls, mise en place de VLAN, routage statique et dynamique (OSPF, RIP, EIGRP).",
      },
      {
        label: "Interconnexion & sécurité",
        items:
          "Connectivité entre sites distants, configuration de VPN site-to-site et sécurisation des communications.",
      },
    ],
  },
  {
    role: "Administrateur Systèmes et Réseaux",
    company: "SET ASSET — Bruxelles / Cotonou, Bénin",
    period: "Décembre 2019 – Décembre 2022",
    groups: [
      {
        label: "Sécurité & administration système",
        items:
          "Stratégies de sécurité (GPO, antivirus, audit), gestion des services DNS, DHCP, FTP et attribution d'adresses IP fixes/dynamiques.",
      },
      {
        label: "Virtualisation",
        items: "Déploiement et gestion d'environnements VMware et Hyper-V (serveurs et postes de travail).",
      },
      {
        label: "Réseaux",
        items:
          "Configuration et maintenance des switches, routeurs et firewalls, VLAN, routage statique et dynamique (OSPF, RIP), surveillance du trafic avec Wireshark.",
      },
      {
        label: "Développement web",
        items: "Création et mise en ligne du site vitrine de SETASSET (afroassets.com).",
      },
    ],
  },
];

const FORMATIONS = [
  {
    title: "Master Ingénieur Systèmes, Réseaux et Cybersécurité",
    school: "Institut F2I — Paris",
    period: "2026",
    detail:
      "Infrastructures systèmes et réseaux, sécurisation des systèmes d'information, supervision et haute disponibilité.",
  },
  {
    title: "Master Ingénieur Systèmes, Réseaux",
    school: "Institut Cerco Abidjan — Abidjan",
    period: "2019",
    detail: "Fondamentaux réseaux, administration systèmes et maintenance informatique.",
  },
];

const SKILLS = [
  {
    icon: Server,
    title: "Systèmes",
    items: ["Windows Server", "Active Directory", "Linux Ubuntu/Debian", "DNS / DHCP", "GPO", "HA"],
  },
  {
    icon: Network,
    title: "Réseau",
    items: ["TCP/IP", "VLAN", "VPN", "pfSense", "Routage / NAT", "Cisco", "HA"],
  },
  {
    icon: MonitorCog,
    title: "Virtualisation",
    items: [
      "Proxmox VE",
      "Hyper-V",
      "VMware ESXi",
      "Gestion de VM",
      "Snapshots",
      "Stockage virtualisé",
      "HA",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Cybersécurité",
    items: [
      "Suricata / pfSense (IDS, IPS)",
      "Splunk (collecte & corrélation)",
      "EDR — Windows Defender",
      "Veeam Backup — PRA/PCA",
    ],
  },
];

export function About() {
  return (
    <section id="apropos" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="01." title="À propos" />
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <p className="text-base leading-relaxed text-muted-foreground">
            Ingénieur Systèmes, Réseaux et Cybersécurité, je participe activement à la{" "}
            <span className="text-foreground">conception</span>, l'
            <span className="text-foreground">exploitation</span> et la{" "}
            <span className="text-foreground">sécurisation</span> des infrastructures informatiques :
            architectures réseau et VLAN, administration Windows Server et Linux, virtualisation et
            haute disponibilité, supervision, sauvegarde et détection des menaces.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="rounded-lg border border-border bg-card p-5 font-mono text-sm">
            {[
              ["localisation", "Bobigny 93000"],
              ["mobilité", "Île-de-France / France"],
              ["permis", "B — véhiculé"],
              ["disponibilité", "à l'écoute d'opportunités"],
            ].map(([k, v]) => (
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
  return (
    <section id="experiences" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="02." title="Expériences" />
      <div className="relative border-l border-border pl-6 sm:pl-10">
        {EXPERIENCES.map((exp, i) => (
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
  return (
    <section id="formations" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="03." title="Études & Diplômes" />
      <div className="grid gap-5 md:grid-cols-2">
        {FORMATIONS.map((f, i) => (
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
  return (
    <section id="competences" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="04." title="Compétences techniques" />
      <div className="grid gap-5 sm:grid-cols-2">
        {SKILLS.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <article className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-primary/10 p-2 text-primary">
                  <s.icon className="h-5 w-5" />
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
        ))}
      </div>

      <div className="mt-8">
        <Reveal>
          <div className="rounded-xl border border-border bg-card p-6 sm:max-w-md">
            <h3 className="flex items-center gap-2 font-semibold">
              <Languages className="h-5 w-5 text-primary" /> Langues
            </h3>
            {[
              { label: "Français", level: "100 %", value: 100 },
              { label: "Anglais", level: "40 %", value: 40 },
            ].map((lang) => (
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
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="06." title="Contact" />
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
                  nom
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
                  email
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
                  message
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
                <Send className="h-4 w-4" /> Envoyer le message
              </button>
              {sent && (
                <p className="font-mono text-xs text-primary">
                  Votre logiciel de messagerie s'ouvre avec le message pré-rempli.
                </p>
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
                  Discuter sur WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" /> 22 avenue Paul Vaillant Couturier, 93000
                Bobigny
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-primary" />
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  Profil LinkedIn
                </a>
              </li>
            </ul>
            <a
              href={CV_URL}
              download
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary/40 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              <Download className="h-4 w-4" /> Télécharger le CV en PDF
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 font-mono text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Florentin CADJAME — Tous droits réservés.</p>
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
