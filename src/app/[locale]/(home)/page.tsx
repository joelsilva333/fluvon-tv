import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Home.hero");
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>{t("title")}</h1>
      <p>{t("welcome_message")}</p>
    </div>
  );
}
