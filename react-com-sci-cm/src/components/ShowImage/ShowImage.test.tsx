import { render } from '@testing-library/react'
import ShowImage from './ShowImage'

describe('ShowImage component', () => {
    test('render correctly', () => {
        const expectImg = '/usr/img.png'
        const expectAlt = 'this test'

        const { getByAltText } = render(<ShowImage alt={expectAlt} src={expectImg} />)

        expect(getByAltText(expectAlt)).toBeTruthy()
    })
})