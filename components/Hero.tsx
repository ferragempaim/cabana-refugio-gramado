"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";
import { asset } from "@/lib/asset";
import ReserveButton from "./ReserveButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // A imagem desfoca e escurece conforme rola. O conteúdo sobe e some.
  const blur = useTransform(scrollYProgress, [0, 1], [0, 16]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.45, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="topo" ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ scale, filter }} className="absolute inset-0">
        <Image
          src={asset("/images/exterior.png")}
          alt="Cabana Miragem sobre o vale em Gramado"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm"
        >
          <span className="text-amber-claro">★ {site.avaliacao.nota}</span>
          {site.avaliacao.selo} · Airbnb
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-4xl font-serif text-5xl font-light leading-[1.05] tracking-tight text-white md:text-8xl"
        >
          Cabana Miragem
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-white/85 md:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10"
        >
          <ReserveButton size="lg" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 text-white/50"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/40 p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-1.5 w-1 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
