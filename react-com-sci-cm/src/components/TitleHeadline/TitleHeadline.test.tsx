import { render } from '@testing-library/react'
import TitleHeadline from './TitleHeadline'

describe('TitleHeadline component', () => {
    test('render correctly', () => {
        const expectTitle = 'MyCos Testing'
        const {  getByText } = render(<TitleHeadline title={expectTitle} />)

        expect(getByText(expectTitle)).toBeTruthy()
    })
})