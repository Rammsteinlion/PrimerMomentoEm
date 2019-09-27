const fs = require('fs');

console.log("Raiz que desea eliminar (ingresa 'salir' para terminar)");
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
        
        fs.unlink(`la Raiz de ${ base }.txt`, function(err){
            if(err){
                return console.log('Ese archivo no existe');
            }
            console.log('Eliminado exitosamente');
        });

    }else{
        console.log("No ingresaste un número válido");
    }
});