import { render,screen } from '@testing-library/react'
import { HelloWorld } from '../../componentes/HelloWorld';

describe('Pruebas en con componente HelloWorld.js', () => {
    test('El componente HelloWorld debe de renderizarse correctamente', () => {
        render(<HelloWorld/>)
        const Hello = screen.getByText('Hello World')

        expect(Hello).toBeInTheDocument()
    });
});