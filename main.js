const Formularioprestamo = document.getElementById("todoelformulario");
const formulario = document.getElementById("formulario");

// const intereses = Array[0.5,0.4,0.3]
const interes = 0.4
// const interesuno = document.getElementById("interesbasico")
// const interesdos = document.getElementById("interesH")
// const interestres = document.getElementById("interesjubi")

Formularioprestamo.addEventListener("submit", (e) => {
  const Nombre = document.getElementById("nombre");
  const Documento = document.getElementById("dni");
  var edad = document.getElementById("edad").value;
  const Cuantodinero = document.getElementById("cuanto");
  const NumeroDeCuotas = document.getElementById("cuotas");
  const BoxAcepto = document.getElementById("acepto");

  const montoaretirar = document.getElementById("montoprestamo");
  const cuotascantidad = document.getElementById("cantidadcuotas");
  const cuotamonto = document.getElementById("montocuota");
  const interesmonto = document.getElementById("montointerestotal");
  const pagartotal = document.getElementById("totalapagar");
  e.preventDefault();
  if (edad >= 18) {
    if (BoxAcepto.checked) {
      const cuotaPrestamo =
        ((1 + interes) * Cuantodinero.value) / NumeroDeCuotas.value;
      const total = Math.ceil(cuotaPrestamo) * NumeroDeCuotas.value;

      montoaretirar.innerText = Cuantodinero.value;
      cuotascantidad.innerText = NumeroDeCuotas.value;
      cuotamonto.innerText = cuotaPrestamo;
      interesmonto.innerText = interes * Cuantodinero.value;
      pagartotal.innerText = total;
    } else {
      alert("Acepta los terminos")
    }
  } else {
    alert("No podes mijo");
  }
});
