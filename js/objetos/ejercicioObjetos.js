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
s
console.log("\n-----------Series-------------");
for(var serie of listaSeries){
    console.log(serie.titulo)
}

console.log("\n-------Series vistas----------");
for(var serieV of listaVistos){
    console.log(serieV.titulo)
}