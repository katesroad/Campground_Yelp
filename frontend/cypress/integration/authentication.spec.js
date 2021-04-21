const baseUrl = 'http://192.168.0.117:3000'

const randomText = () => {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const len = possible.length

  for (let i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * len))
  }

  return text
}

describe('Test authentication', () => {
  const email = randomText() + '@email.com'
  const password = randomText()
  const username = randomText()

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('Register a brand new account', () => {
    cy.visit(baseUrl + '/register')
    cy.get('input[name=username]').type(username)
    cy.get('input[name=email').type(email)
    cy.get('input[name=password').type(password)
    cy.get('button[type=submit').click()

    // cy.location() get the location object
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/campgrounds')
    })

    // reload to get user authentication data
    cy.reload().then((window) => {
      expect(window.location.pathname).to.eq('/campgrounds')
    })

    // visting authentication page will redirect user to campgrounds page by default
    cy.visit(baseUrl + '/login')
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/campgrounds')
    })

    cy.get('.btn-logout').click()
  })

  it('Register an account with exsiting user at /register path', () => {
    cy.visit(baseUrl + '/register')
    cy.get('input[name=username]').type(username)
    cy.get('input[name=email').type(email)
    cy.get('input[name=password').type(password)
    cy.get('button[type=submit').click()
    cy.get('.form-error').should('have.text', 'Register failed')
  })

  it('Login user with email and password at /login path', () => {
    cy.visit(baseUrl + '/login')
    cy.get('input[name=email').type(email)
    cy.get('input[name=password').type(password)
    cy.get('button[type=submit').click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/campgrounds')
    })
  })

  it('Login user with wrong credential ath /login path', () => {
    cy.visit(baseUrl + '/login')
    cy.get('input[name=email').type(email)
    cy.get('input[name=password]').type(randomText())
    cy.get('button[type=submit]').click()
    cy.get('.form-error').should('have.text', 'Login failed')
  })

  it('Switch register or login', () => {
    cy.visit(baseUrl + '/login')
    cy.get('form a').click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/register')
    })
    cy.get('form a').click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/login')
    })
  })

  it("Unauthenticated user can't visit /campgrounds/create path", () => {
    cy.visit(baseUrl + '/campgrounds/create')
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/campgrounds')
    })
  })

  it('Authenticated user can visit /campgrounds/create path', () => {
    cy.visit(baseUrl + '/login')
    cy.get('input[name=email').type(email)
    cy.get('input[name=password').type(password)
    cy.get('button[type=submit').click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/campgrounds')
    })
    cy.visit(baseUrl + '/campgrounds/create')
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/campgrounds/create')
    })
  })

  it('Visiting not defined path should redirect to /campgrounds', () => {
    cy.visit(baseUrl + '/404', () => {
      cy.location().should((location) => {
        expect(location.pathname).to.eq('/campgrounds')
      })
    })

    cy.visit(baseUrl + '/login', () => {
      cy.get('input[name=email').type(email)
      cy.get('input[name=password').type(password)
      cy.get('button[type=submit').click()
    })

    cy.visit(baseUrl + '/404', () => {
      cy.location().should(location => {
        expect(location.pathname).to.eq('/campgrounds')
      })
    })
  })
})
