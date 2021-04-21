const baseUrl = 'http://192.168.0.117:3000'

// test user in database
const email = 'c@c.com'
const password = 'ccc'

describe('register a brand new user account', () => {
  beforeEach(() => {
    cy.visit(baseUrl + '/campgrounds')
  })

  it('visit /campgrounds and campground detail page', async () => {
    cy.get('.camp-title')
      .first()
      .invoke('text')
      .then((campTitle) => {
        cy.get('.camp-link').first().click()
        cy.contains(campTitle).should('exist')
      })
  })

  it('vist campground detail page without authentication', () => {
    cy.get('.camp-link').first().click()
    cy.get('.btn.btn--review').first().click()
    cy.get('#createReview').get('button[type=submit]').click()
    cy.get('.alert-buttons .btn--confirm').click()

    cy.location().then(({ pathname }) => {
      // test the defailt portal is login
      cy.get('.auth-form .title').should('have.text', 'login')
      cy.get('input[name=email]').type(email)
      cy.get('input[name=password]').type(password)
      cy.get('.auth-form button[type=submit]').click()
      // login in using portal should not redirect page
      cy.location().then((location) => {
        expect(pathname).to.eq(location.pathname)
      })
    })
    cy.get('.alert-buttons .btn-confirm').should('not.exist')
  })

  it('should not render update/delete button for unauthenticated user', () => {
    cy.get('.review-list button.btn-delete').should('not.exist');
    cy.get('.review-list button.btn--update').should('not.exist');
  })
})
