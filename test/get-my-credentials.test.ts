import { assert } from 'chai'
import { MyCredentialsController } from '../src/controller/my-credentials-controller'

describe('/my-credentials', async function () {
  const response = await new MyCredentialsController().handle({
    body: {},
    method: 'getMyCredentials'
  })
  console.clear()

  const myCredentials = JSON.parse(response.body)
  console.log(myCredentials)

  it('deve retornar um array de credenciais', function () {
    assert.equal(Array.isArray(myCredentials), true)
  })

  it('deve ter todos os campos necessários em cada credencial', function () {
    myCredentials.forEach((credential) => {
      assert(credential.hasOwnProperty('title'))
      assert(credential.hasOwnProperty('password'))
      assert(credential.hasOwnProperty('site'))
      assert(credential.hasOwnProperty('createdAt'))
      assert(credential.hasOwnProperty('updatedAt'))
    })
  })
})
