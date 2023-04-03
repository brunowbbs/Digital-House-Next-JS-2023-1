import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <>
      <main>
        <header>
          <h1>Wesley Bruno Barbosa Silva</h1>
        </header>

        <span data-testid="count-value">{value}</span>

        <button
          data-testid="increment-btn"
          onClick={() => setValue((previous) => previous + 1)}
        >
          Clicar
        </button>
      </main>
    </>
  );
}
