describe('Contact form', () => {
  it('shows success message after submitting', () => {
    cy.visit('index.html');

    cy.intercept('POST', 'https://script.google.com/**', {
      statusCode: 200,
      body: 'OK',
    }).as('formSubmit');

    cy.get('input[name="Name"]').type('Test User');
    cy.get('input[name="Email"]').type('test@example.com');
    cy.get('textarea[name="message"]').type('Hello from Cypress!');
    cy.get('form[name="submit-to-google-sheet"] button[type="submit"]').click();

    cy.wait('@formSubmit');
    cy.contains('#msg', 'Message sent successfully!').should('be.visible');
  });
});
