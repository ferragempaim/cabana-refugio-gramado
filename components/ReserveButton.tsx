"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

export default function ReserveButton({
  label = "Reservar no Airbnb",
  size = "md",
}: {
  label?: string;
  size?: "md" | "lg";
}) {
  const pad = size === "lg" ? "px-9 py-4 text-base" : "px-6 py-3 text-sm";

  return (
    <motion.a
      href={site.airbnb}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`shiny inline-flex items-center gap-2 rounded-full font-semibold text-background shadow-lg shadow-amber/20 ${pad}`}
    >
      {label}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </motion.a>
  );
}
