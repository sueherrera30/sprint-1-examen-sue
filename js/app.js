var estudiantes = [];

function obtenerListaEstudiantes() {
     //TO DO: Retornar la lista de estudiantes
     function Estudiante(nombre,puntosTecnicos,puntosHse){ // objeto construido que almacenara los datos obtenidos.
       this.nombre = nombre;
       this.puntosTecnicos = puntosTecnicos;
       this.puntosHse = puntosHse
     };


    }

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
  var nombre = prompt("Ingresa nombre de la alumna: ").toLowerCase(); //prompts que pediran inforamcion a ususrio.
  var puntosTecnicos =parseInt(prompt("Ingresa el puntaje tecnico "));
  var puntosHse = parseInt(prompt("Ingresa el puntaje en HSE"));

  function Estudiante(nombre,puntosTecnicos,puntosHse){
    this.nombre = nombre;
    this.puntosTecnicos = puntosTecnicos;
    this.puntosHse = puntosHse
  };
  var  chicaLab = new Estudiante(nombre,puntosTecnicos,puntosHse);
  return chicaLab;

}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHse + "</p>"; // aqui agregue los datos que dio el usuario.
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
  // Retornar el template de todos los estudiantes

//INTENTE HACER ESTO PERO ESTA RARO :(

  /*  var estudiantesEnlistadas =[];
    for(var i = 0, limite = agregarEstudiante.length; i<= limite ; i++){
      estudiantesEnlistadas = agregarEstudiante.push;
      return estudiantesEnlistadas;*/


}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor


/*for( var i = 0;estudiantes <    ; i++){
  for(var j= 0;)
}*/

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
