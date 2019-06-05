//import {Pelicula,Persona} from './pelicula.mjs' //ya podemos usar esa clase, le digo la clase y la ruta
import * as TodoExportado from  './pelicula'; //asi exportamos todo forma 2º
let mercenariosFilm = new TodoExportado.Pelicula("Los Muñonarios", 120, 2010); //se lo agrego aqui
let persona = new TodoExportado.Persona("nombre","apellido")

console.log(mercenariosFilm);
console.log(persona);