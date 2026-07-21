"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galeria } from "@/lib/site";

export default function Galeria() {
  const [ativo, setAtivo] = useState(0);
  const total = galeria.length;

  const ir = (dir: number) => setAtivo((a) => (a + dir + total) % total);

  return (
    <section id="galeria" className="relative z-10 overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-amber"
        >
          Por dentro
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-5 font-serif text-3xl font-light text-foreground md:text-5xl"
        >
          Cada ambiente com vista
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 text-sm text-muted"
        >
          Arraste para o lado ou use as setas
        </motion.p>
      </div>

      {/* Leque de cartas — arrastável pro lado, além dos botões */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.16}
        onDragEnd={(_, info) => {
          if (info.offset.x < -60) ir(1);
          else if (info.offset.x > 60) ir(-1);
        }}
        className="relative mx-auto mt-16 flex h-[62vh] max-h-[560px] w-full max-w-5xl cursor-grab touch-pan-y items-center justify-center active:cursor-grabbing"
      >
        {galeria.map((foto, i) => {
          // deslocamento relativo ao card ativo (com wrap circular)
          let offset = i - ativo;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const visivel = Math.abs(offset) <= 3;

          return (
            <motion.button
              key={foto.src}
              onClick={() => setAtivo(i)}
              animate={{
                x: offset * 62,
                rotate: offset * 7,
                y: Math.abs(offset) * 26,
                scale: offset === 0 ? 1 : 0.9 - Math.abs(offset) * 0.04,
                opacity: visivel ? 1 : 0,
                zIndex: 20 - Math.abs(offset),
              }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="absolute h-[68%] w-[76%] origin-bottom overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/60 md:w-[52%]"
              style={{ pointerEvents: visivel ? "auto" : "none" }}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(max-width: 768px) 76vw, 52vw"
                className="object-cover"
              />
              {offset === 0 && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-left">
                  <span className="font-serif text-xl text-white md:text-2xl">
                    {foto.legenda}
                  </span>
                </div>
              )}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Controles */}
      <div className="mt-10 flex items-center justify-center gap-6 pb-4">
        <button
          onClick={() => ir(-1)}
          aria-label="Anterior"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-linha text-muted transition-colors hover:border-amber hover:text-amber"
        >
          ‹
        </button>
        <div className="min-w-[4rem] text-center text-sm text-muted">
          <AnimatePresence mode="wait">
            <motion.span
              key={ativo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {String(ativo + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </div>
        <button
          onClick={() => ir(1)}
          aria-label="Próxima"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-linha text-muted transition-colors hover:border-amber hover:text-amber"
        >
          ›
        </button>
      </div>
    </section>
  );
}
