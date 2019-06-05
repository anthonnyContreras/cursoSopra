function Polindromo1(cadenaTest){
    var cadenaAux = [];
    var j = 0;

    cadenaTest = cadenaTest.replace(/ /g,"");     //elimilos los espacios si los tuviera
    
    for(var i=cadenaTest.length; i>=0; i--){      //recorro el array al contrario para compararlo
        cadenaAux[j]=cadenaTest[i];
        j++
    }
    cadenaAux = cadenaAux.toString().replace(/,/g,"").replace(/ /g,"");   //le quito las comas y los espacios

    console.log(cadenaTest);
    console.log(cadenaAux);

    if(cadenaTest === cadenaAux)
        return true;
}

function Polindromo2(cadenaTest2){
   
    cadenaTest2 = cadenaTest2.replace(/ /g,""); //gi tiene en cuanta las mayusculas y g no
    var arrayNormal = cadenaTest2.split("");  //pasar de string a un array
    var arrayVolteado = arrayNormal.reverse();
    var stringCadena = arrayVolteado.join(""); //pasar de array a string
   
    console.log(cadenaTest2);
    console.log(stringCadena);

    if(cadenaTest2 === stringCadena)
        return true;
}

esPolindro1 = false;
esPolindro2 = false;

//1º forma de hacerlo
esPolindro1 = Polindromo1("no soy polindromo");
if(esPolindro1)
    console.log("Es polindromo")
else
    console.log("No es polindromo")

//2º forma de hacerlo
esPolindro2 = Polindromo2("hola aloh");
if(esPolindro2)
console.log("Es polindromo")
else
console.log("No es polindromo")



