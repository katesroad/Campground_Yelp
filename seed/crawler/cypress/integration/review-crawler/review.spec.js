/// <reference types="cypress" />

describe("crawling reviews for campgrounds", () => {
  beforeEach(() => {
    // get authentication token
    cy.request("POST", "http://192.168.0.117:8888/api/auth/login", {
      email: "c@c.com",
      password: "ccc",
    });
    cy.request("GET", "http://192.168.0.117:8888/api/auth/token");
  });

  it("get campgrounds list", async () => {
    await cy
      .request("GET", "http://192.168.0.117:8888/api/campgrounds")
      .then((res) => {
        const { data: campgrounds } = res.body;
        const query = campgrounds.map((campground) => {
          const { id, title, location } = campground;
          return { id, query: encodeURIComponent(`${title},${location}`) };
        });
        cy.writeFile('query.json', JSON.stringify(query))
      });
  });

  
});
