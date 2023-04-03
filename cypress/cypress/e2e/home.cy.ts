describe("<Home/>", () => {
  it("should load page", () => {
    cy.visit("/");
    cy.get("header").should("contain", "Wesley Bruno Barbosa Silva");
  });

  it("clicar no botao de login", () => {
    cy.visit("/");

    cy.get('button[data-testid="increment-btn"]').click();
    cy.get('span[data-testid="count-value"]').contains(1);
  });
});
