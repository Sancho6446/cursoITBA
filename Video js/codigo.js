/* var nombre ="Santiago podesta";
var altura =180;
var conca = nombre + "" + altura;
var datos=  document.getElementById("datos");

datos.innerHTML = ` Algr + } = `
<h1> Soy la caja de datos </h1>
<h1> Mi nombre es: ${nombre} </h1>
`
; VIDEO 2*/

/* const numero2 = 10;  no puede ser sobre ecrito 
var numero = 5;
var numeroDos = 10;
alert(numero + numeroDos);
numero = 8;
alert(numero);
numero++;
numero--;
console.log(numero); Video 1*/

/* console.log("Hola Mundo!!!");
var nombre = 10;
console.log(nombre);
nombre = prompt("Ingrese su nombre: ");  Cin 
console.log(nombre); */
/* var temperatura = parseInt(prompt("Ingrese la temperatura")); */
function mostrarTemperatura(temperatura) {
	if (denominacion()) {
		if (temperatura > 16) {
			datos.innerHTML = ` 
			<h2 class="bg-danger m-2"> maldición, va a ser un dia hermoso, hace una temperatura de: ${temperatura}</h2>
			`;
		} else {
			if (temperatura >= 0) {
				datos.innerHTML = ` 
				<h2 class="bg-info m-2"> Está fresco para pasear en jaula, hace una temperatura de: ${temperatura}</h2>
				`;
			} else {
				datos.innerHTML = ` 
 				 <h2 class="bg-primary m-2"> El arte es morirse de frio, hace una temperatura de: ${temperatura}</h2>
  				`;
			}
		}
	} else {
		if (temperatura > 60.8) {
			datos.innerHTML = ` 
				<h2 class="bg-danger m-2"> maldición, va a ser un dia hermoso, hace una temperatura de: ${
					(temperatura * 9) / 5 + 32
				}</h2>
				`;
		} else {
			if (temperatura >= 32) {
				datos.innerHTML = ` 
					<h2 class="bg-info m-2"> Está fresco para pasear en jaula, hace una temperatura de: ${
						(temperatura * 9) / 5 + 32
					}</h2>
					`;
			} else {
				datos.innerHTML = ` 
  					<h2 class="bg-primary m-2"> El arte es morirse de frio, hace una temperatura de: ${
							(temperatura * 9) / 5 + 32
						}</h2>
 					`;
			}
		}
	}
}
function denominacion() {
	if (document.getElementById("grado").value == "Celsius") {
		return true;
	}
	if (document.getElementById("grado").value == "Farenheit") {
		return false;
	}
}
function grados() {
	if (denominacion()) {
		document.getElementById("grado").value = `Farenheit`;
		return;
	} else {
		document.getElementById("grado").value = `Celsius`;
		return;
	}
}
function myFunction() {
	mostrarTemperatura(parseFloat(document.getElementById("dato").value));
}
