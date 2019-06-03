var texto = "Hola mundo!!!";
console.log(texto);
console.log(typeof(texto));

texto = 3; //tipo number no distingue entre floats e ints

console.log(texto);
console.log(typeof(texto));

/*
console.log(    "a" 
); no tiene en cuenta los saltos de linea y los espacios*/

//tres formas de poner comillas dentro de la comillas
var nombre1 = "Soy 'Anthonny'";
var nombre2 = 'Soy "Anthonny"';
var nombre3 = "Soy \"Anthonny\"";
var nombre4 = "";

//Es True
if (nombre1) {
    console.log(nombre1);
    console.log("Es Trusthy");
}
//Es False
if (nombre4) {
    console.log(nombre4);
    console.log("Es Trusthy");
}
else{
    console.log("Es falsy");
}

var hola; //por defecto tendra el valor "undefined" es como NULL


//ARRAYS
var listaNumbers = [1,2,3,4,5];              //forma 1º de crearlo
var listaConstructor = new Array(6,7,8,9);   //fomra 2º de crearlo
var lista2 = new Array(3);                   //array de 3 elementos
lista2[0] = 10;
lista2[1] = 100;
console.log(lista2);
lista2.push(20);         //añado un elemento
lista2.push(80); 
console.log(lista2);

nombre1 = "hola";        //creo un array de charts
console.log(nombre1[1]); //me devuelve la o de hola

nombre1 = 22;
console.log(nombre1[1]); //aqui no se puede hacer ya que no reconoce una array de caracteres

var direccion = ["calle", 'norte', 12, '3b', 45600, "Madrid"];
console.log(direccion); 

//si  3/2 el resto es 0 entonces se guarda en num como par si no que sea impar
var num = (3 % 2 === 0)/*si es true*/ ? 'Es par'/*seria el if */ : "es impar"/*seria el else */;
//esto seria su equivalencia
var num2 = "";
if(3 % 2 === 0){
    num2 = "es par";
}
else{
    num2 = "es impar";
}

console.log(num);
console.log(num2);

//Mostrar por consola: 
console.log("mensaje normal");           //es mensajes
console.warn("mensaje de peligro");      //en la web se ven los efectos por node no
console.error("mensaje de error"+"\n");

//solo funcionan en web no en node
//alert("mensaje pero se muestra en un poup");
//var esVerdad = confirm("es verdad lo que dice??");
//var escribir = prompt("Escribe tu nombre:");

//bucles:
//for
var listaNombres = ["Juan","Pedro","Maria","Susana"];
for(var i=0; i<listaNombres.length; i++){
    console.log(listaNombres[i]);
}

//esta i va ir valiendo 0,1,2,3... las posiciones del array
for (var  i in listaNombres){
    console.log("Posicion: " + i + " nombre: " + listaNombres[i]);
}

//este nombre valdra Juan, Pedro,... es valor de cada elemento
for (var  nombre of listaNombres){
    console.log(nombre);
}

//while 
var dato = prompt("introduce un numero"); 

while (Number(dato) !== -1) {   // lo convierto en numero
    console.log("Introduce un -1 para salir");
    dato = prompt("introduce un numero"); //lo que devuelve el prompt es un string
}

//do while la primera vez se ejecuta si o si y despues dependera de la condicion

do {
    
} while (condition);