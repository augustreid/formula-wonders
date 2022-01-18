describe("latest race results page", () => {

  beforeEach(() => {
   cy.intercept("http://ergast.com/api/f1/2022.json", 
    {
      "MRData": {
        "xmlns": "http://ergast.com/mrd/1.4",
        "series": "f1",
        "url": "http://ergast.com/api/f1/current/last/results.json",
        "limit": "30",
        "offset": "0",
        "total": "19",
        "RaceTable": {
          "season": "2021",
          "round": "22",
          "Races": [
            {
              "season": "2021",
              "round": "22",
              "url": "http://en.wikipedia.org/wiki/2021_Abu_Dhabi_Grand_Prix",
              "raceName": "Abu Dhabi Grand Prix",
                "Circuit": {
                "circuitId": "yas_marina",
                "url": "http://en.wikipedia.org/wiki/Yas_Marina_Circuit",
                "circuitName": "Yas Marina Circuit",
                  "Location": {
                  "lat": "24.4672",
                  "long": "54.6031",
                  "locality": "Abu Dhabi",
                  "country": "UAE"
                  }
                },
              "date": "2021-12-12",
              "time": "13:00:00Z",
              "Results": [
              {
                "number": "33",
                "position": "1",
                "positionText": "1",
                "points": "26",
                "Driver": {
                  "driverId": "max_verstappen",
                  "permanentNumber": "33",
                  "code": "VER",
                  "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                  "givenName": "Max",
                  "familyName": "Verstappen",
                  "dateOfBirth": "1997-09-30",
                  "nationality": "Dutch"
                },
                "Constructor": {
                  "constructorId": "red_bull",
                  "url": "http://en.wikipedia.org/wiki/Red_Bull_Racing",
                  "name": "Red Bull",
                  "nationality": "Austrian"
                },
                "grid": "1",
                "laps": "58",
                "status": "Finished",
                "Time": {
                  "millis": "5417345",
                  "time": "1:30:17.345"
                },
                "FastestLap": {
                "rank": "1",
                "lap": "39",
                  "Time": {
                  "time": "1:26.103"
                  },
                "AverageSpeed": {
                  "units": "kph",
                  "speed": "220.800"
                  }
                }
              },
              {
              "number": "44",
              "position": "2",
              "positionText": "2",
              "points": "18",
              "Driver": {
                "driverId": "hamilton",
                "permanentNumber": "44",
                "code": "HAM",
                "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                "givenName": "Lewis",
                "familyName": "Hamilton",
                "dateOfBirth": "1985-01-07",
                "nationality": "British"
              },
              "Constructor": {
                "constructorId": "mercedes",
                "url": "http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One",
                "name": "Mercedes",
                "nationality": "German"
              },
              "grid": "2",
              "laps": "58",
              "status": "Finished",
              "Time": {
                "millis": "5419601",
                "time": "+2.256"
              },
              "FastestLap": {
                "rank": "3",
                "lap": "43",
                "Time": {
                  "time": "1:26.615"
                },
              "AverageSpeed": {
              "units": "kph",
              "speed": "219.495"
              }
            }
        }]
      }]
    }
  }
})
   cy.visit("http://localhost:3000/race-results/")
  });

  it("should visit the race results page and render the correct elements", () => {
    cy.get("a")
        .contains("Formula")
      .get("a")
         .contains("Wonders")
      .get(".results")
      .get("nav")
  })

  it("Should display the results from the most recent race", () => {
    cy.get("h2")
        .should("contain", "Latest Race Results")
      .get("ol")
      .get("li")
        .should("contain", "Max Verstappen")
      .get("li")
        .should("contain", "Lewis Hamilton")
  })

  it("should be able to navigate back to the home page by clicking the header", () => {
    cy.get("header")
      .get("a")
      .get("h1")
      .contains("Formula")
      .click()
  })

  it("should be able to click a link in side nav to visit drivers page", () => {
    cy.get("nav")
        .get("a")
          .contains("Drivers")
          .click()
  })

  it("should be able to click a link in side nav to visit schedule page", () => {
    cy.get("nav")
       .get("a")
          .contains("Schedule")
          .click()
  });

})