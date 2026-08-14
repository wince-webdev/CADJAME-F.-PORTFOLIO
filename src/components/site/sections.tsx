import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Network,
  Server,
  Container,
  Bug,
  Languages,
  Music,
  BookOpen,
  Trophy,
  
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  Send,
} from "lucide-react";
import { Reveal, SectionTitle } from "@/components/reveal";
import { CV_URL, LINKEDIN_URL } from "./hero";

const EXPERIENCES = [
  {
    role: "Ingénieur Système Réseau et Cybersécurité",
    company: "DOOTRI — Lyon, France",
    period: "Février 2025 – Août 2025",
    groups: [
      {
        label: "Cybersécurité & Réseau",
        items:
          "Interconnexion de sites via Fortigate 40F, tunnel IPsec, pentest (capture handshake, wordlist Rockyou, malware Python, détection Yara), tests de vulnérabilité (mots de passe, WPS), routage inter-VLAN statique et dynamique (RIP, OSPF, EIGRP)",
      },
      {
        label: "Systèmes",
        items:
          "Windows Server (AD DS, GPO, DNS, SCCM, sauvegarde), TrueNAS (stockage), Zabbix (supervision), déploiement et administration de VM (VMware, Proxmox)",
      },
      { label: "DevOps & Conteneurisation", items: "Docker, Docker Compose, Kubernetes" },
      { label: "Normes & Référentiels", items: "ISO 22301 (BCMS), ISO 27001, ISO 27002" },
    ],
  },
  {
    role: "Responsable Infrastructures Réseaux et Systèmes",
    company: "3MAUC",
    period: "Octobre 2023 – Octobre 2024",
    groups: [
      {
        label: "Systèmes",
        items:
          "Administration Windows & Linux, gestion des comptes et droits d'accès (Active Directory)",
      },
      {
        label: "Supervision & Déploiement",
        items: "Nagios, GPO, SCCM, scripts automatisés",
      },
      { label: "Virtualisation", items: "VMware, Hyper-V, VirtualBox" },
      {
        label: "Réseaux",
        items:
          "Switches, routeurs, firewalls, VLAN, routage statique/dynamique (OSPF, RIP, EIGRP), interconnexion et sécurisation de sites distants (VPN site-to-site)",
      },
    ],
  },
  {
    role: "Administrateur Système et Réseau",
    company: "Set Asset",
    period: "Décembre 2019 – Septembre 2022",
    groups: [
      { label: "Sécurité", items: "Stratégies de sécurité (GPO, antivirus, audit)" },
      { label: "Services", items: "DNS, DHCP, FTP, adressage IP fixe et dynamique" },
      { label: "Virtualisation", items: "VMware, Hyper-V, VirtualBox" },
      {
        label: "Réseaux",
        items:
          "Switches, routeurs, firewalls, VLAN, routage OSPF/RIP, supervision du trafic avec Wireshark",
      },
      {
        label: "Web",
        items: "Création et mise en ligne du site vitrine SETASSET (afroassets.com)",
      },
    ],
  },
];

const FORMATIONS = [
  {
    title: "Mastère Cybersécurité",
    school: "LiveCampus — Titre RNCP Niveau 7 (Bac+5)",
    period: "Octobre 2025 – Novembre 2026",
    detail:
      "Audit et pentest, forensic, reverse engineering, cryptographie avancée, DevSecOps, Security by Design, CI/CD sécurisé, Cloud & infrastructures hybrides (Docker, Kubernetes, Ansible, Terraform), SIEM (Splunk, Wazuh, ELK), analyse de risques, gouvernance et réponse aux incidents.",
  },
  {
    title: "Master 1 Ingénieur Système Réseau et Cybersécurité",
    school: "Institut Européen F2I — Paris",
    period: "Octobre 2024 – Septembre 2025",
    detail: "Infrastructures, sécurité des systèmes d'information et administration réseau.",
  },
  {
    title: "Licence Professionnelle Informatique Industrielle et Maintenance",
    school: "Institut Cerco — Abidjan",
    period: "Septembre 2014 – Juin 2015",
    detail: "Maintenance informatique, systèmes embarqués et fondamentaux réseaux.",
  },
];

const SKILLS = [
  {
    icon: Network,
    title: "Réseau informatique",
    level: 92,
    items: [
      "Cisco",
      "VPN / IPsec",
      "Switches, routeurs, firewalls",
      "TCP/IP, DNS, DHCP",
      "Fortinet",
    ],
  },
  {
    icon: Server,
    title: "Systèmes",
    level: 88,
    items: ["Windows Server", "Linux", "SCCM", "Virtualisation", "TrueNAS"],
  },
  {
    icon: Container,
    title: "Conteneurisation",
    level: 75,
    items: ["Docker", "Docker Compose", "Kubernetes"],
  },
  {
    icon: Bug,
    title: "Pentesting",
    level: 82,
    items: ["Nmap", "Metasploit", "Exploitation (vsftpd backdoor)", "Handshake WPA"],
  },
];


export function About() {
  return (
    <section id="apropos" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="01." title="À propos" />
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <p className="text-base leading-relaxed text-muted-foreground">
            Ingénieur systèmes, réseaux et cybersécurité avec plusieurs années d'expérience en
            administration d'infrastructures, sécurisation de réseaux et tests d'intrusion. Formé
            aux référentiels <span className="text-foreground">ISO 27001/27002/22301</span>, à la
            cybersécurité offensive et défensive, au DevSecOps et au Cloud. Passionné par la
            protection des systèmes d'information et la réponse aux incidents.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <ul className="rounded-lg border border-border bg-card p-5 font-mono text-sm">
            {[
              ["localisation", "Paris 75016"],
              ["mobilité", "France entière"],
              ["permis", "B — véhiculé"],
              ["statut", "Mastère Cybersécurité en cours"],
            ].map(([k, v]) => (
              <li key={k} className="flex justify-between gap-4 border-b border-border/60 py-2 last:border-0">
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
      <SectionTitle index="03." title="Formations" />
      <div className="grid gap-5 md:grid-cols-3">
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
      <SectionTitle index="04." title="Compétences" />
      <div className="grid gap-5 sm:grid-cols-2">
        {SKILLS.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <article className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-primary/10 p-2 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="font-semibold">{s.title}</h3>
                <span className="ml-auto font-mono text-xs text-muted-foreground">{s.level}%</span>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-[width] duration-1000"
                  style={{ width: `${s.level}%` }}
                />
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

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Reveal>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <Languages className="h-5 w-5 text-primary" /> Langues
            </h3>
            {[
              { label: "Français", level: "soutenu — langue maternelle", dots: 5 },
              { label: "Anglais", level: "B1 — intermédiaire", dots: 3 },
            ].map((lang) => (
              <div key={lang.label} className="mt-4 first:mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span>{lang.label}</span>
                  <span className="font-mono text-xs text-accent">{lang.level}</span>
                </div>
                <div className="mt-2 flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`h-1.5 flex-1 rounded-full ${n <= lang.dots ? "bg-primary" : "bg-muted"}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold">Centres d'intérêt</h3>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
              {[
                { icon: Music, label: "Musique" },
                { icon: Trophy, label: "Football" },
                { icon: BookOpen, label: "Lecture" },
              ].map((it) => (
                <li
                  key={it.label}
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5"
                >
                  <it.icon className="h-4 w-4 text-primary" /> {it.label}
                </li>
              ))}
            </ul>
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
                <MapPin className="h-4 w-4 text-primary" /> Paris (75016) — mobilité France entière
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-primary" />
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-primary">
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
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary">
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
