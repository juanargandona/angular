(()=>{
    const avenger ={
        nombre: 'Steve',
        clave: 'Capitan',
        poder: 'Droga'
    }

    const {nombre, clave, poder} = avenger;

    // console.log(avenger.nombre);
    // console.log(avenger.clave);
    // console.log(avenger.poder);

    console.log(nombre);
    console.log(clave);
    console.log(poder);

    const extraer = (avenger: any) =>{
        const {nombre, poder } =  avenger;

        console.log(nombre);
        console.log(poder)
    }
    extraer(avenger)

    const extraer2 = ({nombre2, poder2}: any) =>{
        //const {nombre, poder } =  avenger;

        console.log(nombre);
        console.log(poder)
    }
    extraer(avenger)

    const avengers : string[] = ['Thor', 'Ironman','Spiderman'];
    const[, , arana] = avengers;

    const extraerArr = ([thor, ironman, Spiderman]: string[]) =>{
        console.log(thor);
        console.log(ironman);
        console.log(Spiderman);

    }

    extraerArr(avengers);


})();



