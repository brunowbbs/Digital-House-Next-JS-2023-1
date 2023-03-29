import { useFormContext } from "react-hook-form";

type InputProps = {
  placeholder: string;
  name: string;
};

export default function Input({ placeholder, name }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        placeholder={placeholder}
        style={{
          padding: "0 10px",
          border: "1px solid #999",
          height: 38,
          width: "100%",
          borderRadius: 8,
          marginBottom: 10,
        }}
        {...register(name)}
      />
      {errors[name] && <span>{String(errors[name]?.message)}</span>}
    </>
  );
}
