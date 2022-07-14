(function(){
    function activar(quien: string, 
        momento?: string,
        opcional: string = 'batiseñal'
        ){

        if(momento){
            console.log(`${quien} activo la ${opcional} en la ${momento}`)
        }else{
            console.log(`${quien} activo la ${opcional}.`)
        }


        
    }
    

    activar('Gordon', 'tarde')
})();



