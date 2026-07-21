"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

const ficha = [
  { valor: site.ficha.hospedes, label: "hóspedes" },
  { valor: site.ficha.quartos, label: "quarto" },
  { valor: site.ficha.camas, label: "camas" },
  { valor: site.ficha.banheiros, label: "banheiro" },
];

export default function Sobre() {
  return (
    <section id="cabana" className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-xs font-medium uppercase tracking-[0.25em] text-amber"
      >
        O refúgio
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className="mt-5 font-serif text-3xl font-light leading-tight text-foreground md:text-5xl"
      >
        Perto de tudo.{" "}
        <span className="italic text-amber-claro">Longe do óbvio.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted"
      >
        A Cabana Miragem é um refúgio imerso no vale, com jacuzzi aquecida e
        vista em todos os ambientes. O som do riacho, a lareira de vidro e o
        entardecer criam uma experiência única. Completa e aconchegante, ideal
        para casais ou pequenas famílias.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mx-auto mt-14 flex max-w-lg items-stretch justify-center divide-x divide-linha rounded-2xl border border-linha bg-surface/50"
      >
        {ficha.map((f) => (
          <div key={f.label} className="flex-1 px-4 py-6">
            <div className="font-serif text-3xl font-light text-amber-claro md:text-4xl">
              {f.valor}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wide text-muted">
              {f.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
