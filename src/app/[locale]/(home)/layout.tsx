import { ReactNode } from "react";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4 text-white items-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
