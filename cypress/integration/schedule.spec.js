
describe("current season schedule page", () => {

    beforeEach(() => {
    cy.intercept("http://ergast.com/api/f1/2022.json", {
        "MRData": {
            "xmlns": "http://ergast.com/mrd/1.4",
            "series": "f1",
            "url": "http://ergast.com/api/f1/2022.json",
            "limit": "30",
            "offset": "0",
            "total": "23",
            "RaceTable": {
                "season": "2022",
                "Races": [
                    {
                    "season": "2022",
                    "round": "1",
                    "url": "https://en.wikipedia.org/wiki/2022_Bahrain_Grand_Prix",
                    "raceName": "Bahrain Grand Prix",
                    "Circuit": {
                    "circuitId": "bahrain",
                    "url": "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
                    "circuitName": "Bahrain International Circuit",
                    "Location": {
                    "lat": "26.0325",
                    "long": "50.5106",
                    "locality": "Sakhir",
                    "country": "Bahrain"
                    }
                    },
                    "date": "2022-03-20",
                    "time": "15:00:00Z"
                    },
                    {
                    "season": "2022",
                    "round": "2",
                    "url": "https://en.wikipedia.org/wiki/2022_Saudi_Arabian_Grand_Prix",
                    "raceName": "Saudi Arabian Grand Prix",
                    "Circuit": {
                    "circuitId": "jeddah",
                    "url": "http://en.wikipedia.org/wiki/Jeddah_Street_Circuit",
                    "circuitName": "Jeddah Street Circuit",
                    "Location": {
                    "lat": "21.5433",
                    "long": "39.1728",
                    "locality": "Jeddah",
                    "country": "Saudi Arabia"
                    }
                    },
                    "date": "2022-03-27",
                    "time": "17:30:00Z"
                    }]
                }
            }
        })
        cy.visit("http://localhost:3000/schedule/")
  });

  it("should visit the schedule page and render the correct elements", () => {
      cy.get("a")
            .contains("Formula")
        .get("a")
            .contains("Wonders")
  })



})