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

describe('register a brand new user account', () => {
  const email = randomText() + '@email.com'
  const password = randomText()
  const username = randomText()

  beforeEach(() => {
    cy.visit(baseUrl)
  })

  it('register a brand new account', () => {
    cy.visit(baseUrl + '/register')
    cy.get('input[name=username]').type(username)
    cy.get('input[name=email').type(email)
    cy.get('input[name=password').type(password)
    cy.get('button[type=submit').click()

    // cy.location() get the location object
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })

    // reload to get user authentication data
    cy.reload().then(window => {
      expect(window.location.pathname).to.eq('/')
    })

    // visting authentication page will redirect user to campgrounds page by default
    cy.visit(baseUrl + '/login');
    cy.location().should(location => {
      expect(location.pathname).to.eq('/campgrounds');
    }) 

    cy.get('.btn-logout').click()
  })

  it('register an account with exsiting user', () => {
    cy.visit(baseUrl + '/register')
    cy.get('input[name=username]').type(username)
    cy.get('input[name=email').type(email)
    cy.get('input[name=password').type(password)
    cy.get('button[type=submit').click()
    cy.get('.form-error').should('have.text', 'Register failed')
  })

  it('login user with email and password', () => {
    cy.visit(baseUrl + '/login')
    cy.get('input[name=email').type(email)
    cy.get('input[name=password').type(password)
    cy.get('button[type=submit').click()
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/')
    })
  })

  it('login user with wrong credential', () => {
    cy.visit(baseUrl + '/login')
    cy.get('input[name=email').type(email)
    cy.get('input[name=password]').type(randomText())
    cy.get('button[type=submit]').click()
    cy.get('.form-error').should('have.text', 'Login failed')
  })

  it('switch register or login', () => {
    cy.visit(baseUrl + '/login');
    cy.get('form a').click();
    cy.location().should(location => {
      expect(location.pathname).to.eq('/register');
    })
    cy.get('form a').click()
    cy.location().should(location => {
      expect(location.pathname).to.eq('/login')
    })
  })
})
