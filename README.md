const fs = require('fs');



  console.log("Escribe tu nombre (ingrese 'salir' para terminar)");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var dato = d.String;
    console.log("Ingresaste: " + dato);
    if(dato == 'salir'){
        return process.stdin.destroy();
    }
    //process.stdin.destroy();
    //var base = parseInt(dato);
    var base = String(dato);
    if(base.toString().trim() != "NaN"){
        let saludo = "Hello";
        let saludo2 ="HI";
        let saludo3 = "Holas";
        for (let index = 0; index < 3; index++) {
            console.log(base + saludo )
        }

        fs.writeFile(
            `saludo ${ saludo }.txt` , 
            base, 
            (err) => {
                if (err) 
                    throw err;
                console.log(`Saludo ${ base } creado.`);
            }
        );
    }else{
        console.log("No  válido");
    }
    
});