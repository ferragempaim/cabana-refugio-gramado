"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ReserveButton from "./ReserveButton";

export default function CTA() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 pb-32 pt-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-linha">
        <Image
          src="/images/jacuzzi-vista.png"
          alt="Jacuzzi com vista para o vale ao entardecer"
          fill
          sizes="(max-width: 768px) 100vw, 1024px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative flex flex-col items-center px-6 py-24 text-center md:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl font-serif text-4xl font-light leading-tight text-white md:text-6xl"
          >
            Sua próxima escapada começa aqui
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-5 max-w-md text-lg text-white/85"
          >
            Reserva com toda a segurança do Airbnb. Confira as datas disponíveis.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10"
          >
            <ReserveButton size="lg" label="Ver datas e reservar" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
