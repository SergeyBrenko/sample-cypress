describe('Google search', () => {
  const url = 'https://www.google.com/';
  const searchValue = 'Zebrunner';

  it('Should return search results', () => {
    console.log(`Navigating to ${url}`);
    cy.visit(url).contains('Google');
    cy.screenshot();

    console.log(`Performing search with value ${searchValue}`);
    cy.xpath("//input[@name='q']").click().type(searchValue).type('{enter}');
    cy.screenshot();

    console.log(`Verify first search result contains ${searchValue}`);
    cy.xpath("//*[@id='search']//a").should('contain.text', 'searchValue');
  });
});
