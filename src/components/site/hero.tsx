import { Download, Mail, Linkedin, MapPin, Phone, FileArchive } from "lucide-react";
import { TypingRoles } from "./typing";

// Fichiers servis depuis /public : fonctionnent en local ET en ligne
const profile = "/florentin-cadjame.jpg";

export const CV_URL = "/cv-florentin-cadjame.pdf";
export const LINKEDIN_URL = "https://www.linkedin.com/in/florentin-cadjame-48a0aa111/";

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 65%)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Paris 75016 — mobilité France entière
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Florentin CADJAME
          </h1>
          <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
            Ingénieur Systèmes, Réseaux &amp; Cybersécurité
          </p>

          <div className="mt-6 max-w-xl rounded-lg border border-border bg-surface/60 p-4 font-mono text-sm">
            <span className="text-muted-foreground">$ whoami --role</span>
            <div className="mt-1">
              <TypingRoles />
            </div>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Je sécurise, j'audite et je fiabilise les infrastructures IT — du réseau au poste de
            travail, jusqu'au pentest.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CV_URL}
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> Télécharger mon CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              Me contacter
            </a>
            
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-md border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:fcadjame@gmail.com"
              aria-label="Email"
              className="rounded-md border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-primary" /> 07 45 69 47 58
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-primary" /> fcadjame@gmail.com
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Paris, France
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-56 sm:w-72">
          <div className="glow-ring overflow-hidden rounded-full">
            <img
              src={profile}
              alt="Portrait de Florentin CADJAME"
              width={768}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
