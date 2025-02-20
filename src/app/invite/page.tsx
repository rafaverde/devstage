import Image from "next/image";
import devStageLogo from "../../assets/logo.svg";

import { Ranking } from "./ranking";
import { InviteLinkInput } from "./invite-link-input";
import { Stats } from "./stats";

export default function InvitePage() {
  const inviteLink = "localhost:3000/invite/casdjncp34urf87sa";

  return (
    <div className="flex min-h-dvh flex-row items-center justify-between gap-16 md:flex-row">
      <div className="flex w-full max-w-[550px] flex-col gap-10">
        <Image src={devStageLogo} alt="devstage" width={108.5} height={30} />
        <div className="space-y-2">
          <h1 className="font-heading text-2xl leading-none font-semibold text-gray-100 md:text-4xl">
            Inscrição confirmada!
          </h1>
          <p className="font-sans text-sm text-gray-300 md:text-base">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
              Indique e ganhe
            </h2>
            <p className="font-sans text-sm text-gray-300 md:text-base">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats />
        </div>
      </div>

      <Ranking />
    </div>
  );
}
