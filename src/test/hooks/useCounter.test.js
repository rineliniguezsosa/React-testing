import { renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";


describe('pruebas en useCounter hook', () => {
    test('debe de renderizar el valor inicial', () => {
        const { result } = renderHook(useCounter)
       
        expect(result.current.count).toBe(0);
    });
});