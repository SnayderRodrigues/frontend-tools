import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "/public/logo-test.svg";

const Footer = () => {
  const { pathname } = useLocation();
  const scrollToTop = () => window.scrollTo({ top: 0 });

  const isResourcePath = pathname.startsWith("/resources/");

  return (
    <footer className="border-t-2 border-t-neutral-800">
      <div
        className={`wrapper relative flex flex-col md:flex-row justify-between gap-16 pt-16 ${
          isResourcePath ? "pb-8" : "pb-28"
        } md:pb-8`}
      >
        <div className="flex flex-col justify-between gap-4 md:gap-12">
          <div className="flex flex-col gap-4">
            <a href="/" className="group w-fit flex items-center gap-4 mb-4">
              <img
                src={Logo}
                alt="Logo"
                width={60}
              />
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Weblioteca
              </div>
            </a>
            <p className="max-w-[40ch] text-base md:text-lg lg:text-xl text-neutral-200">
              Uma coleção selecionada de recursos de desenvolvimento e design,
              frequentemente atualizada para a comunidade.
            </p>
          </div>
          <div className="text-base font-medium">
            © 2024{" "}
            <a
              href="https://snayderrodrigues.vercel.app/"
              target="_blank"
              className="font-semibold text-indigo-300 hover:text-white transition-colors"
            >
              Snayder Rodrigues
            </a>
          </div>
        </div>
        <div className="shrink-0 flex flex-col gap-4 text-lg lg:text-xl font-medium">
          <Link
            to="/"
            className="w-fit md:hover:text-indigo-300 transition-colors"
            onClick={scrollToTop}
          >
            Início
          </Link>
          <Link
            to="/about"
            className="w-fit md:hover:text-indigo-300 transition-colors"
            onClick={scrollToTop}
          >
            Sobre
          </Link>
          <Link
            to="/legal"
            className="w-fit md:hover:text-indigo-300 transition-colors"
            onClick={scrollToTop}
          >
            Termos Legais
          </Link>
          <a
            href="https://forms.gle/Rh2qCEwa7H3DAUQ26"
            target="_blank"
            className="w-fit md:hover:text-indigo-300 transition-colors"
          >
            Indique uma Ferramenta
          </a>
        </div>
        <button
          className={`w-fit absolute ${
            isResourcePath ? "bottom-8" : "bottom-28"
          } right-0 flex md:hidden items-center gap-1 bg-neutral-900 p-3 border-2 border-neutral-800 rounded-xl`}
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 -960 960 960"
            fill="#fff"
          >
            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
