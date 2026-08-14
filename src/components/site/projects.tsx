import { ExternalLink, Globe, Network, ShieldCheck, Activity, Server } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/reveal";

/**
 * Pour ajouter une réalisation : copiez un bloc ci-dessous et modifiez-le.
 * - `link` est optionnel (mettez-le à undefined si le projet n'a pas de site).
 * - Aucune image n'est nécessaire.
 */
const PROJECTS = [
  {
    icon: Globe,
    title: "Site vitrine SETASSET — afroassets.com",
    context: "Set Asset",
    description:
      "Conception, mise en ligne et maintenance du site vitrine de l'entreprise : hébergement, nom de domaine, sécurisation HTTPS et mises à jour de contenu.",
    tags: ["Web", "Hébergement", "HTTPS", "Nom de domaine"],
    link: "https://afroassets.com",
  },
  {
    icon: Network,
    title: "Interconnexion sécurisée de sites distants",
    context: "DOOTRI",
    description:
      "Mise en place d'un tunnel IPsec entre deux sites via Fortigate 40F, routage inter-VLAN (RIP, OSPF, EIGRP) et politiques de filtrage adaptées aux flux métiers.",
    tags: ["Fortigate 40F", "IPsec", "VLAN", "OSPF"],
  },
  {
    icon: ShieldCheck,
    title: "Campagne de tests d'intrusion interne",
    context: "DOOTRI",
    description:
      "Reconnaissance réseau (Nmap), exploitation de vulnérabilités (Metasploit), capture de handshake WPA, analyse de malware Python et détection par règles Yara, avec rapport de recommandations.",
    tags: ["Nmap", "Metasploit", "Yara", "WPA"],
  },
  {
    icon: Activity,
    title: "Supervision d'infrastructure",
    context: "DOOTRI / 3MAUC",
    description:
      "Déploiement de Zabbix et Nagios : inventaire des équipements, seuils d'alerte, tableaux de bord et alerting par mail pour réduire le temps de détection des incidents.",
    tags: ["Zabbix", "Nagios", "Alerting"],
  },
  {
    icon: Server,
    title: "Infrastructure Active Directory & déploiement automatisé",
    context: "3MAUC",
    description:
      "Structuration de l'annuaire AD (OU, groupes, GPO), déploiement d'applications via SCCM et scripts d'automatisation pour la préparation des postes.",
    tags: ["Active Directory", "GPO", "SCCM", "Scripts"],
  },
  {
    icon: Server,
    title: "Plateforme conteneurisée de test",
    context: "Projet personnel",
    description:
      "Environnement de laboratoire sous Docker / Docker Compose et Kubernetes pour tester des services et rejouer des scénarios d'attaque en environnement isolé.",
    tags: ["Docker", "Kubernetes", "Lab"],
  },
];

export function Projects() {
  return (
    <section id="realisations" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="05." title="Réalisations" />
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <article className="flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_60px_-32px_var(--glow)]">
              <div className="flex items-start gap-3">
                <span className="rounded-md bg-primary/10 p-2 text-primary">
                  <p.icon className="h-5 w-5" />
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
                {p.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-primary hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Voir le site
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
