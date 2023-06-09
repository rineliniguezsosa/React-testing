import { render,screen } from '@testing-library/react';
import { Aplication } from "../../componentes/Aplication";


describe('pruebas en Aplication.js', () => {

    test('debe de renderizar correctamente el componente', () => {

        render(<Aplication/>)

        const element = screen.getByRole("textbox",{name:'Name'})

        expect(element).toBeTruthy();

        const heading1 = screen.getByRole('heading',{name:'Job application form'})

        expect(heading1).toBeTruthy();

        const Namelement = screen.getByLabelText('Name',{selector:'input'})

        expect(Namelement).toBeTruthy();

        const Namelement2 = screen.getByPlaceholderText('Fullname')

        expect(Namelement2).toBeTruthy();

        const parragraphelement = screen.getByText('All fields are mandatory')

        expect(parragraphelement).toBeTruthy();

        const inputelement = screen.getByDisplayValue('rinel')

        expect(inputelement).toBeTruthy();

        const altelement = screen.getByAltText("a person with a laptop")

        expect(altelement).toBeTruthy();

        const getelementbytitle = screen.getByTitle('close')

        expect(getelementbytitle).toBeTruthy();

        const getelementbydatatestid = screen.getByTestId("custom-element")

        expect(getelementbydatatestid).toBeTruthy();
    });
});