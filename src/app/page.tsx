import Image from "next/image";
import devStageLogo from "../assets/logo.svg";
import { ArrowRight, Mail, Radio, User } from "lucide-react";
import { InputField, InputIcon, InputRoot } from "@/components/input";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="mx-auto max-w-[1240px] px-5 py-8 md:py-0">
      <div className="flex h-dvh flex-col gap-10 md:justify-center md:gap-16">
        <div className="flex flex-col items-center gap-5 md:items-start md:justify-center md:gap-8">
          <Image src={devStageLogo} alt="devStage" width={108.5} height={30} />
          <h1 className="font-heading flex flex-col text-center text-4xl leading-none font-medium text-gray-100 md:text-left md:text-7xl">
            <span className="text-blue">CodeCraft</span> Summit 2025
          </h1>
        </div>

        <section className="flex flex-col items-stretch gap-5 md:flex-row">
          <div className="flex-1 space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
                Sobre o Evento
              </h2>
              <span className="text-purple flex items-center gap-2 text-xs font-semibold uppercase">
                <Radio className="size-5" />
                Ao vivo
              </span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-gray-300 md:text-base">
              Um evento feito por e para pessoas desenvolvedoras apaixonadas por
              criar soluções inovadoras e compartilhar conhecimento. Vamos
              mergulhar nas tendências mais recentes em desenvolvimento de
              software, arquitetura de sistemas e tecnologias emergentes, com
              palestras, workshops e hackathons.
              <br />
              <br />
              Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
            </p>
          </div>

          <form
            action=""
            className="w-full space-y-6 rounded-2xl border-gray-600 bg-gray-700 p-8 md:max-w-[440px]"
          >
            <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
              Inscrição
            </h2>

            <div className="space-y-3">
              <InputRoot>
                <InputIcon>
                  <User />
                </InputIcon>

                <InputField type="text" placeholder="Nome completo" />
              </InputRoot>

              <InputRoot>
                <InputIcon>
                  <Mail />
                </InputIcon>

                <InputField type="email" placeholder="Seu e-mail" />
              </InputRoot>

              <Button type="submit">
                Confirmar
                <ArrowRight />
              </Button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
