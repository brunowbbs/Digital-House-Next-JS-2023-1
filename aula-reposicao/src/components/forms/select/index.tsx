import { useFormContext } from "react-hook-form";

type InputProps = {
  placeholder: string;
  name: string;
};

export default function Select({ placeholder, name }: InputProps) {
  const {
    register,
    setValue,
    setFocus,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <select
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
        onChange={(event) => {
          setValue("email", event.target.value);
          setFocus("senha");
        }}
      >
        <option value="engwesleybruno@gmail.com">Wesley</option>
        <option value="ana@gmail.com">Ana</option>
        <option value="joao@gmail.com">João</option>
      </select>
      {errors[name] && <span>{String(errors[name]?.message)}</span>}
    </>
  );
}
