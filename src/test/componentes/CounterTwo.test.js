import { render,screen,fireEvent } from '@testing-library/react'
import { CounterTwo } from '../../componentes/CounterTwo'

describe('pruebas en CounterTwo.js', () => {
    
    test('los manejeadores son llamados', () => {
        const incrementhandler = jest.fn();
        render(<CounterTwo count={1} handleincrement={incrementhandler}></CounterTwo>)

        const btnincrmementar = screen.getByRole('button',{name:'incrementar'})

        fireEvent.click(btnincrmementar)

        expect(incrementhandler).toHaveBeenCalledTimes(1);
       
    });
});
