import { Card } from "./card";
import background from "/background.png";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { PiFolders } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { MdBalance } from "react-icons/md";
import { useState } from "react";

export const Main = () => {
  const [colorActived, setColorActived] = useState<number | null>(null);
  const diplomas = [
    "Medicina",
    "Med. Veterinária",
    "Odontologia",
    "Direito",
    "Administração",
    "Psicologia",
    "Arquitetura",
    "Filosofia",
    "Física",
    "Química",
    "Biologia",
    "Enfermagem",
    "Agrimensura",
    "Economia",
  ];
  return (
    <main className="h-full w-full">
      <section
        className="m-auto max-w-5xl bg-black bg-cover bg-[-390px_top] bg-no-repeat px-4 py-32 sm:bg-right-top"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="max-w-sm space-y-5">
          <p className="text-sm text-[#CF9A2A]">Bem-vindo</p>
          <h1 className="text-2xl font-bold">
            Revalidação de Diplomas Estrangeiros no Brasil
          </h1>
          <p className="text-sm font-thin">
            Revalidamos seu diploma estrangeiro de graduação, mestrado ou
            doutorado no Brasil com suporte completo para tornar o processo
            rápido e eficiente.
          </p>
          <button className="cursor-pointer rounded-md bg-[#CF9A2A] px-5 py-2 text-xs font-semibold transition-all duration-300 hover:bg-white hover:text-[#CF9A2A] active:bg-orange-200">
            Entrar em contato
          </button>
        </div>
      </section>
      <section className="m-auto max-w-5xl px-4 py-20" id="areasActivity">
        <p className="mb-7 text-sm font-normal text-[#CF9A2A]">
          {" "}
          Áreas de atuação
        </p>
        <div className="flex flex-wrap">
          <h2 className="max-w-52 text-2xl font-semibold lg:max-w-72">
            Revalidamos diplomas nas seguintes áreas:
          </h2>
          <div className="m-auto flex max-w-lg flex-wrap justify-center gap-5 py-10 sm:py-0">
            {diplomas.map((diploma, index) => (
              <p
                key={index}
                className={`w-32 min-w-32 rounded-3xl border border-[#CF9A2A] py-2 text-center text-sm font-thin transition-all duration-500 hover:bg-[#CF9A2A] ${colorActived === index ? "bg-[#CF9A2A]" : ""}`}
                onClick={() =>
                  setColorActived(colorActived === index ? null : index)
                }
              >
                {diploma}
              </p>
            ))}
          </div>
        </div>
        <p className="text-sm font-extralight md:-mt-32 md:max-w-56">
          Se você possui um diploma estrangeiro de graduação, mestrado ou
          doutorado e deseja revalidá-lo no Brasil, estamos aqui para ajudar.
          Oferecemos suporte completo para a escolha da universidade brasileira
          mais adequada ao seu caso, tornando o processo mais rápido e
          eficiente.
        </p>
      </section>

      <section className="bg-white" id="howWork">
        <div className="m-auto max-w-5xl space-y-8 px-4 py-20 text-black">
          <div className="space-y-1">
            <p className="text-sm text-[#CF9A2A]">O caminho para o sucesso</p>
            <h2 className="text-2xl font-bold">Como Funciona?</h2>
            <p className="max-w-96 text-sm font-light">
              Descubra como facilitamos cada etapa, garantindo sucesso em sua
              jornada acadêmica internacional
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-evenly gap-x-2 gap-y-8 py-10">
            <Card
              icon={<HiOutlineAcademicCap />}
              heading={"Assessoria Personalizada na Escolha da Universidade"}
              paragraph={
                "Para a escolha da universidade que já validou diplomas da sua instituição de origem"
              }
            />
            <Card
              icon={<PiFolders />}
              heading={
                "Orientação sobre Documentos Necessários para o Processo"
              }
              paragraph={
                "Instruções detalhadas sobre os documentos necessários para o processo"
              }
            />
            <Card
              icon={<TbWorld />}
              heading={
                "Isenção de Tradução para Documentos com Apostilamento de Haia"
              }
              paragraph={
                "Tradução desnecessária para documentos em inglês, francês ou espanhol, desde que possuam o Apostilamento de Haia"
              }
            />
            <Card
              icon={<MdBalance />}
              heading={"Acompanhamento Completo e Suporte Jurídico"}
              paragraph={
                "Acompanhamento completo, incluindo suporte jurídico, se necessário"
              }
            />
          </div>
        </div>
      </section>
    </main>
  );
};
