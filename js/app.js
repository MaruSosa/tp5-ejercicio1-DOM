let inputAgregado = false;
const comenzarJuego = () => {
  if (!inputAgregado) {
    const texto = document.createElement("p");
    texto.innerHTML = "Una pista..el número oculto se encuentra entre 0 y 100!!";
    const inputNumero = document.createElement("input");
    inputNumero.setAttribute("type", "number");
    inputNumero.setAttribute("placeholder", "Ingresa un número");
    inputNumero.required=true;
    const submitButton = document.createElement("button");
    submitButton.innerHTML = "Enviar";
    const contenedor = document.querySelector(".ingresoNumero");
    contenedor.appendChild(texto);
    contenedor.appendChild(inputNumero);
    contenedor.appendChild(submitButton);
    inputAgregado = true;
    numeroAleatorio = crearNumeroAleatorio();
    submitButton.addEventListener("click", comparacionNumeros);
  }
  const bienvenida = document.getElementById("bien");
  const startButton = document.getElementById("startButton");
  const inputNumeroNuevo = document.getElementById("idInput");
  bienvenida.style.display = "none";
  startButton.style.display = "none";
  inputNumeroNuevo.style.display = "block";
};
document.getElementById("startButton").addEventListener("click", comenzarJuego);
const crearNumeroAleatorio = () => {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  console.log(numeroAleatorio);
  return numeroAleatorio;
};

const comparacionNumeros = () => {
  const numeroIngresado = parseInt(document.querySelector('input[type="number"]').value);
  if(!numeroIngresado==""){
    if (numeroAleatorio === numeroIngresado) {
        alert("¡Felicidades! Has adivinado el número.");
      } else if(numeroAleatorio>numeroIngresado) {
        alert("El número ingresado es menor que el número mágico");
      }else{
        alert("El número ingresado es mayor que el número mágico");
      }
      document.querySelector('input[type="number"]').value='';
  }else{
    alert('El campo esta vacio..ingrese un número');
  }
};


