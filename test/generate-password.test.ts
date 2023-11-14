import { assert } from 'chai'
import myCredentialsMock from '../routes/mocks/my-credentials-mock'

describe('/generate-password', function () {
  const myCredentials = myCredentialsMock
  it('deve retornar senhas com no mínimo 8 caracteres', function () {
    myCredentials.forEach((credential) => {
      assert.isAtLeast(
        credential.password.length,
        8,
        'A senha deve ter no mínimo 8 caracteres'
      )
    })
  })

  it('deve retornar senhas contendo letras e números', function () {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/
    myCredentials.forEach((credential) => {
      assert.match(
        credential.password,
        passwordRegex,
        'A senha deve conter letras e números'
      )
    })
  })

  it('deve retornar senhas contendo caracteres especiais', function () {
    const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>]/
    myCredentials.forEach((credential) => {
      assert.match(
        credential.password,
        specialCharsRegex,
        'A senha deve conter caracteres especiais'
      )
    })
  })
})
