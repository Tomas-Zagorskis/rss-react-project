describe('React app tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('checks navigation bar has 3 links', () => {
    cy.get('nav ul li').should('have.length', 3);
  });

  it('checks Home page loads', () => {
    cy.url().should('include', '/');
    cy.get('input[type="search"]').should('exist');
  });

  it('checks About link loads', () => {
    cy.get('nav').contains('About Us').click();

    cy.url().should('include', '/about-us');
    cy.get('h1').contains('About Us').should('exist');
  });

  it('checks Form link loads', () => {
    cy.get('nav').contains('Music Form').click();

    cy.url().should('include', '/music-form');
    cy.get('form').should('exist');
  });

  it('checks 404 page loads', () => {
    cy.visit('/random-page');

    cy.url().should('include', '/404');
    cy.get('h2').contains(/404/).should('exist');
  });

  it('should search for cat on Home page', () => {
    cy.get('input[type="search"]').type('cats{enter}');

    cy.get('nav ~ ul li').should('have.length', 10);

    cy.get('nav ~ ul li').first().click();
    cy.contains(/cat/i).should('exist');
  });

  it('should try submit blank form and get invalid response', () => {
    cy.visit('/music-form');

    cy.get('input[type="submit"]').click();
    cy.contains('span', /is required/i).should('exist');
  });

  it('should try submit valid form and get valid response', () => {
    cy.visit('/music-form');

    cy.get('input[name="title"]').type('Title');
    cy.get('[class^=_type_]').within(() => {
      cy.get('label:first-of-type').click();
    });
    cy.get('input[name="singerName"]').type('Singer');
    cy.get('select').select('USA');
    cy.get('input[name="releaseDate"]').type('2022-04-20');
    cy.get('input[name="imgFile"]').attachFile('img.jpg');
    cy.get('[class^=_genres_]').within(() => {
      cy.get('label:last-of-type').click();
    });

    cy.get('input[type="submit"]').click();
    cy.contains('Form successfully submitted!').should('exist');
    cy.get('nav ~ ul li').should('have.length', 1);

    cy.wait(2000);
    cy.get('[class^=popup]').should('not.exist');
  });

  it('testing success, IF testing won`t stop, then manually press stop testing or delete coverage folder and rerun', () => {
    expect(true).to.equal(true);
  });
});
