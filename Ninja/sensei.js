const Ninja = require("./ninja");

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.salud=200;
        this.velocidad=10;
        this.fuerza=10;
        this.sabiduria=10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
console.log({superSensei});

