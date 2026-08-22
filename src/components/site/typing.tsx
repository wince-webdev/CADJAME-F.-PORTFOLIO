import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export function TypingRoles() {
  const { t } = useLanguage();
  const roles = t.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Réinitialise proprement si la langue change en cours de frappe
  useEffect(() => {
    setRoleIndex(0);
    setText("");
    setDeleting(false);
  }, [roles]);

  useEffect(() => {
    const full = roles[roleIndex % roles.length] ?? "";
    if (!deleting && text === full) {
      const t2 = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t2);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      return;
    }
    const t2 = setTimeout(
      () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
      deleting ? 40 : 75,
    );
    return () => clearTimeout(t2);
  }, [text, deleting, roleIndex, roles]);

  return (
    <span className="font-mono text-primary">
      {text}
      <span className="ml-0.5 inline-block w-[0.6ch] animate-[caret_1s_steps(1)_infinite]">▌</span>
    </span>
  );
}
