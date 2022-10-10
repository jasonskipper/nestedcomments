// custom hook to take any code that runs async and returns data, loading state, and error (if present)
// first way: automatically run in a useEffect anytime anything changes (good for PostList)

import { useCallback, useEffect } from "react"
import { useState } from "react"

// second way: allows you to run it whenever you want (like posting a comment)    
export function useAsync(func, dependencies =  []) {
    const { execute, ...state } = useAsyncInternal(func, dependencies, true)

    // immediately invoke execute function 
    // every time deps change, execute updates
    // every time execute updates, it reruns itself 
    useEffect(() => {
        execute()
    }, [execute])

    return state
    // useAsync is exacctly the same as useAsyncFN except without execute function and we immediately invoke automatically and reinvoke every time deps change 

}
export function useAsyncFn(func, dependencies =  []) {
    return useAsyncInternal(func, dependencies, false)
    // returns a function instead of automatically running 
    
}

function useAsyncInternal(func, dependencies, initialLoading = false) {
    const [loading, setLoading] = useState(initialLoading)
    const [error, setError] = useState()
    const [value, setValue] = useState()

    const execute = useCallback((...params) => {
        setLoading(true)
        return func(...params).then(data => {
            setValue(data)
            setError(undefined)
            return data
        }).catch(error => {
            setError(error)
            setValue(undefined)
            return Promise.reject(error)
        }).finally(() => {
            setLoading(false)
        })
    }, dependencies)

    return { loading, error, value, execute }
}