"use client";

import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { site } from "@/lib/site";

const links = [
  { label: "Início", href: "#topo" },
  { label: "A Cabana", href: "#cabana" },
  { label: "Galeria", href: "#galeria" },
  { label: "Vista", href: "#vista" },
  { label: "Onde fica", href: "#localizacao" },
  { label: "Avaliações", href: "#avaliacoes" },
];

export default function Dock() {
  const [hovered, setHovered] = useState<string | null>(null);
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.nav
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => {
        mouseX.set(Infinity);
        setHovered(null);
      }}
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-linha bg-surface/80 px-2 py-2 backdrop-blur-md shadow-xl shadow-black/40">
        {/* Menu completo só no desktop. No mobile a página é curta e o que importa é reservar. */}
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHovered(link.href)}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {hovered === link.href && (
                <motion.span
                  layoutId="dock-pill"
                  className="absolute inset-0 rounded-full bg-white/8"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </div>

        <a
          href={site.airbnb}
          target="_blank"
          rel="noopener noreferrer"
          className="shiny ml-1 flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-background sm:px-4 sm:py-2"
        >
          <span className="sm:hidden">★ Reservar no Airbnb</span>
          <span className="hidden sm:inline">Reservar</span>
        </a>
      </div>
    </motion.nav>
  );
}
