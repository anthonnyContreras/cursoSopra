let pelicula = {
    titulo: "Los vengadores",
    director: "Hermanos Russo",
    genero: "Accion",
    setAnyoEstreno: function (anyo) {
        this.anyoEstreno = anyo;
        let mostrar = () => {    //con esto solucionamos porder acceder al this
            console.log(`********************`);
            console.log(this);
            console.log(`********************`);
        }
        mostrar()
    }
}
pelicula.setAnyoEstreno(2019);
console.log(`********************
${pelicula.anyoEstreno}
********************\n`);

//REST PARAMS (n parametros a un solo parametro que es un array)
//...nums --> cuando llamemos a gerNumLoteria con unos numeros, todos estos numero los metera en una array
//llamado nums, luego nums sera un array vacio ren principio
//si añadimos un parametro, el 1º parametro se añade a idSorteo y el resto va al array
function getNumbLoteria(idSorteo,...nums) {  
    console.log(nums);
    return `Sorteo ${idSorteo}:  ${nums.join(',')}` ;
}

let numGanador = getNumbLoteria(1,34,24,31,28);
console.log(numGanador);

// SPREAD OPERATOR (aqui es al contrario tenemos un array y n elementos de entra de la funcion)
let telefono1 = ['+34','677334672'];
let telefono2 = ['+34','677334672',"AAmama"];

function creaNumConPrefijo(prefijo ="0", numTelf="0000000", nombre="desconocido") { //para evitar undefined en buena practica porner valores por defecto
    return `${nombre}:  ${prefijo} ${numTelf}`
    
}

//creaNumConPrefijo(telefono[0], telefono[1]); //esta seria la fomra comun
let phone1 = creaNumConPrefijo(...telefono1); //aqui el pondra cada valor con cada elemento 
console.log(phone1);

let phone2 = creaNumConPrefijo(...telefono2); //aqui el pondra cada valor con cada elemento 
console.log(phone2);

//Desestructuracion

let serie = {
    titulo: "Gang Land Undercover",
    temporadas: 3,
    episodios: 30,
    finalizada: true
}

let mascotas = ['gato', 'perro', 'pez', 'canario'];
/* forma tradicional de hacerlo
let gato = mascotas[0];
let perro = mascotas[1];
let pez = mascotas[2];
*/
//extraigo cada uno de sus valores y los va guardando en cada uno de esas variables
let[gato,perro,pez,canario] = mascotas;
console.log(`${gato}  ${perro}  ${pez}  ${canario}`);
//si quiero que no aparezca perro puedo hacer esto let[gato,,pez,canario] = mascotas;, dejando el espacion en blanco
let[gato2,perro2,...restoMascotas] = mascotas;  //le pongo el 2 porque ya existe gato y perro
console.log(`${gato2}  ${perro2}  ${restoMascotas}`); 

//ahora hacemos lo mismo pero para un objeto, es igual pero con {}, como no es un array no sabe en que orden debe ponerlo,
//para ello las variables tiene que coincidir con el nombre de los campos
let{titulo, temporadas, episodios, finalizada}=serie; //si no llevan el mism nombre daria un error o nose copian
console.log(`${titulo}  ${temporadas}  ${episodios}  ${finalizada}`);