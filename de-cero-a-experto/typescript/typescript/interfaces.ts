(()=>{
    console.log('Inicio');

    interface Xmen{
        nombre: string;
        edad: number;
    }

    const enviarMision = (xmen: Xmen)=>{
        console.log(`Enviando a ${xmen.nombre} a la mision`)
    }

    const regresarMision = (xmen: Xmen)=>{
        console.log(`Regresando de la ${xmen.nombre} a la mision`)
    }

    const wolverine: Xmen={
        nombre: 'Logan',
        edad: 60
    }

    enviarMision(wolverine)
    regresarMision(wolverine)
    console.log('Fin')

})();



