"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { comodidades } from "@/lib/site";

type Dir = "top" | "bottom" | "left" | "right";

function CardComodidade({
  item,
}: {
  item: (typeof comodidades)[number];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [dir, setDir] = useState<Dir>("bottom");

  // Descobre por qual borda o mouse entrou/saiu (ref: direction-aware-hover)
  const getDir = (e: React.MouseEvent): Dir => {
    const el = ref.current;
    if (!el) return "bottom";
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    if (Math.abs(x) > Math.abs(y)) return x > 0 ? "right" : "left";
    return y > 0 ? "bottom" : "top";
  };

  const slide: Record<Dir, { x: number; y: number }> = {
    top: { x: 0, y: -100 },
    bottom: { x: 0, y: 100 },
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
  };

  const [hover, setHover] = useState(false);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={(e) => {
        setDir(getDir(e));
        setHover(true);
      }}
      onMouseLeave={(e) => {
        setDir(getDir(e));
        setHover(false);
      }}
      className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-linha"
    >
      <Image
        src={item.img}
        alt={item.nome}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Nome sempre visível, discreto */}
      <div className="absolute bottom-0 left-0 p-5">
        <span className="font-serif text-xl text-white">{item.nome}</span>
      </div>

      {/* Painel que entra pela borda do mouse */}
      <motion.div
        initial={false}
        animate={
          hover
            ? { x: 0, y: 0, opacity: 1 }
            : { x: slide[dir].x + "%", y: slide[dir].y + "%", opacity: 0 }
        }
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-terracota/85 p-6 text-center backdrop-blur-[2px]"
      >
        <span className="font-serif text-2xl text-white">{item.nome}</span>
        <span className="text-sm text-white/90">{item.desc}</span>
      </motion.div>
    </motion.div>
  );
}

export default function Comodidades() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-amber"
        >
          O que espera por você
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-5 font-serif text-3xl font-light text-foreground md:text-5xl"
        >
          Conforto em cada detalhe
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
        {comodidades.map((item, i) => (
          <motion.div
            key={item.nome}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <CardComodidade item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
