//lo que este dentro de esta funcion esta seguro ya que no es accesible desde el exterior, sin pasar por traductor y se evita que cambien su valor
var traductor = (
    function () {
        
        function traduce(texto,idioma) {

            if(idioma === 'en'){
                var en = {
                    "hola" : "hello", //para acceder sera en["hola"] devuelve "hello"
                    "adios" : "bye",
                };
                return en[texto];     //buscará el valor en el objeto y si no lo encuentra devuelve un undefined
            }

            else if(idioma === 'it'){
                var it = {
                    "hola" : "ciao" ,
                    "adios" : "addio"
                };
                return it[texto]; 
            }

            else if(idioma === 'ja'){
                var ja = {
                    "hola" : "Kon'nichiwa",
                    "adios" : "Sayōnara" 
                };
                return ja[texto]; 
            }
            else{
                console.log("Esa traduccion no existe en nuestro sistema");
            }
        }

        return{
            traduce: traduce
        }

    }
)();

//testeo
console.log("traduce la palabra hola, en ingles es: "+ traductor.traduce("hola","en"));
console.log("traduce la palabra hola, en japones es: "+ traductor.traduce("hola","ja"));
console.log("traduce la palabra hola, en italiano es: "+ traductor.traduce("hola","it") + "\n");

console.log("traduce la palabra adios, en ingles es: "+ traductor.traduce("adios","en"));
console.log("traduce la palabra adios, en japones es: "+ traductor.traduce("adios","ja"));
console.log("traduce la palabra adios, en italiano es: "+ traductor.traduce("adios","it") + "\n");

console.log("traduce la palabra hola, en Aleman es: "+ traductor.traduce("hola","al") + "\n");
