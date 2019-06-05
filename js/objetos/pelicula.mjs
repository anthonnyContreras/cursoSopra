 //puedo ponerlo asi  o al finals
 /*export, con default fuerzo a que sea lo unico que se exporta y no hace falta decirle al import {Pelicula}, sino que digo */
 class Pelicula{  
    constructor(titulo,duracion,estreno){ 
        this.titulo = titulo;
        this.duracion = duracion;
        this.estreno = estreno;
    
    }   
}

class Persona{
    constructor(nombre,apellido){ 
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

//con esto podemos exportar todo, forma 2º
export{Pelicula,Persona}