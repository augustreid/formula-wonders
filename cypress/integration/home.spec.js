
describe("Formula Wonders home page", () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it("should be able to visit the home page and render the correct elements", () => {
    // cy.visit("http://localhost:3000/")
  
    cy.get("a")
      // .get("link")
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
    cy.get()
  })


})