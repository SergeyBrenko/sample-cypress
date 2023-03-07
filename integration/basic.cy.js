describe('Google search', () => {

    const url = 'https://www.google.com/';
    const searchValue = 'Zebrunner';

    beforeEach(() => {
        cy.attachZbrLaunchLabel('com.zebrunner.app/tcm.zebrunner.sync.enabled', 'true')
        cy.attachZbrLaunchLabel('com.zebrunner.app/tcm.zebrunner.test-run-id', '1')
    });

    it('Should return search results', {'owner': 'sholmes'}, () => {
        cy.attachZbrTestLabel('com.zebrunner.app/tcm.zebrunner.test-case-key', 'DEF-1');

        cy.visit(url).contains('Google');

        console.log(`Performing search with value Zebrunner`);
        cy.xpath("//input[@name='q']").click().type(searchValue).type('{enter}');

        console.log(`Verify first search result contains search value`);
        cy.xpath("//*[@id='search']//a").should('contain.text', searchValue);
    });

    it('Should fail when return search results', {'owner': 'sholmes'}, () => {
        cy.attachZbrTestLabel('com.zebrunner.app/tcm.zebrunner.test-case-key', 'DEF-2');

        cy.visit(url).contains('Google');

        console.log(`Performing search with value Zebrunner`);
        cy.xpath("//input[@name='q']").click().type(searchValue).type('{enter}');

        console.log(`Verify first search result contains search value`);
        cy.xpath("//*[@id='search']//a").should('contain.text', 'dummy value');
    });

});
