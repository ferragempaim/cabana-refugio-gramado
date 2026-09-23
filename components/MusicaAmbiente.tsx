"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

const PAUSE_AFTER_TRACK = 15_000;

function MusicIcon({ muted }: { muted: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
    >
      <path d="M5 9v6h3l4 3V6L8 9H5Z" strokeLinecap="round" strokeLinejoin="round" />
      {!muted && (
        <path d="M16 9.5c1.2 1.4 1.2 3.6 0 5" strokeLinecap="round" />
      )}
      {muted && <path d="m16 9 4 6m0-6-4 6" strokeLinecap="round" />}
    </svg>
  );
}

export default function MusicaAmbiente() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const replayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mutedRef = useRef(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.32;
    audio.muted = false;

    const startAfterInteraction = () => {
      void audio.play().catch(() => {
        // O navegador pode bloquear o autoplay; o botão continua disponível.
      });
    };

    startAfterInteraction();
    window.addEventListener("pointerdown", startAfterInteraction, { once: true });
    window.addEventListener("keydown", startAfterInteraction, { once: true });

    return () => {
      window.removeEventListener("pointerdown", startAfterInteraction);
      window.removeEventListener("keydown", startAfterInteraction);
      if (replayTimerRef.current) clearTimeout(replayTimerRef.current);
    };
  }, []);

  const handleEnded = () => {
    setIsPlaying(false);
    if (replayTimerRef.current) clearTimeout(replayTimerRef.current);

    replayTimerRef.current = setTimeout(() => {
      const audio = audioRef.current;
      if (!audio || mutedRef.current) return;

      replayTimerRef.current = null;
      audio.currentTime = 0;
      void audio.play().catch(() => {
        // Se a reprodução for bloqueada, o controle manual segue disponível.
      });
    }, PAUSE_AFTER_TRACK);
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      if (replayTimerRef.current) {
        clearTimeout(replayTimerRef.current);
        replayTimerRef.current = null;
      }

      mutedRef.current = false;
      setIsMuted(false);
      audio.muted = false;
      if (audio.ended) audio.currentTime = 0;
      void audio.play().catch(() => {
        // O clique já fornece a interação necessária para o navegador.
      });
      return;
    }

    const nextMuted = !isMuted;
    mutedRef.current = nextMuted;
    setIsMuted(nextMuted);
    audio.muted = nextMuted;
  };

  const label = !isPlaying
    ? "Ativar música da cabana"
    : isMuted
      ? "Ativar som da cabana"
      : "Silenciar música da cabana";

  return (
    <>
      <audio
        ref={audioRef}
        src={asset("/audio/musica-da-cabana.mp3")}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={label}
        title={label}
        className="fixed bottom-32 right-4 z-50 inline-flex min-h-11 items-center gap-2 rounded-full border border-linha bg-surface/90 px-4 py-3 text-sm font-medium text-amber-claro shadow-xl shadow-black/40 backdrop-blur-md transition-colors hover:border-amber/70 hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:bottom-6 lg:right-6"
      >
        <MusicIcon muted={isMuted || !isPlaying} />
        <span>{!isPlaying ? "Ativar música" : isMuted ? "Som desligado" : "Música ambiente"}</span>
      </button>
    </>
  );
}
