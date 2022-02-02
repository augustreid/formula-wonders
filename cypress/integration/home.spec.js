
describe("Formula Wonders home page", () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/formula-wonders');
  });

  it("should be able to visit the home page and render the correct elements", () => {  
    cy.get("a")
      .get("h1")
        .contains("Formula")
      cy.get("h1")
        .contains("Wonders")

    cy.get("section")
      .get("a")
        .contains("Schedule")
      .get("a")
        .contains("Drivers")
      .get("a")
        .contains("Race Results")
  })

  it("should be able to click on an icon to view the schedule page", () => {
    cy.get("section")
      .get("a")
        .contains("Schedule")
        .click()
  })

    it("should be able to click on an icon to view the drivers page", () => {
    cy.get("section")
      .get("a")
        .contains("Drivers")
        .click()
  })

    it("should be able to click on an icon to view the Race Results page", () => {
    cy.get("section")
      .get("a")
        .contains("Race Results")
        .click()
  })

  it("should display a 404 error if the user tries an undefined route", () => {
    cy.visit("http://localhost:3000/formula-wonders/whoops")
    
    cy.get("h2")
        .should("contain", "404 Page Not Found")
      .get("a")
        .contains("Back to the Pit Lane")
        .click()
  })
})