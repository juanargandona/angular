(function(){

    const miFuncion = function(a: string){
        return a;

    }

    const miFuncionF = (a: string)=>{
        return a;
    }

    const miFuncionF2 = (a: string)=>a.toUpperCase();

    const sumarN = function(a: number, b: number){
        return a + b;
    }

    const sumarF = (a: number, b: number)=> a + b;

    console.log(miFuncion('Normal'));
    console.log(miFuncionF2('Normal'));
    console.log(sumarF(2,3));

    const hulk = {
        nombre: 'Hulk',
        smash(){
            setTimeout(()=>{
                console.log(`${this.nombre} smash!!!`)
            }, 1000)
            
        }
    }

    hulk.smash();


})();



