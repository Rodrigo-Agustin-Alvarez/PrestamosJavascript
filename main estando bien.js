
 

const Formularioprestamo = document.getElementById("todoelformulario");
const formulario = document.getElementById("formulario");


const titulo = document.querySelector('#titulo')
let nombre = ''
let nombrels = localStorage.getItem('nombre')

if (nombrels) {
  nombre = nombrels
}
else {
  nombre = prompt('Ingrese su nombre :')
  localStorage.setItem('nombre',nombre)
}


titulo.innerHTML = 'Bienvenido/a ' + nombre + ' solicitá tu prestamo'

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
  const solicitar = document.getElementById("solicitar")
  var error = false

  if(Nombre.value) {""}
  else{(swal ( "Tenes que completar todos los campos " , ' ¡Completa todos los campos para continuar con el proceso! ' )), error=true}

  if (Documento.value){""}
  else{(swal ( "Tenes que completar todos los campos " , ' ¡Completa todos los campos para continuar con el proceso! ' )), error=true}

  if(Cuantodinero.value){""}
  else{(swal ( "Tenes que completar todos los campos " , ' ¡Completa todos los campos para continuar con el proceso! ' )), error=true}

  if(NumeroDeCuotas.value){""}
  else{(swal ( "Tenes que completar todos los campos " , ' ¡Completa todos los campos para continuar con el proceso! ' )), error=true}

  if(error == true){console.log("Hay error")}
  else{console.log("no hay error")}

  const montoaretirar = document.getElementById("montoprestamo");
  const cuotascantidad = document.getElementById("cantidadcuotas");
  const cuotamonto = document.getElementById("montocuota");
  const interesmonto = document.getElementById("montointerestotal");
  const pagartotal = document.getElementById("totalapagar");

  function calcularCuotaPrestamo (interes,cuantodinero,numerodecuotas) {
    const cuotaPrestamo =(( (1 + interes) * cuantodinero) / numerodecuotas);
    return cuotaPrestamo;
  }
  e.preventDefault();
  if (error == false){
  if (edad >= 18) {
    if (BoxAcepto.checked) {
      const saldocuotaprestamo = calcularCuotaPrestamo(interes,Cuantodinero.value,NumeroDeCuotas.value);
      const total = Math.ceil(saldocuotaprestamo) * NumeroDeCuotas.value;

        const datosdelosprestamos = [Cuantodinero.value,NumeroDeCuotas.value,saldocuotaprestamo,interes*Cuantodinero.value,total];
        
      montoaretirar.innerText = datosdelosprestamos[0];
      cuotascantidad.innerText = datosdelosprestamos[1];
      cuotamonto.innerText = Math.ceil(datosdelosprestamos[2]);
      interesmonto.innerText = datosdelosprestamos[3];
      pagartotal.innerText = datosdelosprestamos[4];
      solicitar.onclick(document.getElementById('tuprestamo').scrollIntoView())
      
    } else {
      swal ( "¡Acepta los terminos y condiciones! " , ' ¡Haz click en el texto "Acepto los terminos" para conocerlos! ' )  ;
    }
  }   else {
      swal ({
        title: "Restriccion de edad",
        text: "Debes ser mayor de edad para continuar con el proceso",
        icon: "error",
        confirmButtonText: "Cool"
    })
  }}
  });

  fetch('https://api.covidtracking.com/v1/us/daily.json')
  .then((response) => response.json())
  .then((data) => (
    console.log(data [0].date),
    console.log(data [0].death)
    ))
    