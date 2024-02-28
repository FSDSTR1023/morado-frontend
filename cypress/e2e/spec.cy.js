/* eslint-disable no-undef */

describe('My First Test', () => {
  it('Visits Hotel Manzanares', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-cy="boton-busqueda"]').click()
  })
})

'boton-busqueda'