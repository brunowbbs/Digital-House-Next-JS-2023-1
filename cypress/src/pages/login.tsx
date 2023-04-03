import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const { push } = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [error, setError] = useState(false);

  function handleLogin() {
    setError(false);
    if (email === "teste@teste.com" && senha === "123") {
      push("/home");
    } else {
      setError(true);
    }
  }

  return (
    <>
      <main>
        <h1>Entre com seus dados para fazer o login</h1>
        {error && <h2 data-cy="error-message">Nome ou senha invalido(s)</h2>}
        <br />
        <input
          data-cy="input-email"
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={{
            height: 40,
            padding: 10,
            width: 400,
            marginBottom: 10,
            fontSize: 15,
          }}
        />
        <br />

        <input
          // type="password"
          data-cy="input-senha"
          placeholder="Senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          style={{
            height: 40,
            padding: 10,
            width: 400,
            marginBottom: 10,
            fontSize: 15,
          }}
        />
        <br />

        <button
          style={{ height: 40, width: 200, fontSize: 15 }}
          onClick={handleLogin}
        >
          Entrar
        </button>
      </main>
    </>
  );
}
