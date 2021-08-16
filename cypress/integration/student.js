describe("Student test", () => {
    before(() => {

        cy.visit('http://localhost:3000/');
        cy.get('[id=studentbutton]').click();
        cy.url().should('include', '/?controller=student');

    })
    it("reads the create form", () => {
        cy.get('[id=createbutton]').click();
        cy.url().should('include', '&action=create');
        cy.get('[id=name]').type('Eiman Waheed').should('have.value', 'Eiman Waheed');
        cy.get('[id=password]').type('123').should('have.value', '123');
        cy.get('[id=email]').type('eiman@com').should('have.value', 'eiman@com');
        cy.get('[id=submitcreate]').click().go('back').go('back');
    });

    it("reads the update form", () => {
        cy.get('[id=updatebutton]').click();
        cy.url().should('include', '&action=update');
        cy.get('[id=id]').type(10).should('have.value', 10);
        cy.get('[id=name]').type('Eiman Waheed').should('have.value', 'Eiman Waheed');
        cy.get('[id=password]').type('123').should('have.value', '123');
        cy.get('[id=email]').type('eiman@com').should('have.value', 'eiman@com');
        cy.get('[id=submitupdate]').click().go('back').go('back');
    });

    it("reads the delete form", () => {
        cy.get('[id=deletebutton]').click();
        cy.url().should('include', '&action=delete');
        cy.get('[id=id]').type(10).should('have.value', 10);
        cy.get('[id=submitdelete]').click().go('back').go('back');
    });

});