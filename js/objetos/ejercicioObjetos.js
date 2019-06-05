//constructor
function Serie(titulo, episodios, episodiosVistos) {
    this.titulo = titulo;
    this.episodios = episodios;
    this.episodiosVistos = episodiosVistos;
    this.finalizados = function () {
        if((episodios-episodiosVistos) === 0) 
            return true;
        else
            return false;
    }
}

var listaSeries  = []; //array de todas las series
var listaVistos = [];  //array de las series vistas

//inserto series
listaSeries[0] = new Serie('The walking dead temporada1',100,100);
listaSeries[1] = new Serie('El mentalista',180,150);
listaSeries[2] = new Serie('Juego de tronos',110,110);
listaSeries[3] = new Serie('Big Bang Theory',210,210);

//agrego las series vistas
/*
for (var  i in listaSeries){
    if(listaSeries[i].finalizados())  //para que un metodo se ejecute hay que hacer finalizados() "CON PARENTESIS"
        listaVistos.push(listaSeries[i]); 
}
*/

var listaVistos = listaSeries.filter(function(serie){  //recorre el array y serie sera cada objeto
                    return serie.finalizados();        //si el devuelve true, entonces filter devuelve ese objeto si es false, entonces pasa al siguente elemento
                });

console.log("\n-----------Series-------------");
for(var serie of listaSeries){
    console.log(serie.titulo)
}

console.log("\n-------Series vistas----------");
for(var serieV of listaVistos){
    console.log(serieV.titulo)
}


var numeros = [1,34,12,64,75,343,64,75,2323,54]

var ej14 = numeros.map(function(num){
    return num%2 === 0 ? "PAR" : num;  //si es para devuelve PAR si no devuelve el numero
});

console.log(ej14);

//objetos de navegador --> abrir navegador...
//objetos de DOM --> podemos modificar el html ...
//objetos de JS --> maps,filter, string...


var texto = "hola mundo!!";

console.log(texto.replace(/o/gi,0));
console.log(texto.split("o"));


var texto = "hola mundooooo!!";
console.log(texto);
console.log(texto.substr(3,6)); 
console.log(texto.indexOf("mundo"));

var colores = ["amarillo", "rojo", "verde"];
console.log(colores);
colores.push("blanco");
console.log("push-->"+colores);
colores.unshift("negro");
console.log("unshift-->"+colores);
colores.shift();
console.log("shift-->"+colores);
colores.pop();
console.log("pop-->"+colores);

var jsonTest = JSON.stringify({nombre:"Last",apellido:"Last"});
console.log(jsonTest) //convierte un objeto en JSON
var objectTest = JSON.parse(jsonTest);
console.log(objectTest) //convierte un JSON en objeto