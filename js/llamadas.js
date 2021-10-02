//determinar si un numero es perfecto forma basica
$(document).ready(function() {
  $("#enviar").on("click",function(event){
    event.preventDefault();
    let numero = $("#numero").val();
    numeroPerfecto(numero);
  });
});

// numeros perfecto por rango formula euclides
$(document).ready(function() {
  $("#mostrarRango").on("click",function(event){
    event.preventDefault();
    let numero = $("#nPerfectoRango").val();
    numerosPerfectosRango(numero);
  });
});

// numeros perfectos por lista formula euclides
$(document).ready(function() {
  $("#mostrar").on("click",function(event){
    event.preventDefault();
    let numero = document.getElementById('nPerfecto').value;
    numerosPerfectosLista(numero);

  });
});
