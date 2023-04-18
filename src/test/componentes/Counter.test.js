import { render,screen } from '@testing-library/react'
import { Counter } from '../../componentes/Counter'


describe('pruebas en Counter.js', () => {
    test('se renderiza correctamente', () => {
        render(<Counter></Counter>)

        const headingelement = screen.getByRole('heading')

        expect(headingelement).toBeTruthy();
    });
});