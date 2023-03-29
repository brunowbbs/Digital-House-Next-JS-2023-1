import * as Yup from "yup";
import Input from "@/components/forms/input";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormProvider, useForm } from "react-hook-form";
import Select from "@/components/forms/select";

const MANDATORY_FIELD = "Campo obrigatório";
const ERROR_EMAIL = "E-mail inválido";

const schema = Yup.object().shape({
  email: Yup.string().email(ERROR_EMAIL).required(MANDATORY_FIELD),
  senha: Yup.string().required(MANDATORY_FIELD),
});

export type FormType = {
  name: string;
  email: string;
  user: string;
};

export default function Home() {
  const methods = useForm<FormType>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <main style={{ padding: 30 }}>
        <h1>Meu formulário</h1>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Input placeholder="E-mail" name="email" />
            <Input placeholder="Senha" name="senha" />
            <br />
            <Select placeholder="Selecione o usuário" name="user" />
            <button color="primary" type="submit">
              Enviar
            </button>
          </form>
        </FormProvider>
      </main>
    </>
  );
}
