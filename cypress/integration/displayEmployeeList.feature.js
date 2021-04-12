describe("Display list of employees", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("display a header", () => {
    cy.get("[data-cy=header]").should("contain", "Employee List");
  });

  it("displays a list with 6 items", () => {
    cy.get("[data-cy=employee-list]").within(() => {
      cy.get("[data-cy=employee-item]").should("have.length", 6);
    });
  });
  
  it("the list items display the expected content", () => {
    cy.get("[data-cy=employee-list]").within(() => {
      cy.get("[data-cy=employee-item]")
      .first()
      .find("[data-cy=full-name]")
      .should("contain", "George Bluth");
    });
    it('the list items display an image',() => {
      cy.get("[data-cy=employee-list]")
      .first()
      .find("[data-cy=avatar]")
      .should('be.visible')
    })
  });
});

