import { render } from '@testing-library/react'
import CatError from './CatError'

describe('CatError Component', () => {
    test('render correctly', () => {
        const { getByAltText } = render(<CatError />)

        expect(getByAltText('the cat found error')).toBeTruthy()  
    })
})
