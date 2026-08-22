import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type Experience = {
  role: string;
  company: string;
  period: string;
  groups: { label: string; items: string }[];
};

type Formation = {
  title: string;
  school: string;
  period: string;
  detail: string;
};

type Skill = {
  key: string;
  title: string;
  items: string[];
};

type Project = {
  key: string;
  title: string;
  context: string;
  description: string;
  tags: string[];
  linkLabel?: string;
};

type Dict = {
  nav: { accueil: string; apropos: string; experiences: string; formations: string; competences: string; realisations: string; contact: string };
  nav_aria: { openMenu: string; closeMenu: string; backToTop: string; toggleTheme: string; toggleLang: string };
  hero: {
    badge: string;
    title: string;
    roles: string[];
    intro: string;
    downloadCv: string;
    contactMe: string;
    whatsapp: string;
  };
  about: {
    sectionTitle: string;
    paragraph: string;
    info: [string, string][];
  };
  experiences: { sectionTitle: string; items: Experience[] };
  formations: { sectionTitle: string; items: Formation[] };
  skills: { sectionTitle: string; items: Skill[]; languagesTitle: string; languages: { label: string; level: string; value: number }[] };
  projects: { sectionTitle: string; items: Project[]; viewSite: string };
  contact: {
    sectionTitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    send: string;
    sentNotice: string;
    whatsappChat: string;
    linkedinProfile: string;
    downloadCv: string;
    address: string;
  };
  footer: { rights: string };
};

