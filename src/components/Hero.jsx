import React from "react";

const Hero = () => {
  return (
    <>
      <section className="flex items-center" id="hero-section">
        <div className="wrapper flex flex-col pt-32 sm:pt-36 lg:pt-36 xl:pt-40 pb-12 xsm:pb-16 md:pb-20">
          <h1 className="max-w-[19ch] mb-8 lg:mb-12">
            Sua biblioteca de ferramentas para{" "}
            <span className="text-indigo-400">Devs Frontend</span> e{" "}
            <span className="text-purple-400">Web Designers</span>.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-[48ch] text-neutral-200">
            Explore uma coleção de ferramentas selecionadas que ajudarão você a
            crescer como desenvolvedor e designer.
          </p>
          <a
            href="https://forms.gle/Rh2qCEwa7H3DAUQ26"
            target="_blank"
            className="w-fit md:hidden flex items-center gap-1 text-base sm:text-lg font-medium bg-indigo-700 px-3 xsm:px-4 py-3 xsm:py-3 rounded-lg mt-8 transition-colors cursor-pointer"
          >
            <span className="shrink-0 xsm:mb-[2px]">Indique um Card</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 -960 960 960"
              fill="#fff"
              className="w-[18px] sm:w-5"
            >
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
