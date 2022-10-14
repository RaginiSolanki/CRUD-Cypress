import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let author_id: number;

When('User sends the HTTP POST request', function () {
    cy.fixture("authorRequest").then((data) => {
        cy.sendRequest("POST", 'api/author', "CreateAuthor", data)
    })

})

Then('User receives the valid HTTP response {int} for {string}', function (code: number, alias: string) {

    cy.get<Response>(alias).then((response) => {
        cy.verifyStatusCode(response.status, code)
    });
})

Then('User receives the newly created author data', function () {
    const fields = ['id', 'name', 'books']
    cy.get<Response>('@CreateAuthor').then((response) => {
        expect(response.body).to.have.all.keys(fields)
    });
    cy.get<Response>('@CreateAuthor').its("body").its("id").then((id) => {
        author_id = id
    });

})

When('User sends the HTTP GET request', function () {
    cy.sendRequest("GET", 'api/author', "Author")
})


Then('Get the list of authors', function () {
    cy.get<Response>('@Author').then((response) => {
        assert.isArray(response.body);
    }); 1
})

When('User sends the HTTP GET request with id', function () {
    cy.sendRequest("GET", `api/author/${author_id}`, "Author")

})

Then('User receives the data of author based on the given id', function () {
    const fields = ['id', 'name', 'books']
    cy.get<Response>('@Author').then((response) => {
        expect(response.body).to.have.all.keys(fields)
    });
})

When('User sends the HTTP PUT request', function () {
    cy.fixture("authorRequest").then((data) => {
        data.name = "UpdateTest"
        cy.sendRequest("PUT", `api/author/${author_id}`, "UpdateAuthor", data)
    })
})

Then('User receives the newly updated author data', function () {
    const fields = ['id', 'name', 'books']
    cy.get<Response>('@UpdateAuthor').then((response) => {
        expect(response.body).to.have.all.keys(fields)
        expect(response.body).to.have.property('name', 'UpdateTest')
    });
})
When('User sends the HTTP DELETE request', function () {
    cy.sendRequest("DELETE", `api/author/${author_id}`, "DeleteAuthor")
})

Then('User receives the true in response', function () {

    cy.get<Response>('@DeleteAuthor').its("body").then((response) => {
        expect(response).to.be.true
    });
})

