function generarFizzBuzz(numero){
    if( numero == 3){
        return "Fizz"

    }
    if(numero == 5){
        return  "Buzz"
    }
    
    return numero+""; // concat cad
   // console.log(numero);
 };
 export default generarFizzBuzz;