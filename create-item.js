const MongoClient = require('mongodb').MongoClient

// Configurar a URL de conexão com o MongoDB
const url = 'mongodb://localhost:27017'

// Nome do banco de dados e coleção
const dbName = 'myDatabase'
const collectionName = 'myCollection'

// Objeto a ser inserido
const objectToInsert = {
  title: 'Senha1',
  password: 'ZxcvBn@123!',
  site: 'www.exemplo1.com',
  createdAt: '2023-11-13T00:00:00Z',
  updatedAt: '2023-11-13T00:00:00Z'
}

// Conectar ao servidor do MongoDB
MongoClient.connect(url, function (err, client) {
  if (err) {
    console.error('Erro ao conectar ao MongoDB:', err)
    return
  }

  console.log('Conectado ao servidor do MongoDB')

  // Selecionar o banco de dados
  const db = client.db(dbName)

  // Selecionar a coleção
  const collection = db.collection(collectionName)

  // Inserir o objeto na coleção
  collection.insertOne(objectToInsert, function (err, result) {
    if (err) {
      console.error('Erro ao inserir objeto:', err)
    } else {
      console.log('Objeto inserido com sucesso:', result.insertedId)
    }

    // Fechar a conexão com o MongoDB
    client.close()
  })
})
