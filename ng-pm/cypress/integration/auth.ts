describe('Authentication', () => {
  const token = {
    access_token:
      // tslint:disable-next-line:max-line-length
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJydW5vQGVtYWlsLmNvbSIsInBhc3N3b3JkIjoiYnJ1bm8iLCJpYXQiOjE1MjgyNjc1MTQsImV4cCI6MTU3MTQ2NzUxNH0.YC2ncDMCSQ0LLaGR2fwa13GupASSqUhaV0byJtUkrmc'
  };

  beforeEach(() => {
    cy.visit('/');
    cy.server();
  });

  it('should navigate to login page when clicking on Login navigation button', () => {
    cy.get('[data-cy=loginNavButton]').click();
    cy.get('h2').should('contain', 'Login');
  });

  it('should login with valid credentials', () => {
    cy.route({
      method: 'POST',
      url: '/auth/login',
      response: token
    });
    cy.get('[data-cy=loginNavButton]').click();
    cy.get('#emailInput').type('bruno@email.com');
    cy.get('#passwordInput').type('bruno');
    cy.get('[data-cy=loginButton]').click();
    cy.get('h1').should('contain', 'Welcome to bbv Project Manager!');
    cy.get('[data-cy=loginNavButton]').should('contain', 'bruno@email.com');
  });

  it('should fail when providing invalid credentials', () => {
    cy.route({
      method: 'POST',
      url: '/auth/login',
      response: 401
    });
    cy.get('[data-cy=loginNavButton]').click();
    cy.get('#emailInput').type('hacker@email.com');
    cy.get('#passwordInput').type('LetMeIn');
    cy.get('[data-cy=loginButton]').click();
    cy.get('.failureMessage').should('contain', 'Login failed');
  });
});
