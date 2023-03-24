import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { TextField, Button } from "@mui/material";
import { Box } from "@mui/system";

type UserRegister = {
  email: string;
  password: string;
};

type FormComponentProps = {
  onSubmit: () => void;
};

const schema = Yup.object({
  email: Yup.string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
  password: Yup.string()
    .min(4, "Digite pelo menos 4 caracteres")
    .required("A senha é obrigatória"),
});

export default function FormComponent({ onSubmit }: FormComponentProps) {
  const { control, handleSubmit } = useForm<UserRegister>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label="Email"
              variant="outlined"
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              label="Senha"
              variant="outlined"
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Button type="submit" variant="contained" size="large">
          Cadastrar
        </Button>
      </Box>
    </form>
  );
}
