/// <reference types="cypress" />

const BASE_URL = 'http://192.168.0.117:8888/api/'
describe('creating seed data', () => {
  beforeEach(() => {
    cy.request("POST",BASE_URL + 'auth/login', {email: 'c@c.com', password: 'ccc'})
  })
  it('create seed data', () => {
    cy.request("GET",BASE_URL + 'auth/token').then(res => console.log(res))
  })
})