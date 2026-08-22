import { useEffect, useState } from "react";
import { Menu, X, ArrowUp, ShieldCheck, Sun, Moon, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

function useNavLinks() {
  const { t } = useLanguage();
  return [
    { href: "#accueil", label: t.nav.accueil },
    { href: "#apropos", label: t.nav.apropos },
    { href: "#experiences", label: t.nav.experiences },
    { href: "#formations", label: t.nav.formations },
    { href: "#competences", label: t.nav.competences },
    { href: "#realisations", label: t.nav.realisations },
    { href: "#contact", label: t.nav.contact },
  ];
}

export function LangToggle({ className }: { className?: string }) {
  const { lang, toggleLang } = useLanguage();
  const { nav_aria } = useLanguage().t;
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={nav_aria.toggleLang}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-2 font-mono text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary",
        className,
      )}
    >
      <Languages className="h-3.5 w-3.5" />
      {lang === "fr" ? "FR" : "EN"}
    </button>
  );
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { nav_aria } = useLanguage().t;
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={nav_aria.toggleTheme}
      className={cn(
        "rounded-md border border-border p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary",
        className,
      )}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary to-accent transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const LINKS = useNavLinks();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#accueil" className="flex items-center gap-2 font-mono text-sm tracking-tight">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <span className="text-base font-semibold tracking-wide text-foreground">F.CADJAME</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <LangToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LangToggle />
          <ThemeToggle />
          <button
            aria-label={open ? t.nav_aria.closeMenu : t.nav_aria.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-border p-2 text-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-border bg-background/95 px-5 py-3 backdrop-blur-xl md:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  const { t } = useLanguage();
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      aria-label={t.nav_aria.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="glow-ring fixed bottom-6 right-6 z-40 rounded-full bg-surface p-3 text-primary transition-transform hover:-translate-y-0.5"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
