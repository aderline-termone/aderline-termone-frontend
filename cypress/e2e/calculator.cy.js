describe('calculator', function () {
  beforeEach(function () {
     cy.visit('http://127.0.0.1:5173/calculator/');
  });

  it('should add two numbers', function () {
      cy.get('#key1').click();
      cy.get('#plus').click();
      cy.get('#key2').click();
      cy.get('#equals-key').click();
      cy.get('#result').should('have.value', '3');
  });

  it('should subtract two numbers', function () {
      cy.get('#key5').click();
      cy.get('#minus').click();
      cy.get('#key3').click();
      cy.get('#equals-key').click();
      cy.get('#result').should('have.value', '2')
  });

  it('should multiply two numbers', function () {
      cy.get('#key5').click();
      cy.get('#multiply').click();
      cy.get('#key4').click();
      cy.get('#equals-key').click();
      cy.get('#result').should('have.value', '20')
  });

  it('should divide two numbers', function () {
      cy.get('#key8').click();
      cy.get('#divide').click();
      cy.get('#key4').click();
      cy.get('#equals-key').click();
      cy.get('#result').should('have.value', '4')
  });

  afterEach(function () {
      cy.get('#reset-key').click();
  });
});