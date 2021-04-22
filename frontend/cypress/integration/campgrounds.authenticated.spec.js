const baseUrl = 'http://192.168.0.117:3000'

describe('vist campground detail page with authentication', () => {
  // get authenticated
  beforeEach(() => {
    cy.fixture('account.json')
      .as('account')
      .then((account) => {
        cy.visit(baseUrl + '/login')
        cy.get('input[name=email]').type(account.email)
        cy.get('input[name=password]').type(account.password)
        cy.get('button[type=submit]').click()
        // visit a campground page
        cy.get('.camp-link').first().click()
      })
  })

  it('Authenticated user can create review', () => {
    cy.get('.rating-count')
      .first()
      .invoke('text')
      .then((text) => {
        // get the current count number;
        const ratingCount = text.split(' ')[0]
        cy.fixture('review.json')
          .as('review')
          .then((review) => {
            // creating review
            const signature = Math.random(0, 1)
            cy.get('.btn.btn--review').first().click()
            cy.get('.alert-buttons .btn-confirm').should('not.exist')

            cy.get('input[name=title]').type(review.title + signature)
            cy.get('textarea[name=body]').type(review.body + signature)
            cy.get(`form label[for=rating-${review.rating}]`).click()
            cy.get('button[type=submit]').first().click()

            // force page to reload the latest reviews
            cy.reload()

            // validate the number and review content
            cy.get('.review-list .review-title')
              .first()
              .should('have.text', review.title + signature)
            cy.get('.review-list .review-body')
              .first()
              .should('have.text', review.body + signature)
            const ratingCountText = +ratingCount + 1 + ' reviews'
            cy.get('.rating-count').first().should('have.text', ratingCountText)
          })
      })
  })

  it('Authenticated user can update review', () => {
    cy.get('.btn.btn--update').first().click()
    cy.get('#updateReview .title-content').should(
      'contain.text',
      'update review'
    )
    cy.get('#updateReview .btn.btn--submit').should('contains.text', 'update')
    cy.get('#updateReview .btn.btn--submit').click()
    cy.get('#updateReview').should('not.exist')
  })

  it('Authenticated user can delete review', () => {
    cy.get('.rating-count')
      .invoke('text')
      .then((text) => {
        const originalReviews = +text.split(' ')[0]
        cy.get('.review-list .btn--delete').first().click()

        cy.reload()

        cy.get('.rating-count')
          .invoke('text')
          .then((text) => {
            const currentReviews = +text.split(' ')[0]
            expect(originalReviews - 1).to.eq(currentReviews)
          })
      })
  })
})
