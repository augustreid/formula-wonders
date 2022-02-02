
describe("driver info page", () => {

  beforeEach(() => {
    cy.intercept("http://ergast.com/api/f1/seasons.json?limit=100", {
        "MRData": {
          "xmlns": "http://ergast.com/mrd/1.4",
          "series": "f1",
          "url": "http://ergast.com/api/f1/seasons.json",
          "limit": "100",
          "offset": "0",
          "total": "73",
          "SeasonTable": {
          "Seasons": [
            {
            "season": "2019",
            "url": "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship"
            },
            {
            "season": "2020",
            "url": "https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship"
            }]
          }
        }
    })

    cy.visit("http://localhost:3000/formula-wonders/drivers")
  })



  it("should visit the drivers page and render correct elements", () => {
      cy.get("a")
        .contains("Formula")
      .get("a")
         .contains("Wonders")
      .get("select")
      .get("nav")
  })

  it("should be able to select a year and then a driver from that season", () => {
    cy.get("select")
        .should("contain", "--Please Select a Year--")
        .select("2020")

    cy.intercept("https://ergast.com/api/f1/2020/drivers.json", {
        "MRData": {
          "xmlns": "http://ergast.com/mrd/1.4",
          "series": "f1",
          "url": "http://ergast.com/api/f1/2020/drivers.json",
          "limit": "30",
          "offset": "0",
          "total": "23",
          "DriverTable": {
          "season": "2020",
          "Drivers": [
            {
            "driverId": "albon",
            "permanentNumber": "23",
            "code": "ALB",
            "url": "http://en.wikipedia.org/wiki/Alexander_Albon",
            "givenName": "Alexander",
            "familyName": "Albon",
            "dateOfBirth": "1996-03-23",
            "nationality": "Thai"
            },
            {
            "driverId": "bottas",
            "permanentNumber": "77",
            "code": "BOT",
            "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
            "givenName": "Valtteri",
            "familyName": "Bottas",
            "dateOfBirth": "1989-08-28",
            "nationality": "Finnish"
            }]
          }
        }
     })

     cy.get(".driver-name")
            .should("contain", "--Please Select a Driver--")
            .select("Valtteri Bottas")

     cy.get(".lookup-driver")
          .should("contain", "Lookup Driver")
          .click()
  })

  it("should be able to display the specific driver's info based on the url", () => {
      cy.visit("http://localhost:3000/formula-wonders/drivers/bottas")
        .get("h3")
          .should("contain", "Valtteri Bottas")
        .get("ul")
          .should("contain", "Mercedes")
        .get("button")
        .should("contain", "Learn More")
        .click()
  })

   it("should be able to navigate back to the home page by clicking the header", () => {
    cy.get("header")
      .get("a")
      .get("h1")
      .contains("Formula")
      .click()
  })

  it("should be able to click a link in side nav to visit race results page", () => {
    cy.get("nav")
        .get("a")
          .contains("Race Results")
          .click()
  })

  it("should be able to click a link in side nav to visit schedule page", () => {
    cy.get("nav")
       .get("a")
          .contains("Schedule")
          .click()
  });
})