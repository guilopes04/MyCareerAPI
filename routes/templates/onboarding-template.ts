const onboardingTemplate = `
<!DOCTYPE html>
<html>
<head>
  <title>Onboarding</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    button {
      font-size: 20px;
      padding: 10px 20px;
    }
  </style>
</head>
<body>
  <form action="/onboarding" method="post">
    <label for="name">Nome:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="password">Senha:</label>
    <input type="password" id="password" name="password" required>
    <label for="experiences">Experiências:</label>
    <textarea id="experiences" name="experiences"></textarea>
    <label for="skills">Habilidades:</label>
          <textarea id="skills" name="skills"></textarea>
          <label for="summary">Resumo:</label>
          <textarea id="summary" name="summary"></textarea>
          <label for="education">Formação:</label>
          <textarea id="education" name="education"></textarea>
          <label for="links">Links adicionais:</label>
          <textarea id="links" name="links"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </body>
      </html>
`

export default onboardingTemplate
