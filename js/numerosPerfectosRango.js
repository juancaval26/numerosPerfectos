// FORMA 3 numeros perfectos rango
let perfectos=[];

function recorrer(){
  // numeros primos
  const primos = [2,3,5,7,13,17,19,31,61,89];

  for (let i = 0; i < primos.length; i++) {
      let p = primos[i];
      perfectos.push(Math.pow(2,p-1)*(Math.pow(2,p)-1));
      // equivalente
      // perfecto.push(2 ** (p - 1))*((2 ** p) - 1);
  }
}

function numerosPerfectosRango(numero) {
    let resultado = [];
    if (numero.length >= 20) {
      alert("este numero es muy largo y demora mucho en procesar, te recomiendo mirar la lista, que se encuentra arriba")
      return;
    }else if (numero < 6 && numero >=1) {
  		alert(`no se encuentran numeros perfectos en el rango: ${numero}`);
  		return;
  	}else if (numero < 0) {
      alert("no se admiten numeros negativos");
      return;
    }
    recorrer();
    for (let i = 0; i < perfectos.length && perfectos[i] <= numero; i++){
        resultado.push(perfectos[i]);
    }
    if (resultado.length > 0) {
      alert(resultado);
      return;
    }else {
      alert("valor no admitido");
      return;

    }
}

// FORMA 2
//   function EsPerfecto(n) {
//     let sum = 1;
//
//     for (let i = 2; (i*i) < n; i++){
//     if (n%i==0)
//     {
//       if(i*i!=n)
//         sum = sum + i + n/i;
//       else
//         sum=sum+i;
//     }
//   }
//
//   if (sum == n && n != 1)
//     return true;
// }
//
//
// function numerosPerfectosRango(numero) {
//   for(let i = 1;i <= numero / 2; i++){
//       console.info(i);
//   }
// }
//
// console.clear();
// numerosPerfectosRango(100);
