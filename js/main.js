const usuarioCorrecto = "fabianjugo";
const claveCorrecta = "fabianjugo";

function login() {
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;
  const error = document.getElementById("error");

  if (usuario === usuarioCorrecto && clave === claveCorrecta) {
    document.querySelector(".login-container").style.display = "none";
    document.getElementById("contenido").classList.remove("hidden");
  } else {
    error.textContent = "Usuario o contraseña incorrectos";
  }
}

function logout() {
  document.querySelector(".login-container").style.display = "block";
  document.getElementById("contenido").classList.add("hidden");
}
