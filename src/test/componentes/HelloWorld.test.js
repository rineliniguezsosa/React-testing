import {render,screen} from '@testing-library/react'
import { HelloWorld } from '../../componentes/HelloWorld';

describe('Pruebas en con componente HelloWorld.js', () => {

    test.skip('El componente HelloWorld debe de renderizarse la palabra Hello', () => {
        
        render(<HelloWorld/>)

        const HelloText = screen.getByText('Hello')

        expect(HelloText).toBeTruthy();
        
    });
});