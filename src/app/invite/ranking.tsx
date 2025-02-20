import Image from "next/image";
import medalGold from "../../assets/medal-gold.svg";
import medalSilver from "../../assets/medal-silver.svg";
import medalCooper from "../../assets/medal-cooper.svg";

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative flex min-h-[110px] flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 px-7 py-6">
          <span className="text-sm leading-none text-gray-300">
            <strong>1º </strong>| Rafael Valverde
          </span>

          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            1304
          </span>

          <Image
            className="absolute top-0 right-8"
            src={medalGold}
            alt="gold medal"
            width={56}
          />
        </div>
        <div className="relative flex min-h-[110px] flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 px-7 py-6">
          <span className="text-sm leading-none text-gray-300">
            <strong>2º </strong>| Joaquim Valverde
          </span>

          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            1110
          </span>

          <Image
            className="absolute top-0 right-8"
            src={medalSilver}
            alt="silver medal"
            width={56}
          />
        </div>
        <div className="relative flex min-h-[110px] flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 px-7 py-6">
          <span className="text-sm leading-none text-gray-300">
            <strong>3º </strong>| Fabíola Valverde
          </span>

          <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
            134
          </span>

          <Image
            className="absolute top-0 right-8"
            src={medalCooper}
            alt="cooper medal"
            width={56}
          />
        </div>
      </div>
    </div>
  );
}
