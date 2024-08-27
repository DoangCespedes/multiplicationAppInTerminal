//PROGRAMA EL CUAL PODEMOS IMPRIMIR DOCUMENTO . EJM TABLA DE MULTIPLICAR
 
const fs = require('fs');
require('colors')
const crearArchivo = async ( base = 5 , listar = false, hasta = 10) => {

    try {
        
         
        let salida = '';
    
    
    for (let i = 1; i <= hasta; i++) {
        salida += `${base}  ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }
    if (listar) {  
        console.log('===================================='.green);
        console.log(`Tabla de : ${base}`.green);
        console.log('===================================='.green);
       
       
        console.log(salida.green)
    }
    
    
    fs.writeFileSync(`Tabla-${base}.txt`, salida)
    
    return `Tabla-${base}.txt creada`;
    
    }  
    catch (error) {
        throw error
    }
}
   
module.exports = {
    crearArchivo
}