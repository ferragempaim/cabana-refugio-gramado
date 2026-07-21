"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Vista() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="vista" ref={ref} className="relative z-10 h-[90vh] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-[125%]">
        <Image
          src="/images/vista.png"
          alt="Vista do vale e do morro a partir da Cabana Miragem"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl font-serif text-4xl font-light leading-tight text-white md:text-7xl"
          >
            Onde o vale encontra
            <br />
            <span className="italic text-amber-claro">o silêncio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mx-auto mt-6 max-w-md text-lg text-white/85"
          >
            A 10 minutos do centro de Gramado, imersa na serra gaúcha. Perto de
            tudo, mas com a paz que só o vale oferece.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
