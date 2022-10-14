
declare namespace Cypress {
    interface Chainable {
        sendRequest(method: string, endpoint: string, alias: string, body?: any): Chainable<Element>;      
        verifyStatusCode(status: number, code: number) : Chainable<Element>;
        setAuthorId(alias : JSON) : Chainable<Element>;
    }
}

Cypress.Commands.add('sendRequest', (method: string, endpoint: string, alias: string, body?: any) => {
    cy.request(method, endpoint, body).as(alias)
   
})


Cypress.Commands.add('verifyStatusCode', (status: number, code: number) =>{
    expect(status).to.equal(code)
})