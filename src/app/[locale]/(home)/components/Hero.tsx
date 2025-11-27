import { Play } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Home.hero");

  return (
    <section className="w-full p-24 flex items-center justify-center min-h-screen">
      <div className="max-w-7xl w-full flex justify-center items-center gap-8">
        <div className="flex flex-col gap-8 max-w-xl">
          <div className="flex gap-2 items-center text-sm">
            <span className="px-3 py-1 bg-primary rounded-full font-semibold animate-pulse">
              AO VIVO
            </span>
            <span className="text-accent">Debate Especial</span>
          </div>

          <h1 className="font-bold text-4xl">
            LIVE: O Futuro da Música Urbana em Angola
          </h1>

          <p className="text-white/50">
            Uma conversa inspiradora com as novas vozes de cultura angolana.
            Entre ao vivo, participe do chat e faça parte desta experiência
            premium.
          </p>

          <div className="flex items-center gap-4">
            <button className="btn-primary px-4 py-2">
              <Play size={16} /> Assistir transmissão
            </button>

            <button className="btn-secondary px-4 py-2">
              Ver detalhes do evento
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>Hoje, 21h00</span>•<span>Pago • Acesso exclusivo</span>•
            <span>Português (AO)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
