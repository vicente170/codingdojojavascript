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

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

module.exports=Ninja;