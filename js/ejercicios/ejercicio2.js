
do{
    var numero = 0;
    var salir = false;
    
    var numeroLimite = 20;
    var numeroP = manoPersona();
    var numeroM = manoMaquina();

    alert("El total de tus numeros es = "+ numeroP + " (20-tus puntos =" + Math.abs(numeroLimite-numeroP)+")");
    alert("El total de numeros de la maquina es = "+ numeroM + " (20-Sus puntos =" + Math.abs(numeroLimite-numeroM)+")");
    Comprobacion(numeroP, numeroM);
   
    respuesta = confirm("Quieres seguir jugando");

}while(respuesta === true);


function manoPersona(){
    do {
        respuesta = confirm("Tienes actualemtne = "+numero +" puntos"+", Quieres un numero:");            //le pregunto si quiere un numero
        
        if(respuesta == true){
            numero += Math.floor(Math.random()*11);
            if(numero >= 20)   
                return -1;
        }
        else{
            salir = true;  
            return numero; //devuelvo el numero total
        }
           
    } while(!salir);  
}

function manoMaquina(){
    do {
       numero += Math.floor(Math.random()*11);
       if(numero >= 20)
            return -1;
    } while(numero < 17); 

    return numero; //devuelvo el numero total
}

function Comprobacion(numeroP, numeroM){
    if(numeroP === -1){ 
        alert("Te has pasado de 20 puntos, has perdido");
    }
    else if(numeroM === -1){ 
        alert("Has ganado, la maquina se paso de 20");
    }
    else if(Math.abs(numeroLimite-numeroP) <= Math.abs(numeroLimite-numeroM))
        alert("Has ganado")
    else
        alert("Has perdido")
}





