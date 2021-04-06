class Ninja{
    constructor(nombre){
        this.nombre=nombre;
        this.salud=100;
        this.velocidad=3;
        this.fuerza=3;
    }

    sayName(){
        console.log('Hola me llamo '+this.nombre);
    }

    showStats(){
        const stats={
            nombre: this.nombre,
            fuerza: this.fuerza,
            velocidad: this.velocidad,
            salud: this.salud
        }
        console.log(stats);
    }

    drinkSake(){
        this.salud+=10;
        console.log(this.nombre+' ha tomado sake. Su salud es de: '+this.salud);
    }
}

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

