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
        
        expect(headingelement).toBe("1");
    });

    test('renderiza la cuenta en 10 cuando selecciona el boton establece', () => {
        render(<Counter></Counter>)

        const btninput = screen.getByRole('spinbutton')
        fireEvent.input(btninput,{target:{value:10}})

        const btnset = screen.getByRole('button', {  name: "establece"})
        fireEvent.click(btnset)

        const headingelement = screen.getByRole('heading').textContent
        
        expect(headingelement).toBe("10");
    });
});