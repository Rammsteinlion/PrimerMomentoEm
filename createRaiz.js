const fs = require('fs');

console.log("Ingresa un número (ingrese 'salir' para terminar)");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var dato = d.toString().trim();
    console.log("Ingresaste el valor: " + dato);
    if(dato == 'salir'){
        return process.stdin.destroy();
    }
    //process.stdin.destroy();
    var base = parseInt(dato);
    if(base.toString().trim() != "NaN"){
        console.log("Procederé a crear la tabla");
        var R = "";
        for (let index = 0; index <= 1; index++) {
            //R += `${ base} * ${ index } = ${ base * index} ` + "\n";
            R += ` ${ base * base  } ` + "\n";
        }

        fs.writeFile(
            `La Raiz de ${ base }.txt` , 
            R, 
            (err) => {
                if (err) 
                    throw err;
                console.log(`Raiz ${ base } Calculada con Exito.`);
            }
        );
    }else{
        console.log("ingresaste un número válido");
    }
    
});

