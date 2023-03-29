import { useFormContext } from "react-hook-form";

type InputProps = {
  placeholder: string;
  name: string;
};

export default function Select({ placeholder, name }: InputProps) {
  const {
    register,
    formState: { errors },
    setFocus,
    setValue,
  } = useFormContext();

  return (
    <>
      <select
        {...register(name)}
        placeholder={placeholder}
        style={{
          height: 40,
          padding: "0 10px",
          border: "1px solid #999",
          borderRadius: 8,
          width: "100%",
        }}
        onChange={(event) => {
          setValue("email", event.target.value);
          setFocus("senha");
        }}
      >
        <option value="wesley@gmail.com">Wesley</option>
        <option value="joao@gmail.com">Joao</option>
        <option value="ana@gmail.com">Ana</option>
      </select>

      {errors[name] && <span> {String(errors[name]?.message)}</span>}
    </>
  );
}
