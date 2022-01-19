
describe("Formula Wonders home page", () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000');
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
    cy.visit("http://localhost:3000/whoops")
    
    cy.get("h2")
        .should("contain", "404 Page Not Found")
      .get("a")
        .contains("Back to the Pit Lane")
        .click()
  })

  //  it("should display an error if there is a server issue", () => {      
  //     cy.intercept("http://ergast.com/api/f1/current/last/results.JSON", {
  //     method: "GET",
  //     status: 500,
  //     ok: false,
  //     body: {}
  //   })
  //     cy.visit("http://localhost:3000/race-results")
  //       // .get("p")
  //       // .should("contain", "Sorry, something went wrong! Please try again.")
  // })
})