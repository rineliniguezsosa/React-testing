import { render,screen } from '@testing-library/react'
import { Habilidades } from '../../componentes/Habilidades'

describe('pruebas en el componente Habilidades.js', () => {
    const skills = ['react','javascript','sql']
    test('debe de renderizar correctamente', () => {
        render(<Habilidades skills={skills}/>)
        
        expect(screen.getByRole('list')).toBeTruthy();
    });

    test('debe de mostrar la lista de los skills', () => {
        render(<Habilidades skills={skills}/>)
    });

});
