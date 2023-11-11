const homeTemplate = `
<!DOCTYPE html>
<html>
<head>
  <title>Projeto Express</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
    .container {
      text-align: center;
    }
    button {
      font-size: 20px;
      padding: 10px 20px;
      margin-top: 20px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Bem-vindo ao MyCareerAPI!</h1>
    <button onclick="location.href='/onboarding'">Começar</button>
  </div>
</body>
</html>
`

export default homeTemplate
