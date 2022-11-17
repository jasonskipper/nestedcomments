// custom hook to take any code that runs async and returns data, loading state, and error (if present)
// first way: automatically run in a useEffect anytime anything changes (good for PostList)
// second way: allows you to run it whenever you want (like posting a comment)    


import { useCallback, useEffect } from "react"
import { useState } from "react"

// automatic 
// identical to useAsyncFn except we took our execute function, and we immediately invoke automatically and reinvoking it automatically every time our deps change 
 
export function useAsync(func, dependencies =  []) {

    // every time deps change, execute function gets updated. every time execute updates, it reruns itself. set loading to true because we are immediately running this function 
    const { execute, ...state } = useAsyncInternal(func, dependencies, true)

    // immediately invoke execute function 
    // every time dependencies change, execute updates
    // every time execute updates, it reruns itself 
    useEffect(() => {
        // useEffect is a cool hook that says whenever the second parameter changes, 
        // run the code inside this block 
        execute()
    }, [execute])

    return state
    // useAsync is exactly the same as useAsyncFN except without execute function and we immediately invoke automatically and reinvoke every time deps change 

}

// allows you to fire off at your own time 
export function useAsyncFn(func, dependencies =  []) {
    return useAsyncInternal(func, dependencies, false)
    // returns a function instead of automatically running 
}

// makes the other two work 
function useAsyncInternal(func, dependencies, initialLoading = false) { // initialLoading determines whether our loading state starts as true or false 
    const [loading, setLoading] = useState(initialLoading) // loading state, default initial loading state 
    const [error, setError] = useState() // error state, default nothing 
    const [value, setValue] = useState() // value state, default nothing 

    // getting all the stuff we care about... is loading, is there an error, what is the value? 


    // callback is function we call to set all the different loading/error/value values 
    // this is what is automatically run for us 
    const execute = useCallback((...params) => { 
        setLoading(true) // currently starting to run application
        return func(...params).then(data => { // calling function passed in with all the parameters that it cares about (getPosts, so none)
            setValue(data) // grabs value 
            setError(undefined) // no error if we got to this point 
            return data // can chain onto the end of this 
        }).catch(error => {
            setValue(undefined)
            setError(error) // grabs error 
            return Promise.reject(error) // reject the error, so we make sure if there's an error, we re-throw error to be used at a later time 
        }).finally(() => {
            setLoading(false) // we are no longer loading our data, we have finished the loading process & set our value for our error 
        })
    }, dependencies) // when we get our dependencies, make sure we only ever refresh the execute function when the dependencies change 
    // for example, if we pass in a dependency that is the id of a post, we want to refresh our post every time that id changes 


    return { loading, error, value, execute } // returning the values we care about, and also the ability to execute this function 
}