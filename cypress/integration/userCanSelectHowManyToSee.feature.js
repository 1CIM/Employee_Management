describe("Displays selected amount of employees", () => {
  before("visit the page", () => {
    cy.visit("/")
  })  
  it("displays a list with 12 items", () => {
    cy.get("[data-cy=employee-list]").within(() => {
      cy.get("[data-cy=employee-item]").should("have.length", 12);
    });
  });

  it('is expected to show the number of items user selects', () => {
    cy.get('[data-cy=item-count-selector]').select('4')
    cy.get("[data-cy=employee-list]").children().should("have.length", 4);
  });
})
