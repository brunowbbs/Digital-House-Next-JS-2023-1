import * as Yup from "yup";

export const userSchema = Yup.object().shape({
  email: Yup.string().email("Formato invalido").required("Campo obrigatório"),
  senha: Yup.string().required(),
});
