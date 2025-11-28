"use client";

import { Play } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function Hero() {
  const t = useTranslations("Home.hero");

  const slides = [
    {
      bg: "/images/show-kuduro.png",
      tag: "AO VIVO",
      subtitle: "Debate Especial",
      title: "LIVE: O Futuro da Música Urbana em Angola",
      description:
        "Uma conversa inspiradora com as novas vozes de cultura angolana. Entre ao vivo, participe do chat e faça parte desta experiência premium.",
      actionLabel: "Assistir transmissão",
      detailsLabel: "Ver detalhes do evento",
      schedule: "Hoje, 21h00",
      priceInfo: "Pago • Acesso exclusivo",
      language: "Português (AO)",
      cardImage: "/images/show-kuduro.png",
      badge: "VIP",
      cardDescription: "Com os maiores nomes do rap e kuduro angolano",
      viewers: 3254,
    },
    {
      bg: "/images/evento-corporativo.png",
      tag: "AO VIVO",
      subtitle: "Mesa Redonda",
      title: "LIVE: Economia Criativa e Entretenimento",
      description:
        "Especialistas debatem os novos caminhos do entretenimento digital.",
      actionLabel: "Assistir agora",
      detailsLabel: "Ver detalhes",
      schedule: "Hoje, 20h00",
      priceInfo: "Gratuito",
      language: "Português (AO)",
      cardImage: "/images/evento-corporativo.png",
      badge: "VIP",
      cardDescription: "Participação dos maiores produtores de Angola",
      viewers: 1402,
    },
  ];

  return (
    <section className="min-h-screen w-full">
      <Swiper
        speed={1000}
        loop
        autoplay={{ delay: 8000 }}
        modules={[Autoplay]}
        className=""
        >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="min-h-screen w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}>
              <div className="flex-1 w-full p-24 flex items-center justify-center h-full bg-dark/80 backdrop-blur-md">
                <div className="max-w-7xl w-full flex justify-center items-center gap-16">
                  <div className="flex flex-col gap-8 max-w-xl">
                    <div className="flex gap-2 items-center text-sm">
                      <span className="px-3 py-1 bg-primary rounded-full font-semibold animate-pulse">
                        {slide.tag}
                      </span>
                      <span className="text-accent">{slide.subtitle}</span>
                    </div>

                    <h1 className="font-bold text-4xl">{slide.title}</h1>

                    <p className="text-white/70">{slide.description}</p>

                    <div className="flex items-center gap-4">
                      <button className="btn-primary px-4 py-2">
                        <Play size={16} /> {slide.actionLabel}
                      </button>

                      <button className="btn-secondary px-4 py-2">
                        {slide.detailsLabel}
                      </button>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-white/70">
                      <span>{slide.schedule}</span>•
                      <span>{slide.priceInfo}</span>•
                      <span>{slide.language}</span>
                    </div>
                  </div>

                  <div className="w-1/2 h-125 rounded-4xl relative object-fill">
                    <Image
                      src={slide.cardImage}
                      alt={slide.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-4xl"
                    />

                    <div className="flex flex-col gap-2 w-full absolute bottom-0 left-0 bg-linear-to-b from-0% to-dark px-6 py-4 rounded-b-4xl">
                      <span className="px-3 py-1 bg-linear-to-r from-yellow-700 via-accent to-yellow-400 rounded-full font-semibold text-dark w-fit">
                        {slide.badge}
                      </span>

                      <div className="flex w-full justify-between gap-4 text-xs text-white/80">
                        <p>{slide.cardDescription}</p>

                        <div className="flex gap-2 items-center text-center">
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                          <p>{slide.viewers} espectadores</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
