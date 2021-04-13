describe("Displays selected amount of employees", () => {
  before("visit the page", () => {
    cy.visit("/")
  })  
  it("displays a list with 12 items", () => {
    cy.get("[data-cy=employee-list]").within(() => {
      cy.get("[data-cy=employee-item]").should("have.length", 12);
    });
  });
})
// ****** Use this code instead on line 13 in EmployeeList.jsx ******
// getEmployees = async () => {
//   let employeeData = await axios.get("https://reqres.in/api/users?per_page=12");
//   this.setState({ employees: employeeData.data.data });
// };