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

- necessário ter docker e npm instalado em sua máquina
- basta rodar npm run up

## Rotas

### GET /

Esta rota retorna a página inicial do aplicativo.

### GET /my-credentials

Esta rota é usada para obter as credenciais do usuário. Ela chama o método `getMyCredentials` do `MyCredentialsService`.

### POST /password

Esta rota é usada para criar uma nova senha. Ela chama o método `postCredential` do `MyCredentialsService`.

### GET /generate-password

Esta rota é usada para gerar uma nova senha. Ela chama o método `generatePassword` do `MyCredentialsService`.

### PUT /password

Esta rota é usada para atualizar uma senha existente. Ela chama o método `putCredential` do `MyCredentialsService`.

### DELETE /password

Esta rota é usada para excluir uma senha existente. Ela chama o método `deleteCredential` do `MyCredentialsService`.
