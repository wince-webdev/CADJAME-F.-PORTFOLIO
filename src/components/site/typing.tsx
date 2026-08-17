import { useEffect, useState } from "react";

const ROLES = [
  "Ingénieur Systèmes & Réseaux",
  "Administrateur Windows Server",
  "Expert Virtualisation (Proxmox, VMware)",
  "Cybersécurité — IDS/IPS, SIEM, EDR",
];

export function TypingRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIndex] ?? "";
    if (!deleting && text === full) {
      const t = setTimeout(() => setDeleting(true), 1600);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      return;
    }
    const t = setTimeout(
      () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
      deleting ? 40 : 75,
    );
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  return (
    <span className="font-mono text-primary">
      {text}
      <span className="ml-0.5 inline-block w-[0.6ch] animate-[caret_1s_steps(1)_infinite]">▌</span>
    </span>
  );
}
