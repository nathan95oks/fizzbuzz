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

    return numero+""; // concat cad
   // console.log(numero);
 };
 export default generarFizzBuzz;