import { createFileRoute } from "@tanstack/react-router";
import { ScrollProgress, SiteNav, BackToTop } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Projects } from "@/components/site/projects";
import { About, Experiences, Formations, Skills, Contact, Footer } from "@/components/site/sections";

const title = "Florentin CADJAME - Ingénieur Systèmes, Réseaux & Cybersécurité";
const description =
  "Portfolio de Florentin CADJAME, ingénieur systèmes, réseaux et cybersécurité en Île-de-France : Windows Server, Active Directory, virtualisation Proxmox/VMware, pfSense, Suricata, Splunk et Veeam.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Formations />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
