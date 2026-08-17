import { ExternalLink, Globe, Network, ShieldCheck, Activity, Server, HardDrive } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/reveal";

/**
 * Pour ajouter une réalisation : copiez un bloc ci-dessous et modifiez-le.
 * `link` est optionnel (supprimez la ligne si le projet n'a pas de site).
 */
const PROJECTS = [
  {
    icon: HardDrive,
    title: "Architecture de stockage distribué sécurisé (Ceph / Proxmox VE)",
    context: "Projet personnel — en cours",
    description:
      "Conception d'un cluster de stockage distribué Ceph sur Proxmox VE : réplication des données, tolérance aux pannes, chiffrement et haute disponibilité pour des environnements virtualisés.",
    tags: ["Ceph", "Proxmox VE", "HA", "Stockage"],
  },
  {
    icon: Network,
    title: "Interconnexion sécurisée de sites distants",
    context: "Dootri",
    description:
      "Tunnels IPsec entre sites via FortiGate 40F, Cisco ASA et pfSense, routage inter-VLAN (RIP, OSPF, EIGRP) et politiques de filtrage adaptées aux flux métiers.",
    tags: ["FortiGate 40F", "Cisco ASA", "pfSense", "IPsec"],
  },
  {
    icon: ShieldCheck,
    title: "Détection des menaces et analyse de logs",
    context: "Dootri",
    description:
      "Inspection du trafic réseau avec Suricata sur pfSense (IDS/IPS), collecte et corrélation des événements dans Splunk, surveillance des terminaux via Windows Defender (EDR).",
    tags: ["Suricata", "IDS/IPS", "Splunk", "EDR"],
  },
  {
    icon: Activity,
    title: "Supervision, sauvegarde et haute disponibilité",
    context: "Dootri",
    description:
      "Supervision Zabbix, stockage TrueNAS, sauvegardes Veeam Backup et clusters de basculement / équilibrage de charge sous Windows Server 2022 (PRA/PCA).",
    tags: ["Zabbix", "TrueNAS", "Veeam", "Failover Cluster"],
  },
  {
    icon: Server,
    title: "Infrastructure Active Directory & déploiement automatisé",
    context: "Dootri / 3MAUC",
    description:
      "Structuration de l'annuaire AD (OU, groupes, GPO), services DNS, déploiement d'applications et supervision des postes via SCCM.",
    tags: ["Active Directory", "GPO", "DNS", "SCCM"],
  },
  {
    icon: Globe,
    title: "Site vitrine SETASSET — afroassets.com",
    context: "SET ASSET",
    description:
      "Conception, mise en ligne et maintenance du site vitrine : hébergement, nom de domaine, sécurisation HTTPS et mises à jour de contenu.",
    tags: ["Web", "Hébergement", "HTTPS", "Nom de domaine"],
    link: "https://afroassets.com",
  },
];

export function Projects() {
  return (
    <section id="realisations" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="05." title="Réalisations & Projets" />
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
