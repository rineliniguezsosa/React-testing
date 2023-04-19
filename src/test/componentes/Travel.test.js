import { render } from '@testing-library/react'
import { Travel } from '../../componentes/Travel';

describe('pruebas en Travel.js', () => {
    test('debe de coincidir con el snapshot', () => {
        const { container } = render(<Travel></Travel>)
        
    });
});