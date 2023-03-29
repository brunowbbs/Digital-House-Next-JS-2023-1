import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/components/forms/input";
import Select from "@/components/forms/select";
import { userSchema } from "@/schemas";
import { UseFormType } from "@/types";

export default function Home() {
  const methods = useForm<UseFormType>({ resolver: yupResolver(userSchema) });

  function submit() {
    alert("Ok");
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
        <Input placeholder="Email" name="email" />
        <Input placeholder="Senha" name="senha" />
        <Select placeholder="Selecione um usuario" name="user" />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}
