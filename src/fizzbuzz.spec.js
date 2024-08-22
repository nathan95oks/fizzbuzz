import generarFizzBuzz from "./fizzbuzz.js"
describe("FizzBuzz", () => {
    it("generar el mismo numero si no sigue ninguna regla", () => {
      expect(generarFizzBuzz(1)).toEqual("1");
    });

    it("generar el mismo numero para cualquier numero si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
      });

    it("generar el Fizz para el 3", () => {
        expect(generarFizzBuzz(3)).toEqual("Fizz");
      });  

      it("generar el Fizz para el 5", () => {
        expect(generarFizzBuzz(5)).toEqual("Buzz");
      });  

      it("generar el FizzBuzz para el 3 Y 5", () => {
        expect(generarFizzBuzz(15)).toEqual("fizzbuzz");
      });  
    
      

      
      
     

  });