import { Link } from "@/src/i18n/navigation";
import { Search } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const navLinks = [
    {
      link: "#",
      title: "Ao Vivo",
    },
    {
      link: "#",
      title: "Categorias",
    },
    {
      link: "#",
      title: "Criadores",
    },
  ];

  return (
    <header className="w-full flex items-center justify-center py-4 fixed top-0 left-0">
      <nav className="w-full max-w-7xl flex items-center justify-between gap-4 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full">
        <Link href={"/"}>
          <Image
            src={"/logos/text-white.png"}
            alt=""
            width={5000}
            height={2000}
            className="object-contain w-24"
          />
        </Link>

        <div className="bg-dark rounded-full flex items-center gap-4 px-4 py-2 w-full max-w-md">
          <Search className="text-white/35" />

          <input
            type="search"
            className="text-white placeholder:text-white/35 text-sm outline-none w-full"
            placeholder="Pesquisar canais, lives, criadores..."
          />
        </div>

        <div className="flex justify-between gap-8 items-center">
          <ul className="flex items-center gap-6 text-sm text-white/70">
            {navLinks.map((item, id) => (
              <li
                key={id}
                className="hover:scale-105 transition-all duration-300 cursor-pointer">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 font-semibold">
            <Link
              href={"/login"}
              className="px-2 py-2 rounded-full hover:bg-white/10 min-w-36 text-center hover:scale-105 transition-all duration-300">
              Iniciar sessão
            </Link>

            <Link
              href={"/register/creator"}
              className="btn-primary px-4 py-2 min-w-36">
              Sou criador
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
