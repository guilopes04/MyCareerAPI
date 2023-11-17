# SecretsManager

## Objetivo

SecretsManager é uma plataforma segura e intuitiva que permite aos usuários gerenciar, armazenar e gerar senhas fortes e personalizadas. Construído com Express no back-end usando TypeScript, SecretsManager é uma ferramenta robusta e flexível para o gerenciamento de senhas.

SecretsManager é uma ferramenta essencial para qualquer pessoa que deseja acompanhar, gerenciar e melhorar a segurança de suas senhas de maneira organizada e eficiente.

## Casos de Uso

- **Geração de Senhas Fortes e Personalizadas**: Os usuários podem gerar novas senhas fortes e personalizadas, aumentando a segurança de suas contas online.

- **Edição e Exclusão de Senhas**: Os usuários têm a capacidade de editar e excluir suas senhas a qualquer momento, permitindo que eles mantenham seu perfil de gerenciamento de senhas atualizado.

- **Salvar Senhas Geradas com Domínios Associados**: Os usuários podem salvar as senhas geradas juntamente com os domínios em que estão sendo utilizadas, proporcionando uma visão clara e organizada de suas informações de segurança.

## Funcionalidades Esperadas

- Geração de novas senhas fortes e personalizadas
- Capacidade de editar e excluir senhas
- Salvar senhas geradas com domínios associados
- Armazenamento seguro das informações do usuário no back-end

## Como Rodar

- Necessário ter o [docker](https://docs.docker.com/compose/install/) e [npm/node](https://nodejs.org/en/download) instalado em sua máquina.
- Após instalado, basta rodar npm run up dentro do projeto e o projeto começará a ser buildado e rodado no docker.

## Rotas

### GET /

Esta rota retorna a página inicial do aplicativo.

### GET /my-credentials

Esta rota é usada para obter as credenciais do usuário. Ela chama o método `getMyCredentials` do `MyCredentialsService`.

### POST /password

Esta rota é usada para criar uma nova senha. Ela chama o método `postCredential` do `MyCredentialsService`.

`{
	"title": "Senha2",
	"password": "LkjMnb@456",
	"site": "www.exemplo2.com"
}`

### GET /generate-password

Esta rota é usada para gerar uma nova senha. Ela chama o método `generatePassword` do `MyCredentialsService`.

`{
	"length": 15,
	"numbers": true,
	"symbols": true,
	"uppercase": true,
	"lowercase": true
}`

### PUT /password

Esta rota é usada para atualizar uma senha existente. Ela chama o método `putCredential` do `MyCredentialsService`.

`{
	"_id": "655629e63e5d2f8ff3a6d78f",
	"title": "Senha5",
	"password": ",CATkH9@_S,8z.Z",
"site": "www.exemplo5.com"
}`

### DELETE /password

Esta rota é usada para excluir uma senha existente. Ela chama o método `deleteCredential` do `MyCredentialsService`.

`{
	"_id": "655620f2b776e19109a5dfce"
}`
