/* eslint-disable no-undef */

describe('Test Body', () => {
  it('Visits Hotel Manzanares', () => {
    cy.visit('/')
    cy.get('[data-cy="boton-busqueda"]').click()
  })
})

describe('Prueba de inicio de sesión', () => {
  it('Debería iniciar sesión correctamente con credenciales válidas', () => {
    // Visitar la página de inicio de sesión
    cy.visit('/login');

    // Rellenar el formulario de inicio de sesión
    cy.get('[data-cy="email"]').type('pedro.picapiedra.1@ejemplo.com');
    cy.get('[data-cy="password"]').type('ejemplo');

    // Enviar el formulario
    cy.get('[data-cy="acceder"]').click();

    // Verificar que se haya iniciado sesión correctamente
    cy.url().should('include', '/');
  });

  it('Debería mostrar un mensaje de error con credenciales inválidas', () => {
    // Visitar la página de inicio de sesión
    cy.visit('/login');

    // Rellenar el formulario de inicio de sesión con credenciales incorrectas
    cy.get('[data-cy="email"]').type('usuario@example.com');
    cy.get('[data-cy="password"]').type('contraseña_segura');

    // Enviar el formulario
    cy.get('[data-cy="acceder"]').click();

    // Verificar que se muestre un mensaje de error
    cy.contains('Credenciales incorrectas');
  });
});


