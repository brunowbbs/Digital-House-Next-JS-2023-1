import FormComponent from "@/components/form";

export default function Home() {
  function onSubmitUserRegister() {
    alert("OK");
  }

  return (
    <>
      <main style={{ padding: 30 }}>
        <FormComponent onSubmit={onSubmitUserRegister} />
      </main>
    </>
  );
}
