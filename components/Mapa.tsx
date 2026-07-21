"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import "leaflet/dist/leaflet.css";
import { site } from "@/lib/site";
import ReserveButton from "./ReserveButton";

// Localização aproximada — o endereço exato é liberado pelo Airbnb após a reserva.
// Região sudeste de Gramado, perto do GramadoZoo e do Parque Gaúcho.
const POS: [number, number] = [-29.4105, -50.848];

// Pontos turísticos da região (posições aproximadas) pra mostrar o que há por perto.
const pontos: { nome: string; tempo: string; pos: [number, number] }[] = [
  { nome: "Centro de Gramado", tempo: "10 min", pos: [-29.3789, -50.876] },
  { nome: "GramadoZoo", tempo: "5 min", pos: [-29.4076, -50.836] },
  { nome: "Parque Gaúcho", tempo: "6 min", pos: [-29.413, -50.835] },
  { nome: "Vinícola Seganfredo", tempo: "7 min", pos: [-29.422, -50.864] },
  { nome: "Cascatas", tempo: "8 min", pos: [-29.409, -50.862] },
];

export default function Mapa() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    let map: import("leaflet").Map | null = null;

    (async () => {
      const L = (await import("leaflet")).default;
      if (!containerRef.current || containerRef.current.dataset.ready) return;
      containerRef.current.dataset.ready = "1";

      map = L.map(containerRef.current, {
        center: POS,
        zoom: 14,
        zoomControl: false,
        scrollWheelZoom: false,
      });

      // Voyager: mapa claro com os pontos turísticos da região visíveis (igual o Airbnb).
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 19,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      ).addTo(map);

      // Pontos turísticos ao redor, com o nome sempre visível.
      pontos.forEach((p) => {
        const dot = L.divIcon({
          className: "",
          html: `<span class="poi-dot"></span>`,
          iconSize: [14, 14],
          iconAnchor: [7, 7],
        });
        L.marker(p.pos, { icon: dot })
          .addTo(map!)
          .bindTooltip(`${p.nome} · ${p.tempo}`, {
            permanent: true,
            direction: "top",
            offset: [0, -6],
            className: "poi-label",
          });
      });

      // Marcador da cabana (blob), em destaque.
      const icon = L.divIcon({
        className: "",
        html: `<div class="blob-marker"><span class="blob-pulse"></span><span class="blob-core"></span></div>`,
        iconSize: [44, 44],
        iconAnchor: [22, 22],
      });

      L.marker(POS, { icon, zIndexOffset: 1000 })
        .addTo(map)
        .bindTooltip("Cabana Miragem", {
          permanent: true,
          direction: "bottom",
          offset: [0, 18],
          className: "poi-label poi-label-cabana",
        })
        .on("click", () => setAberto(true));

      L.control.zoom({ position: "bottomright" }).addTo(map);

      // Enquadra a cabana e todos os pontos turísticos.
      const bounds = L.latLngBounds([POS, ...pontos.map((p) => p.pos)]);
      map.fitBounds(bounds, { padding: [60, 60] });
    })();

    return () => {
      if (map) map.remove();
    };
  }, []);

  return (
    <section id="localizacao" className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="mb-12 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-amber">
          Onde fica
        </span>
        <h2 className="mt-5 font-serif text-3xl font-light text-foreground md:text-5xl">
          No coração da serra gaúcha
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted">
          A 10 minutos do centro de Gramado, cercada de cascatas e a poucos
          minutos do GramadoZoo, do Parque Gaúcho e das vinícolas da serra.
          Toque no marcador para ver os detalhes.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-linha">
        <div ref={containerRef} className="h-[60vh] max-h-[520px] w-full bg-surface" />

        {/* Info sheet que sobe ao tocar o marcador (ref: map blob marker) */}
        <AnimatePresence>
          {aberto && (
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              exit={{ y: "110%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="absolute inset-x-3 bottom-3 z-[500] overflow-hidden rounded-3xl border border-linha bg-surface/95 backdrop-blur-md shadow-2xl shadow-black/60 md:inset-x-auto md:right-3 md:w-96"
            >
              <div className="relative h-40 w-full">
                <Image
                  src="/images/exterior.png"
                  alt="Cabana Miragem"
                  fill
                  sizes="384px"
                  className="object-cover"
                />
                <button
                  onClick={() => setAberto(false)}
                  aria-label="Fechar"
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm"
                >
                  ×
                </button>
              </div>
              <div className="p-5">
                <div className="font-serif text-xl text-foreground">{site.cabana}</div>
                <p className="mt-1 text-sm text-muted">
                  {site.cidade} · a 10 min do centro
                </p>
                <p className="mt-3 text-xs text-muted/70">
                  Localização aproximada. O endereço exato é enviado após a
                  confirmação da reserva no Airbnb.
                </p>
                <div className="mt-4">
                  <ReserveButton label="Ver datas e reservar" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
