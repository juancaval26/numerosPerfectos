/*
- Nombres de variables autoexplicativos
- Seperación de responsabilidades
- Comentarios de la solución propuesta
*/

/*
importante
se recomienda imprimir los numeros perfectos hasta el 8
ya que si se pone un numero mayor el tiempo de ejecucion se va a ver afectado
es decir se demarara mucho tiempo en procesar

sitio web usado como apoyo
https://miprofe.com/numeros-perfectos/

Observa que los números perfectos se pueden obtener como la mitad del producto entre un primo de Mersenne
y el número que le sigue:
*/

// esta funcion permite saber si un numero es primo o no
// si se comenta la formula y se pasa un numero x como parametro
// el algoritmo valida si es primo o no


// el exponete n debe ser primo
function validarPrimo(n){

	// el termino 2 ** n -1 debe ser primo
	let validar = (2 ** n) - 1;
	if (validar < 2){
		return false;
	}
	// sirve minimizar las iteraciones  / 2
	// reduciendo iteraciones innecesarios
	// si no se divide entre i el tiempo de ejecucion va a ser mas demorado

	let primo = validar;
	for (let i = 2; i < Math.floor(validar/i); i++) {
		if (primo % i === 0){
			// iteraciones innecesarias contando desde  n = 2
			return false; // no es primo
		}
	}
	return true; // es primo
}

/**
* Teorema Euclides - Euler
* n = 2^(n-1) (2^n - 1)
* Siempre que 2^n - 1 sea primo
*/

function numerosPerfectosLista(numero){
  // hace parte de la formula, es el exponente
	let n = 2;

	// llena el array con los numeros perfectos
	let numerosPerfectos = [];

	if (numero >= 9) {
		alert("este proceso tarda mucho en realizarse, visite la lista de numeros perfectos para mas informacion");
		return;
	}

	if (numero < 0) {
		alert("no se admiten numeros negativos");
		return;
	}

	while(numerosPerfectos.length < numero) {
		let primo = validarPrimo(n);

		// siempre que esta validacion sea true al realizar el calculo
		//  y llena el array con los numeros perfectos
		if (primo) {
			let calculo = (2 ** (n - 1))*((2 ** n) - 1);
			numerosPerfectos.push(calculo);
		}
		n++;
	}
	if (numerosPerfectos.length > 0) {
		alert(numerosPerfectos);
		return;

	}else {
		alert("valor no admitido");
		return;

	}

}
