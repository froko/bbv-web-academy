describe('PM Web Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display welcome message', () => {
    cy.get('h1').should('contain', 'Welcome to bbv Project Manager!');
  });
});
