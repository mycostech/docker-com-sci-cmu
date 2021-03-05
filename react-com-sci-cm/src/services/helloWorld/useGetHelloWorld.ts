import { useCallback, useState } from "react"
import helloWorldService from './helloWorldService'

const useGetHelloWorld = () => {

    const [loading, setLoading] = useState<boolean>(true)

    const [error, setError] = useState<boolean>(false)

    const fetchHelloWorld = useCallback(
        () => {
            setLoading(true)
            setError(false)
            helloWorldService()
                .catch(() => setError(true))
                .finally(() => setLoading(false))
        },
        [setError, setLoading],
    )

    return [fetchHelloWorld, loading, error] as const
}

export default useGetHelloWorld