import { Link } from "@/src/i18n/navigation";
import { Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center min-h-80 w-full py-12">
      <div className="flex max-w-7xl flex-col gap-12 w-full items-center">
        <div className="flex w-full justify-between">
          <ul className="max-w-xs w-full text-sm text-white/80 flex flex-col gap-3">
            <li>
              <Image
                src={"/logos/text-original-v2.png"}
                alt={"Logotipo"}
                width={5000}
                height={2000}
                className="w-44 object-contain"
              />
            </li>

            <li>
              Não perca nenhuma novidade das lives mais quentes de Angola.
            </li>
          </ul>

          <ul className=" text-sm text-white/80 flex flex-col gap-3">
            <li className="flex flex-col gap-4 font-semibold text-base text-white">
              Menu
            </li>

            <li className="hover:scale-105 transition-all duration-300">
              <Link href={"#"}>Ao Vivo</Link>
            </li>

            <li className="hover:scale-105 transition-all duration-300">
              <Link href={"#"}>Sobre nós</Link>
            </li>

            <li className="hover:scale-105 transition-all duration-300">
              <Link href={"#"}>Como funciona?</Link>
            </li>
          </ul>

          <ul className=" text-sm text-white/80 flex flex-col gap-3">
            <li className="flex flex-col gap-4 font-semibold text-base text-white">
              Explorar
            </li>

            <li className="hover:scale-105 transition-all duration-300">
              <Link href={"#"}>Categorias</Link>
            </li>

            <li className="hover:scale-105 transition-all duration-300">
              <Link href={"#"}>Criadores em destaque</Link>
            </li>

            <li className="hover:scale-105 transition-all duration-300">
              <Link href={"#"}>Ajuda</Link>
            </li>
          </ul>

          <ul className=" text-sm text-white/80 flex flex-col gap-4 max-w-xs w-full">
            <li className="flex flex-col gap-2">
              <h1 className="flex flex-col gap-4 font-semibold text-base text-white">
                Boletim informativo
              </h1>

              <p className="text-white/80">Não perca nenhuma novidade.</p>
            </li>

            <li className="w-full">
              <form className="flex justify-between bg-black rounded-4xl gap-2 w-full px-4 py-2">
                <input
                  type="text"
                  className="outline-none placeholder:text-white/70"
                  placeholder="Insira o seu e-mail"
                />

                <button type="submit" className="cursor-pointer">
                  <Send className="text-primary" />
                </button>
              </form>
            </li>
          </ul>
        </div>

     

        <div className="flex justify-between items-center text-sm text-white/80 w-full">
          <p>
            {" "}
            © {new Date().getFullYear()} Fluvon TV. Todos os direitos
            reservados.
          </p>

          <span className="flex gap-3 justify-center items-center">
            <Link
              href={"#"}
              className="hover:scale-105 transition-all duration-300">
              Termos de Uso
            </Link>
            •
            <Link
              href={"#"}
              className="hover:scale-105 transition-all duration-300">
              Política de Privacidade
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
