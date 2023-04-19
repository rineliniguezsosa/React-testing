import { renderHook,act } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";


describe('pruebas en useCounter hook', () => {
    test('debe de renderizar el valor inicial', () => {
        const { result } = renderHook(useCounter)
       
        expect(result.current.count).toBe(0);
    });

    test('debe de renderizar y pasar el valor de la cuenta', () => {
        const { result } = renderHook(useCounter,{initialProps:10})
       
        expect(result.current.count).toBe(10);
    });

    test('la cuenta debe de incrementar', () => {
        const { result } = renderHook(useCounter)

        act(()=> result.current.increment())

        expect(result.current.count).toBe(1);
    });
});