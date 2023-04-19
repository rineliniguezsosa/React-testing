import { render,screen } from '@testing-library/react'
import { CounterTwo } from '../../componentes/CounterTwo'

describe('pruebas en CounterTwo.js', () => {
    
    test('los manejeadores son llamados', () => {
        const incrementhandler = jest.fn();
        render(<CounterTwo count={1} handleincrement={incrementhandler}></CounterTwo>)
    });
});
