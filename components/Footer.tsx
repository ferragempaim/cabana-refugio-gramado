import { site, linkWhatsApp } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-linha px-6 pt-16 pb-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <div className="font-serif text-2xl text-foreground">
            Cabanas Refúgio de Gramado
          </div>
          <p className="mt-2 text-sm text-muted">{site.cidade}</p>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <a
            href={site.airbnb}
            target="_blank"
            rel="noopener noreferrer"
            className="shiny rounded-full px-6 py-3 text-sm font-semibold text-background"
          >
            Reservar no Airbnb
          </a>
          <div className="flex items-center gap-5 text-sm text-muted">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-amber-claro"
            >
              Instagram
            </a>
            <a
              href={linkWhatsApp(
                "Olá! Vim pelo site da Cabana Miragem e queria tirar uma dúvida."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-amber-claro"
            >
              Dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-linha pt-6 text-center text-xs text-muted/60">
        © {new Date().getFullYear()} Cabanas Refúgio de Gramado. Todos os
        direitos reservados.
      </div>
    </footer>
  );
}
