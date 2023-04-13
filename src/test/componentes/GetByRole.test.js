import { render,screen } from '@testing-library/react';
import { GetByRole } from "../../componentes/GetByRole";


describe('pruebas en GetByRole.js', () => {

    test('debe de renderizar correctamente el componente', () => {

        render(<GetByRole/>)

        const element = screen.getByRole("textbox",{name:'Name'})

        expect(element).toBeTruthy();

        const heading1 = screen.getByRole('heading',{name:'Job application form'})

        expect(heading1).toBeTruthy();

        const Namelement = screen.getByLabelText('Name',{selector:'input'})

        expect(Namelement).toBeTruthy();

        const Namelement2 = screen.getByPlaceholderText('Fullname')

        expect(Namelement2).toBeTruthy();
    });
});