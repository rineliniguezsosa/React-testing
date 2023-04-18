import { render,screen,fireEvent } from '@testing-library/react'
import { Counter } from '../../componentes/Counter'


describe('pruebas en Counter.js', () => {
    test('se renderiza correctamente', () => {
        render(<Counter></Counter>)

        const headingelement = screen.getByRole('heading')

        expect(headingelement).toBeTruthy();
    });

    test('renderiza la cuenta en cero', () => {
        render(<Counter></Counter>)

        const headingelement = screen.getByRole('heading').textContent 

        expect(headingelement).toBe("0");
    });

    test('renderiza la cuenta en 1', () => {
        render(<Counter></Counter>)

        const btnincrement = screen.getByRole('button', {name:"incrementar"})
        fireEvent.click(btnincrement)

        const headingelement = screen.getByRole('heading').textContent
        
    });
});