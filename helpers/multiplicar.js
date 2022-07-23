require("colors");

const fs = require("fs");

const crearArchivo = async (base = 1, limit = 10 ,list = false) => {

    try {
        let salida = `===============================================\n Tabla del: ${base} hasta: ${limit} \n ===============================================\n`;
        let consola =`===============================================\n Tabla del: ${base} hasta: ${limit} \n ===============================================\n`;

        for (let i = 1; i <= limit; i++) {
            salida += `${base} x ${i} = ${base*i} ${i!==limit ? '\n' : ""}`;
            consola += `${base} ${'x'.blue} ${i} ${'='.red} ${base*i} ${i!==limit ? '\n' : ""}`;
        }
    
        list && console.log(consola);
    
        fs.writeFileSync(`./output/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}