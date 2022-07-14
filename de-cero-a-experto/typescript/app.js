"use strict";
(() => {
    console.log('Inicio');
    // class Avenger{
    //     nombre: string;
    //     equipo: string;
    //     nombreReal: string;
    //     puedePelear?: boolean;
    //     peleasGanadas?: number;
    //     constructor(nombre: string, equipo: string, nombreReal: string){
    //         this.nombre = nombre;
    //         this.equipo = equipo;
    //         this.nombreReal = nombreReal;
    //     }
    // }
    // const antman = new Avenger('Antman','Capi', "Manu");
    // console.log(antman)
    class Avenger {
        // nombre: string;
        // equipo: string;
        // nombreReal: string;
        // puedePelear?: boolean;
        // peleasGanadas?: number;
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    const antman = new Avenger('Antman', 'Capi', "Manu");
    console.log(antman);
    console.log('Fin');
})();
