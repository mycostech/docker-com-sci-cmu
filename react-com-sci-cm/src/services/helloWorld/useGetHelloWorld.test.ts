import useGetHelloWorld from './useGetHelloWorld'
import { act, renderHook } from '@testing-library/react-hooks'
import helloWorldService from './helloWorldService'

jest.mock('./helloWorldService')

const mockHelloWorldService = helloWorldService as jest.Mock<any>

describe('useGetHelloWorld Hook', () => {

    afterEach(jest.clearAllMocks)

    test('when fetch success, error should false', async () => {
        const { result, waitForNextUpdate } = renderHook(useGetHelloWorld)
        mockHelloWorldService.mockResolvedValue(true)

        act(() => {
            result.current[0]()
        })
        await waitForNextUpdate()
        /**
         * loading
         */
        expect(result.current[1]).toEqual(false)

        /**
         * error
         */
        expect(result.current[2]).toEqual(false)
    })

    test('when fetch fail, error should ge true', async () => {

        const { result, waitForNextUpdate } = renderHook(useGetHelloWorld)
        mockHelloWorldService.mockRejectedValue(true)

        act(() => {
            result.current[0]()
        })
        await waitForNextUpdate()
        /**
         * loading
         */
        expect(result.current[1]).toEqual(false)

        /**
         * error
         */
        expect(result.current[2]).toEqual(true)
    })
})