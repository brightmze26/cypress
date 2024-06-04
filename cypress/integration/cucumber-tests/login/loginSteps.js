import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open login page', () => {
    cy.visit('https://demoblaze.com/')
})

When('I submit login', () => {
    cy.login('test', 'test')
})

Then('I should see homepage', () => {
    cy.visit('/')
})