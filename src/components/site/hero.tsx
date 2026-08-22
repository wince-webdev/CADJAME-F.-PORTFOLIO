import { Download, Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { TypingRoles } from "./typing";
import { useLanguage } from "@/lib/i18n";

// Fichiers servis depuis /public : fonctionnent en local ET en ligne
const profile = "/florentin-cadjame.jpg";

export const CV_URL = "/cv-florentin-cadjame.pdf";
export const LINKEDIN_URL = "https://www.linkedin.com/in/florentin-cadjame-48a0aa111/";
// Numéro au format international sans espaces/plus, requis par l'API wa.me
export const WHATSAPP_URL = "https://wa.me/33745694758";

// Logo WhatsApp officiel (lucide-react n'a pas d'icône de marque) — SVG monochrome hérite de currentColor
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 22h-.005a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.1 12.05C2.1 6.529 6.579 2.05 12.1 2.05c2.652 0 5.144 1.033 7.019 2.91a9.82 9.82 0 0 1 2.9 6.99c-.003 5.523-4.48 10.05-9.97 10.05zM12.1 0h-.05C5.469.03.1 5.4.1 12.02c0 2.153.565 4.254 1.635 6.096L0 24l6.028-1.575a11.94 11.94 0 0 0 5.997 1.605h.005c6.628 0 12-5.373 12-12 0-3.207-1.25-6.222-3.518-8.487A11.93 11.93 0 0 0 12.1 0z" />
    </svg>
  );
}

export function Hero() {
  const { t } = useLanguage();
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
            {t.hero.badge}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Florentin CADJAME
          </h1>
          <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
            {t.hero.title}
          </p>

          <div className="mt-6 max-w-xl rounded-lg border border-border bg-surface/60 p-4 font-mono text-sm">
            {/* <span className="text-muted-foreground">$ whoami --role</span> */}
            <div className="mt-1">
              <TypingRoles />
            </div>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {t.hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CV_URL}
              download
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> {t.hero.downloadCv}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-primary/40 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
            >
              {t.hero.contactMe}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4" /> {t.hero.whatsapp}
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
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5 text-primary" /> 07 45 69 47 58
            </a>
            <a
              href="mailto:fcadjame@gmail.com"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5 text-primary" /> fcadjame@gmail.com
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Bobigny (93), France
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-56 sm:w-72">
          <div className="glow-ring overflow-hidden rounded-full">
            <img
              src={profile}
              alt={t.hero.title}
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
