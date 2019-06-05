//clases:

class Coche{
    //propiedad estatica, para acceder Coche.numRuedas() y es un metodo
    static numRuedas(){
        return 4;
    }


    constructor(marca="", modelo="", color=""){ //se le pueden ponder valores por defecto
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        //si queremos que no sea del prototype, entoces la defino aqui y existira una por objeto
    }
    //los metodos no se les pone function y ya la crea dentro del prototype
    pintar(nuevoColor){
        this.color = nuevoColor;
    }
}

let tesla = new Coche("Tesla", "ZZ", "Negro");
let nuevo = new Coche();
console.log(tesla);
tesla.pintar("Azul");
console.log(tesla);
console.log(nuevo);
console.log(Coche.numRuedas());


//HERENCIAS

class Persona{
    constructor(nombre,apellido){ //se le pueden ponder valores por defecto
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getNombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

class Desarrollador extends Persona{  //con esto heredo de persona y ya no hace falta ni poner nombre ni apellido y puedo acceder a sus metodos
    constructor(nombre,apellido,puesto,sueldoP){
        super(nombre,apellido); //aqui inicializo llamando al constructor de Persona
        this.puesto = puesto;
        let sueldo = sueldoP; //esto seria una propiedad privada
        let edad = 20;
    
        this.getEdad = function (NuevaEdad) {
            return edad;
        }
        this.setEdad = function (NuevaEdad) {
            edad = NuevaEdad;
        }
    }   
}
//let persona = new Persona("Angel2", "last")
let angel = new Desarrollador("Angel", "Villalba", "35",1500);
//let angel2 = new Desarrollador(persona, "35",1500);
console.log(angel);
console.log(angel.getNombreCompleto());//metodo heredado
console.log(angel.edad);
console.log(angel.getEdad());
console.log(angel.nombre);
//console.log(angel2);