const fr: Dict = {
  nav: {
    accueil: "Accueil",
    apropos: "À propos",
    experiences: "Expériences",
    formations: "Études",
    competences: "Compétences",
    realisations: "Réalisations",
    contact: "Contact",
  },
  nav_aria: {
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    backToTop: "Retour en haut",
    toggleTheme: "Changer de thème",
    toggleLang: "Changer de langue",
  },
  hero: {
    badge: "Bobigny 93000 — mobilité Île-de-France / France",
    title: "Ingénieur Systèmes, Réseaux & Cybersécurité",
    roles: [
      "Ingénieur Systèmes & Réseaux",
      "Administrateur Windows Server",
      "Expert Virtualisation (Proxmox, VMware)",
      "Cybersécurité — IDS/IPS, SIEM, EDR",
    ],
    intro:
      "Je conçois, j'exploite et je sécurise les infrastructures informatiques — du réseau au datacenter virtualisé, jusqu'à la détection des menaces.",
    downloadCv: "Télécharger mon CV",
    contactMe: "Me contacter",
    whatsapp: "WhatsApp",
  },
  about: {
    sectionTitle: "À propos",
    paragraph:
      "Ingénieur Systèmes, Réseaux et Cybersécurité, je participe activement à la conception, l'exploitation et la sécurisation des infrastructures informatiques : architectures réseau et VLAN, administration Windows Server et Linux, virtualisation et haute disponibilité, supervision, sauvegarde et détection des menaces.",
    info: [
      ["localisation", "Bobigny 93000"],
      ["mobilité", "Île-de-France / France"],
      ["disponibilité", "à l'écoute d'opportunités"],
    ],
  },
  experiences: {
    sectionTitle: "Expériences",
    items: [
      {
        role: "Ingénieur Systèmes, Réseaux et Cybersécurité",
        company: "Dootri — Lyon, France",
        period: "Depuis février 2025",
        groups: [
          { label: "Sécurité réseau", items: "Mise en œuvre et administration de solutions de sécurité réseau (FortiGate 40F, Cisco ASA, pfSense), configuration de tunnels IPsec." },
          { label: "Cybersécurité", items: "Tests d'intrusion en environnement contrôlé, inspection des trafics réseau (Suricata / pfSense — IDS/IPS), collecte et analyse de données avec Splunk." },
          { label: "Architecture réseau", items: "Conception et administration d'architectures réseau avec routage inter-VLAN, routage statique et dynamique (RIP, OSPF, EIGRP)." },
          { label: "Systèmes Windows", items: "Windows Server : Active Directory (AD DS), stratégies de groupe (GPO), services DNS, déploiement et supervision via SCCM, clusters de basculement et équilibrage de charge (HA sur Windows Server 2022)." },
          { label: "Stockage, supervision & sauvegarde", items: "TrueNAS, Zabbix et Veeam Backup." },
          { label: "Virtualisation", items: "Installation, configuration et administration d'environnements VMware, Hyper-V et Proxmox : machines virtuelles, réseaux virtuels et haute disponibilité." },
          { label: "Cloud", items: "Administration Microsoft 365, Entra ID (Azure AD), virtualisation et sauvegarde cloud (notions)." },
        ],
      },
      {
        role: "Responsable Infrastructures Réseaux et Systèmes",
        company: "3MAUC — Cotonou, Bénin",
        period: "Octobre 2023 – Octobre 2024",
        groups: [
          { label: "Systèmes", items: "Administration Windows & Linux : installation, configuration, mises à jour, gestion des comptes et droits d'accès (Active Directory)." },
          { label: "Virtualisation", items: "Gestion d'environnements virtualisés VMware et Hyper-V." },
          { label: "Réseaux", items: "Configuration et maintenance des switches, routeurs et firewalls, mise en place de VLAN, routage statique et dynamique (OSPF, RIP, EIGRP)." },
          { label: "Interconnexion & sécurité", items: "Connectivité entre sites distants, configuration de VPN site-to-site et sécurisation des communications." },
        ],
      },
      {
        role: "Administrateur Systèmes et Réseaux",
        company: "SET ASSET — Bruxelles / Cotonou, Bénin",
        period: "Décembre 2019 – Décembre 2022",
        groups: [
          { label: "Sécurité & administration système", items: "Stratégies de sécurité (GPO, antivirus, audit), gestion des services DNS, DHCP, FTP et attribution d'adresses IP fixes/dynamiques." },
          { label: "Virtualisation", items: "Déploiement et gestion d'environnements VMware et Hyper-V (serveurs et postes de travail)." },
          { label: "Réseaux", items: "Configuration et maintenance des switches, routeurs et firewalls, VLAN, routage statique et dynamique (OSPF, RIP), surveillance du trafic avec Wireshark." },
          { label: "Développement web", items: "Création et mise en ligne du site vitrine de SETASSET (afroassets.com)." },
        ],
      },
    ],
  },
  formations: {
    sectionTitle: "Études & Diplômes",
    items: [
      { title: "Master Ingénieur Systèmes, Réseaux et Cybersécurité", school: "Institut F2I — Paris", period: "2026", detail: "Infrastructures systèmes et réseaux, sécurisation des systèmes d'information, supervision et haute disponibilité." },
      { title: "Master Ingénieur Systèmes, Réseaux", school: "Institut Cerco Abidjan — Abidjan", period: "2019", detail: "Fondamentaux réseaux, administration systèmes et maintenance informatique." },
    ],
  },
  skills: {
    sectionTitle: "Compétences techniques",
    items: [
      { key: "systemes", title: "Systèmes", items: ["Windows Server", "Active Directory", "Linux Ubuntu/Debian", "DNS / DHCP", "GPO", "HA"] },
      { key: "reseau", title: "Réseau", items: ["TCP/IP", "VLAN", "VPN", "pfSense", "Routage / NAT", "Cisco", "HA"] },
      { key: "virtualisation", title: "Virtualisation", items: ["Proxmox VE", "Hyper-V", "VMware ESXi", "Gestion de VM", "Snapshots", "Stockage virtualisé", "HA"] },
      { key: "cybersecurite", title: "Cybersécurité", items: ["Suricata / pfSense (IDS, IPS)", "Splunk (collecte & corrélation)", "EDR — Windows Defender", "Veeam Backup — PRA/PCA"] },
    ],
    languagesTitle: "Langues",
    languages: [
      { label: "Français", level: "100 %", value: 100 },
      { label: "Anglais", level: "40 %", value: 40 },
    ],
  },
  projects: {
    sectionTitle: "Réalisations & Projets",
    viewSite: "Voir le site",
    items: [
      { key: "ceph", title: "Architecture de stockage distribué sécurisé (Ceph / Proxmox VE)", context: "Projet personnel — en cours", description: "Conception d'un cluster de stockage distribué Ceph sur Proxmox VE : réplication des données, tolérance aux pannes, chiffrement et haute disponibilité pour des environnements virtualisés.", tags: ["Ceph", "Proxmox VE", "HA", "Stockage"] },
      { key: "interco", title: "Interconnexion sécurisée de sites distants", context: "Dootri", description: "Tunnels IPsec entre sites via FortiGate 40F, Cisco ASA et pfSense, routage inter-VLAN (RIP, OSPF, EIGRP) et politiques de filtrage adaptées aux flux métiers.", tags: ["FortiGate 40F", "Cisco ASA", "pfSense", "IPsec"] },
      { key: "detection", title: "Détection des menaces et analyse de logs", context: "Dootri", description: "Inspection du trafic réseau avec Suricata sur pfSense (IDS/IPS), collecte et corrélation des événements dans Splunk, surveillance des terminaux via Windows Defender (EDR).", tags: ["Suricata", "IDS/IPS", "Splunk", "EDR"] },
      { key: "supervision", title: "Supervision, sauvegarde et haute disponibilité", context: "Dootri", description: "Supervision Zabbix, stockage TrueNAS, sauvegardes Veeam Backup et clusters de basculement / équilibrage de charge sous Windows Server 2022 (PRA/PCA).", tags: ["Zabbix", "TrueNAS", "Veeam", "Failover Cluster"] },
      { key: "ad", title: "Infrastructure Active Directory & déploiement automatisé", context: "Dootri / 3MAUC", description: "Structuration de l'annuaire AD (OU, groupes, GPO), services DNS, déploiement d'applications et supervision des postes via SCCM.", tags: ["Active Directory", "GPO", "DNS", "SCCM"] },
      { key: "afroassets", title: "Site vitrine SETASSET — afroassets.com", context: "SET ASSET", description: "Conception, mise en ligne et maintenance du site vitrine : hébergement, nom de domaine, sécurisation HTTPS et mises à jour de contenu.", tags: ["Web", "Hébergement", "HTTPS", "Nom de domaine"], linkLabel: "Voir le site" },
    ],
  },
  contact: {
    sectionTitle: "Contact",
    formName: "nom",
    formEmail: "email",
    formMessage: "message",
    send: "Envoyer le message",
    sentNotice: "Votre logiciel de messagerie s'ouvre avec le message pré-rempli.",
    whatsappChat: "Discuter sur WhatsApp",
    linkedinProfile: "Profil LinkedIn",
    downloadCv: "Télécharger le CV en PDF",
    address: "22 avenue Paul Vaillant Couturier, 93000 Bobigny",
  },
  footer: { rights: "Tous droits réservés." },
};

