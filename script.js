fetch('/api/env')
  .then(res => res.json())
  .then(data => {
    document.getElementById("resultado").innerHTML =
      "Valor recibido desde Vercel: " + data.valor;
  });
