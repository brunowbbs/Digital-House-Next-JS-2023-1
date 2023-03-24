import { fireEvent, render, screen, act } from "@testing-library/react";
// import { act } from "react-dom/test-utils";
import FormComponent from ".";

describe("<FormComponent/>", () => {
  it("Verificar se a funcao nao foi chamada", async () => {
    const mockSubmit = jest.fn();

    render(<FormComponent onSubmit={mockSubmit} />);

    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.click(button);
    });

    expect(mockSubmit).not.toHaveBeenCalled();
  });

  it("Verificar se a funcao submit foi executada", async () => {
    const mockSubmit = jest.fn();

    render(<FormComponent onSubmit={mockSubmit} />);

    const inputEmail = screen.getByLabelText(/email/i);
    const inputPassword = screen.getByLabelText(/senha/i);
    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.change(inputEmail, {
        target: {
          value: "teste@teste.com",
        },
      });
      fireEvent.change(inputPassword, {
        target: {
          value: "1234",
        },
      });
    });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(mockSubmit).toHaveBeenCalled();
  });

  it("Verificar se o campo de email aparece a mensagem de validacao", async () => {
    const mockSubmit = jest.fn();
    const { container } = render(<FormComponent onSubmit={mockSubmit} />);

    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.click(button);
    });

    expect(container.innerHTML).toMatch(/o email é obrigatório/i);
  });

  it("Verificar se o campo de email aparece a mensagem de validacao", async () => {
    const mockSubmit = jest.fn();
    const { container } = render(<FormComponent onSubmit={mockSubmit} />);

    const inputEmail = screen.getByLabelText(/email/i);
    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.change(inputEmail, {
        target: {
          value: "teste",
        },
      });
    });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(container.innerHTML).toMatch(/digite um email válido/i);
  });

  it("Verificar se o campo de senha aparece a mensagem de validacao", async () => {
    const mockSubmit = jest.fn();
    const { container } = render(<FormComponent onSubmit={mockSubmit} />);

    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.click(button);
    });

    expect(container.innerHTML).toMatch(/a senha é obrigatória/i);
  });

  it("Verificar se o campo de senha aparece a mensagem de validacao para a quantidade de caracteres", async () => {
    const mockSubmit = jest.fn();
    const { container } = render(<FormComponent onSubmit={mockSubmit} />);

    const inputPassword = screen.getByLabelText(/senha/i);
    const button = screen.getByRole("button");

    await act(async () => {
      fireEvent.change(inputPassword, {
        target: {
          value: "12",
        },
      });
    });

    await act(async () => {
      fireEvent.click(button);
    });

    expect(container.innerHTML).toMatch(/digite pelo menos 4 caracteres/i);
  });
});
