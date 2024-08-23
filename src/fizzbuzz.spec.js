// fizzbuzz.spec.js
import { generarFizzBuzz, generarSecuenciaHasta } from "./fizzbuzz.js";

describe("FizzBuzz", () => {
    it("debería generar el mismo número si no sigue ninguna regla", () => {
        expect(generarFizzBuzz(1)).toEqual("1");
    });

    it("debería generar el mismo número para cualquier número que no sigue ninguna regla", () => {
        expect(generarFizzBuzz(2)).toEqual("2");
    });

    it("debería generar 'Fizz' para múltiplos de 3", () => {
        expect(generarFizzBuzz(3)).toEqual("Fizz");
    });

    it("debería generar 'Buzz' para múltiplos de 5", () => {
        expect(generarFizzBuzz(5)).toEqual("Buzz");
    });

    it("debería generar 'fizzbuzz' para múltiplos de 3 y 5", () => {
        expect(generarFizzBuzz(15)).toEqual("fizzbuzz");
    });

    it("debería generar la secuencia correcta hasta un límite dado", () => {
        expect(generarSecuenciaHasta(15)).toEqual("1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 fizzbuzz");
    });
});
