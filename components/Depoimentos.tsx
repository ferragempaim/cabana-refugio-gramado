"use client";

import { motion } from "framer-motion";
import { site, depoimentos } from "@/lib/site";

export default function Depoimentos() {
  return (
    <section id="avaliacoes" className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="mb-16 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex items-baseline gap-3"
        >
          <span className="font-serif text-6xl font-light text-amber-claro md:text-7xl">
            {site.avaliacao.nota}
          </span>
          <div className="text-left">
            <div className="text-amber-claro">★★★★★</div>
            <div className="text-sm text-muted">
              {site.avaliacao.total} avaliações no Airbnb
            </div>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-sm uppercase tracking-[0.2em] text-amber"
        >
          {site.avaliacao.selo} · Top 5% dos anúncios
        </motion.p>
      </div>

      <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
        {depoimentos.map((d, i) => (
          <motion.figure
            key={d.nome}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="mb-5 break-inside-avoid rounded-2xl border border-linha bg-surface/50 p-6"
          >
            <blockquote className="text-foreground/90">"{d.texto}"</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terracota/30 font-serif text-amber-claro">
                {d.nome.slice(0, 1)}
              </span>
              <span className="text-sm font-medium text-muted">{d.nome}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
