let equipos = ['Valencia', 'Levante', 'Real Madrid', 'At Madrid', 'At Bilbao', 'Barcelona', 'Sevilla', 'Betis','Rayo Vallecano'];
let sizeInicial = equipos.length;
let Setequipo1 = [];
let Setequipo2 = [];
let equipoPasaRonda;

for(var i=0; i<sizeInicial/2 ;i++){
    let positionRandom = Math.floor(Math.random() * ((equipos.length)/2 - 0) + 0);
    Setequipo1.push(...equipos.splice(positionRandom,1));
    Setequipo2.push(...equipos.splice(positionRandom,1));
}
console.log("Lista de equipos:");
console.log(Setequipo1);
console.log(Setequipo2);

console.log("\nLista de equipos ya seleccionados:");
if(Setequipo1.length === Setequipo2.length){
    console.log(`Los equipos son pares\n`);
}
else{
    console.log(`Los equipos son impares\n`);
    
    if(Setequipo1.length > Setequipo2.length){
        equipoPasaRonda = Setequipo1.pop();
        console.log("este equipo pasa a la siguiente ronda: " + equipoPasaRonda);
    } 
      
    else{
        equipoPasaRonda = Setequipo2.pop();
        console.log("este equipo pasa a la siguiente ronda: " + equipoPasaRonda);
    }  
}

for (const i in Setequipo1) {
    console.log(`Partido ${i}:  ${Setequipo1[i]} vs ${Setequipo2[i]}`);
}

