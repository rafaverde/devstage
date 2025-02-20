import { Button } from "@/components/button";
import { InputRoot, InputIcon, InputField } from "@/components/input";
import { User, Mail, ArrowRight } from "lucide-react";

export function SubscriptionForm() {
  return (
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

          <InputField name="name" type="text" placeholder="Nome completo" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>

          <InputField name="email" type="email" placeholder="Seu e-mail" />
        </InputRoot>

        <Button type="submit">
          Confirmar
          <ArrowRight />
        </Button>
      </div>
    </form>
  );
}