const en: Dict = {
  nav: {
    accueil: "Home",
    apropos: "About",
    experiences: "Experience",
    formations: "Education",
    competences: "Skills",
    realisations: "Projects",
    contact: "Contact",
  },
  nav_aria: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backToTop: "Back to top",
    toggleTheme: "Toggle theme",
    toggleLang: "Switch language",
  },
  hero: {
    badge: "Bobigny 93000 — available across Île-de-France / France",
    title: "Systems, Network & Cybersecurity Engineer",
    roles: [
      "Systems & Network Engineer",
      "Windows Server Administrator",
      "Virtualization Expert (Proxmox, VMware)",
      "Cybersecurity — IDS/IPS, SIEM, EDR",
    ],
    intro:
      "I design, operate and secure IT infrastructures — from the network to the virtualized datacenter, all the way to threat detection.",
    downloadCv: "Download my CV",
    contactMe: "Contact me",
    whatsapp: "WhatsApp",
  },
  about: {
    sectionTitle: "About",
    paragraph:
      "As a Systems, Network and Cybersecurity Engineer, I actively contribute to the design, operation and security of IT infrastructures: network architectures and VLANs, Windows Server and Linux administration, virtualization and high availability, monitoring, backup and threat detection.",
    info: [
      ["location", "Bobigny 93000"],
      ["mobility", "Île-de-France / France"],
      ["availability", "open to new opportunities"],
    ],
  },
  experiences: {
    sectionTitle: "Experience",
    items: [
      {
        role: "Systems, Network and Cybersecurity Engineer",
        company: "Dootri — Lyon, France",
        period: "Since February 2025",
        groups: [
          { label: "Network security", items: "Implementation and administration of network security solutions (FortiGate 40F, Cisco ASA, pfSense), including IPsec tunnel configuration." },
          { label: "Cybersecurity", items: "Penetration testing in a controlled environment, network traffic inspection (Suricata / pfSense — IDS/IPS), data collection and analysis with Splunk." },
          { label: "Network architecture", items: "Design and administration of network architectures with inter-VLAN routing, static and dynamic routing (RIP, OSPF, EIGRP)." },
          { label: "Windows systems", items: "Windows Server: Active Directory (AD DS), Group Policy (GPO), DNS services, deployment and monitoring via SCCM, failover clustering and load balancing (HA on Windows Server 2022)." },
          { label: "Storage, monitoring & backup", items: "TrueNAS, Zabbix and Veeam Backup." },
          { label: "Virtualization", items: "Installation, configuration and administration of VMware, Hyper-V and Proxmox environments: virtual machines, virtual networks and high availability." },
          { label: "Cloud", items: "Administration of Microsoft 365, Entra ID (Azure AD), cloud virtualization and backup (basics)." },
        ],
      },
      {
        role: "Head of Network & Systems Infrastructure",
        company: "3MAUC — Cotonou, Benin",
        period: "October 2023 – October 2024",
        groups: [
          { label: "Systems", items: "Windows & Linux administration: installation, configuration, updates, account and access rights management (Active Directory)." },
          { label: "Virtualization", items: "Management of VMware and Hyper-V virtualized environments." },
          { label: "Networking", items: "Configuration and maintenance of switches, routers and firewalls, VLAN setup, static and dynamic routing (OSPF, RIP, EIGRP)." },
          { label: "Interconnection & security", items: "Connectivity between remote sites, site-to-site VPN configuration and communications security." },
        ],
      },
      {
        role: "Systems and Network Administrator",
        company: "SET ASSET — Brussels / Cotonou, Benin",
        period: "December 2019 – December 2022",
        groups: [
          { label: "Security & system administration", items: "Security policies (GPO, antivirus, auditing), DNS, DHCP, FTP services management and fixed/dynamic IP address allocation." },
          { label: "Virtualization", items: "Deployment and management of VMware and Hyper-V environments (servers and workstations)." },
          { label: "Networking", items: "Configuration and maintenance of switches, routers and firewalls, VLANs, static and dynamic routing (OSPF, RIP), traffic monitoring with Wireshark." },
          { label: "Web development", items: "Design and launch of the SETASSET showcase website (afroassets.com)." },
        ],
      },
    ],
  },
  formations: {
    sectionTitle: "Education",
    items: [
      { title: "Master's in Systems, Network and Cybersecurity Engineering", school: "Institut F2I — Paris", period: "2026", detail: "Systems and network infrastructures, information systems security, monitoring and high availability." },
      { title: "Master's in Systems and Network Engineering", school: "Institut Cerco Abidjan — Abidjan", period: "2019", detail: "Networking fundamentals, systems administration and IT maintenance." },
    ],
  },
  skills: {
    sectionTitle: "Technical skills",
    items: [
      { key: "systemes", title: "Systems", items: ["Windows Server", "Active Directory", "Linux Ubuntu/Debian", "DNS / DHCP", "GPO", "HA"] },
      { key: "reseau", title: "Network", items: ["TCP/IP", "VLAN", "VPN", "pfSense", "Routing / NAT", "Cisco", "HA"] },
      { key: "virtualisation", title: "Virtualization", items: ["Proxmox VE", "Hyper-V", "VMware ESXi", "VM management", "Snapshots", "Virtualized storage", "HA"] },
      { key: "cybersecurite", title: "Cybersecurity", items: ["Suricata / pfSense (IDS, IPS)", "Splunk (collection & correlation)", "EDR — Windows Defender", "Veeam Backup — DR/BC"] },
    ],
    languagesTitle: "Languages",
    languages: [
      { label: "French", level: "100%", value: 100 },
      { label: "English", level: "40%", value: 40 },
    ],
  },
  projects: {
    sectionTitle: "Projects & Achievements",
    viewSite: "View site",
    items: [
      { key: "ceph", title: "Secure distributed storage architecture (Ceph / Proxmox VE)", context: "Personal project — in progress", description: "Design of a Ceph distributed storage cluster on Proxmox VE: data replication, fault tolerance, encryption and high availability for virtualized environments.", tags: ["Ceph", "Proxmox VE", "HA", "Storage"] },
      { key: "interco", title: "Secure remote site interconnection", context: "Dootri", description: "IPsec tunnels between sites via FortiGate 40F, Cisco ASA and pfSense, inter-VLAN routing (RIP, OSPF, EIGRP) and filtering policies tailored to business flows.", tags: ["FortiGate 40F", "Cisco ASA", "pfSense", "IPsec"] },
      { key: "detection", title: "Threat detection and log analysis", context: "Dootri", description: "Network traffic inspection with Suricata on pfSense (IDS/IPS), event collection and correlation in Splunk, endpoint monitoring via Windows Defender (EDR).", tags: ["Suricata", "IDS/IPS", "Splunk", "EDR"] },
      { key: "supervision", title: "Monitoring, backup and high availability", context: "Dootri", description: "Zabbix monitoring, TrueNAS storage, Veeam Backup backups and failover / load-balancing clusters on Windows Server 2022 (DR/BC).", tags: ["Zabbix", "TrueNAS", "Veeam", "Failover Cluster"] },
      { key: "ad", title: "Active Directory infrastructure & automated deployment", context: "Dootri / 3MAUC", description: "Structuring the AD directory (OUs, groups, GPO), DNS services, application deployment and endpoint monitoring via SCCM.", tags: ["Active Directory", "GPO", "DNS", "SCCM"] },
      { key: "afroassets", title: "SETASSET showcase website — afroassets.com", context: "SET ASSET", description: "Design, launch and maintenance of the showcase website: hosting, domain name, HTTPS security and content updates.", tags: ["Web", "Hosting", "HTTPS", "Domain name"], linkLabel: "View site" },
    ],
  },
  contact: {
    sectionTitle: "Contact",
    formName: "name",
    formEmail: "email",
    formMessage: "message",
    send: "Send message",
    sentNotice: "Your email client is opening with the pre-filled message.",
    whatsappChat: "Chat on WhatsApp",
    linkedinProfile: "LinkedIn profile",
    downloadCv: "Download CV (PDF)",
    address: "22 avenue Paul Vaillant Couturier, 93000 Bobigny, France",
  },
  footer: { rights: "All rights reserved." },
};

const dictionaries: Record<Lang, Dict> = { fr, en };

type LanguageContextValue = {
  lang: Lang;
  t: Dict;
  toggleLang: () => void;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "fc-portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (window.localStorage.getItem(STORAGE_KEY) as Lang | null) : null;
    if (saved === "fr" || saved === "en") {
      setLangState(saved);
    } else if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("en")) {
      setLangState("en");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  const toggleLang = () => setLang(lang === "fr" ? "en" : "fr");

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: dictionaries[lang], toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
