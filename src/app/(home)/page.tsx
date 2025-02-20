import Image from "next/image";
import devStageLogo from "../../assets/logo.svg";

import { Radio } from "lucide-react";
import { SubscriptionForm } from "./subscription-form";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col gap-10 md:justify-center md:gap-16">
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

        <SubscriptionForm />
      </section>
    </div>
  );
}
