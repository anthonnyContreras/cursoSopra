//objeto de tipo persona
var persona = {
    nombre: "Anthonny",
    apellido:"Contreras",
    'codigo postal': "45600", //se puede porner "" o sin comillas si es una palabra, evitar que sean 2

    //metodo del objeto
    nombreCompleto: function () {
        return this.nombre +" "+ this.apellido;
    }
}

console.log(persona.nombre);

var clave = "apellido";
console.log(persona[clave]); //me buscara dentro de persona el apellido persona["apellido"]
console.log(persona.nombreCompleto()); //le paso la funcion con ()

var pelicula = {
    titulo: "Los vengadores",
    director: {                 //un objeto dentro de otro
        nombre:"...",
        apellido:"Russo",
    },
    genero: "Accion",
    setAnyoEstreno: function (anyo) {
        this.anyoEstreno = anyo; //creo un atributo cuando se lo pase
        var self = this; //creo una variable self y le paso la informacion de this
        function mostrarPorConsola() {
            //console.log(this)  un this es un objeto que ejecuta la funcion y que contiene toda la informacion del objeto
            //para solucionar esto hacemos 
            console.log(self)
            console.log(this)
        }
        //mostrarPorConsola()
        //otra forma de que el this me miestre el objeto mostrarPorConsola().bind(pelicula); o usar mostrarPorConsola().call(pelicula);
        mostrarPorConsola.bind(pelicula)(); //asi si va el this
    }
}

pelicula.setAnyoEstreno(2019);
console.log(pelicula.anyoEstreno);

//esto es un objeto pero si quiero varios objetos de tipo serie tendria que crear otro,
//para evitar esto hay que crear una clase
var serie = {
    titulo: 'the walking dead temporada1',
    episodios: 180,
    episodiosVistos: 178,

}
//esto es una funcion constructora que genera objetos de tipo serie, es como la clase en java
function Serie(titulo, episodios, episodiosVistos) {
    this.titulo = titulo;
    this.episodios = episodios;
    this.episodiosVistos = episodiosVistos;
}

Serie('the walking dead temporada2',180,178); //esto se añade al window, pero queremos que se cree en un objeto
//para solucionar esto hay que usar new para que cree un objeto vacio {} y luego lo incializamos

var objetoSerie = new Serie('the walking dead temporada2',180,178);

//otra forma
var objetoSerie2 = {};                                           //creo un objeto vacio
var objetoSerie3 = new Object();                                 //creo un objeto vacio forma 2
objetoSerie2 = new Serie('the walking dead temporada3',180,178); //aqui lo inicializo

console.log(serie);
console.log(objetoSerie);
console.log(objetoSerie2);

var cancionBatman = new Array(16).join("what"-1) +'Batman!';
console.log(cancionBatman);


//prototype

//this sera lo que llame a la funcion pintar, ejemplo si yp usa pintar() this sera objeto de tipo window, pero si hago coche.pintar() this sera un objeto de tipo coche
function Coche(marca,modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;

    this.pintar = function (nuevoColor) {
        this.color = nuevoColor;    
    }
}

let tesla = new Coche('Tesla','Roaster','rojo');
let audi = new Coche('Audi','A3','negro');

console.log(tesla);
console.log(audi);
//para que las funciones sean comnues a la clase y no al objeto
//para ello se usa prototype, en el inspeccionar tenemos __proto__ donde se ve el constructor comun a los objetos
console.log(`******************************`);
function CocheProto(marca,modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    //le quito el metodo
    /*this.pintar = function (nuevoColor) {
        this.color = nuevoColor;    
    }*/
}
CocheProto.prototype.pintar = function (nuevoColor) {
    this.color = nuevoColor;    
}

tesla = new CocheProto('Tesla','Roaster','rojo');
audi = new CocheProto('Audi','A3','negro');
console.log(tesla);
console.log(audi);

console.log(`cambio los colores de tesla a verde ${tesla.pintar("Verde")}  y del audi a rojo ${audi.pintar("rojo")}`)
console.log(tesla);
console.log(audi);