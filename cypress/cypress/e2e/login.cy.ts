const EMAIL = "teste@teste.com";
const SENHA = "123";

const WRONGEMAIL = "teste@com";
const WROGNSENHA = "1234";

describe("<Home/>", () => {
  it("teste da funcionalidade de login com email e senha", () => {
    cy.visit("/login");

    cy.get("[data-cy=input-email]").type(WRONGEMAIL);
    cy.get("[data-cy=input-senha]").type(WROGNSENHA);

    cy.get("button").click();

    cy.get("[data-cy=error-message]").contains("Nome ou senha invalido(s)");

    cy.get("[data-cy=input-email]").clear();
    cy.get("[data-cy=input-senha]").clear();

    cy.get("[data-cy=input-email]").type(EMAIL);
    cy.get("[data-cy=input-senha]").type(SENHA);

    cy.get("button").click();

    cy.url().should("include", "/home");
  });
});
