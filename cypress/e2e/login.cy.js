import Login from '../pages/login'

const login = new Login()

describe('Acessar a página de login e logar', () => {
  it.only('Login com sucesso', () => {
    cy.visit('/auth/login')
    login.loginUser()

  })

  it('Login errado', () => {
    cy.visit('/auth/login')
    login.loginUserFail()

  })




})