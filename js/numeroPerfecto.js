// funcion basica que sirve para determinar si un numero dado es
// perfecto o no

// esta funcion se queda mucho tiempo realizando los calculos para digitos
// de numeros iguales a 8 o superior
function numeroPerfecto(numero){
  let divisores = 0;

  if (numero < 0) {
    alert("no se admiten numeros negativos");
    return;
  }

  if (numero.length >= 9) {
    alert("este numero es muy largo y demora mucho en procesar, te recomiendo mirar los otros ejemplos")
    return;
  }
  // al agregar el diferente de nulo si se ingresa la letra (E) valida el campo numerico
  // al quitar esta comparacion no valida el campo numerico
  if (divisores == 0 && numero == null || numero == "") {
      alert("valor no permitido");
      return;
  }
  for (let i = 1; i <= numero / 2; i++) {
    if (numero % i == 0) {
      //captura los divisores
      divisores +=i;
    }
    if (divisores == numero) {
      alert(`el numero ${numero} es perfecto`);
      return;

    }
  }
  if (numero != divisores) {
    alert(`el numero ${numero} no es perfecto`);
    return;

  }
}
