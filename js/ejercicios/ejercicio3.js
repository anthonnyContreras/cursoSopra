//Estas funciones se escriben en el objeto global window
/*
function sumar(n1, n2) {
    return n1+n2;
}
function restar(n1, n2) {
    return n1-n2;
}
function producto(n1, n2) {
    return n1*n2;
}
function dividir(n1, n2) {
    return n1/n2;
}
*/
//si existe una libreria que tenga el mismo nombre que una de nuestras funciones, lo uqe pasará es
//que sobreescribira nuestra funcion y nos bloqueará la funcion suma
function sumar(n1, n2) {
    return 1;
}

//las funciones autoejecutables son anonimas y solo se ejecuta una vez
/*(
    function () {
        console.log("soy una funcion autoejecutable");
    }
)()*/ //poniendolo los parentesis le decimos que se ejecute 
    //ya que si yo quiero ejecutar una funcion pongo nombre()

    //CON ESTO GUARDO EN CALCULADORA LOS METODOS
var calculadora = (
    function () {
        function sumar(n1, n2) {
            return n1+n2;
        }
        function restar(n1, n2) {
            return n1-n2;
        }
        function producto(n1, n2) {
            return n1*n2;
        }
        function dividir(n1, n2) {
            return n1/n2;
        }
        console.log("soy una funcion autoejecutable");
        //DEVUELVO LOS METODOS EN UN OBJETO
        return{
            suma: sumar,
            resta: restar,
            producto: producto,
            divide: dividir
        }
    }
)()
//Para acceder hay que usar calculadora.suma(3,6)...
