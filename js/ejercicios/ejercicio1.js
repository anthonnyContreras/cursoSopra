//creamos un numero aleatorio entre 0 y 50 ya que el random no contiene el 1 por eso es uno mas 51
do{
    var numero = Math.floor(Math.random()*51);
    var respuesta = true;
    var intentos = 0;
    alert("El numero que debes adivinar es: "+numero);

    adivinarNumero();
    respuesta = confirm("Queres seguir jugando");

}while(respuesta === true);


function adivinarNumero(){
    do {
        var numeroUsuario = prompt("introduce un numero:");
        intentos++;
        
        if(numeroUsuario > numero){ 
            alert("El numero que has introducido es mayor al numero");
        }
        else if(numeroUsuario < numero){
            alert("El numero que has introducido es menor al numero");
        }
        else{
            alert("Has ganado!!!!"+", El numero de intentos que necesitastes: "+ intentos);
        }
    } while(numero !== Number(numeroUsuario)); 
}

// CONTROL + D = puedo reemplazar 
// control + flechas puedo mover el codigo por el codigo
// alt y con click puedes hacer multiples escrituras
// control +Ñ abre el terminal del visual studio code 