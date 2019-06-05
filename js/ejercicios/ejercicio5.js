/*String.prototype.reverse = function (){
        cadena = this;
        cadena = cadena.replace(/ /g,",");             //gi tiene en cuanta las mayusculas y g no
        var arrayNormal = cadena.split("");            //pasar de string a un array
        var arrayVolteado = arrayNormal.reverse();     //invierto el array
        var stringCadena = arrayVolteado.join("");     //pasar de array a string
        stringCadena = stringCadena.replace(/,/g," "); 
        return stringCadena;
    }*/

/*Añado un metodo a la clase string */
String.prototype.reverse = function (){
    stringCadena = this.split("").reverse().join(""); 
    return stringCadena;
}
//Comprobacion
let cadenaNormal = "A mama Roma le aviva el amor a papa y a papa Roma le aviva el amor a mama";
let cadenaInvertida = cadenaNormal.reverse();
console.log(cadenaNormal);
console.log(cadenaInvertida);


/*Añado un metodo a la clase array */
Array.prototype.myInclude = function (elemento){
    return this.indexOf(elemento) > -1 ? true : false;
}

let elementoExiste = ["hola",5.3,3].myInclude("no");
console.log(elementoExiste);

//referencias---------------------------------------------
let perro = {
    nombre : "Balto",
    edad : 2
}
console.log(perro)
/*
let perro2 = perro1; //son valores por referencias, son el mismo objeto luego se solapan, luego no es lo que queremos
perro2.edad=3;
let perro1 = {perro};//me añado un objeto dentro de perro1
*/
let perro1 = {...perro}; //con esto si puedo igualarlos pero no por referencia sino por valor, son independientes
//otra forma let perro1 = Object.assign({}, perro);
perro1.edad=3;
console.log(perro1);


//referencias con arrays
let miArray = [1,2,3,4,5];
let nuevoArray = [...miArray];             //forma1, esta es la nueva forma de usar
let otroArray = [].concat(nuevoArray);     //forma2, asi se usaba antes
nuevoArray.push(9);
otroArray.push(10);
console.log(miArray);
console.log(nuevoArray);
console.log(otroArray);