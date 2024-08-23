function generarFizzBuzz(numero){
   
    if( (numero == 3 || numero %3 ===0) && (numero % 5 != 0)){
        return "Fizz"

    }
    if((numero ==5 || numero %5===0)&& (numero % 3 != 0)){
        return  "Buzz"
    }

    if((numero == 3 || numero %3===0) && (numero ==5 || numero%5===0)){
        return  "fizzbuzz"
    }

    // return numero+""; // concat cad
    //console.log(numero);
    return numero.toString();
 };



// Función que genera la secuencia hasta el límite especificado
function generarSecuenciaHasta(limite) {
    let resultado = [];
    for (let i = 1; i <= limite; i++) {
        resultado.push(generarFizzBuzz(i)); // Llamada a generarFizzBuzz para cada número
    }
    return resultado.join(" "); // Devuelve la secuencia como una cadena separada por espacios
}

export { generarFizzBuzz, generarSecuenciaHasta };
