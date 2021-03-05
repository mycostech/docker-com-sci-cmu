import React, { useEffect } from "react"
import useGetHelloWorld from "../../services/helloWorld/useGetHelloWorld"
import CatError from "../CatError/CatError"
import CatWelcome from "../CatWelcome/CatWelcome"

function ConditionRender() {
    const [fetchApi, loading, error] = useGetHelloWorld()

    useEffect(() => {
        fetchApi()
    }, [fetchApi])
    return (
        loading ? <p>
            Loading...
        </p> : error ?
                <CatError /> :
                <CatWelcome />
    )
}

export default ConditionRender