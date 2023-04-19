import { render,screen } from '@testing-library/react'
import { JumboTron } from '../../componentes/JumboTron'
import '@testing-library/jest-dom/extend-expect'

describe('pruebas en JumboTron.js', () => {
    test('se muestra el titulo', () => {
        render(<JumboTron></JumboTron>)
    });
});