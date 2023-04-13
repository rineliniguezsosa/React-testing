import { render,screen } from '@testing-library/react';
import { GetByRole } from "../../componentes/GetByRole";


describe('pruebas en GetByRole.js', () => {

    test('debe de renderizar correctamente el componente', () => {

        render(<GetByRole/>)
    });
});