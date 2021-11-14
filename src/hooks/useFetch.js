import { useState, useEffect } from "react"

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState(null)
  
  // Function for POST req
  const postData = (postData) => {
    setOptions({
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
  }
  // runs once when component is loaded first time.
  useEffect(() => {

    // Abort Controller to abort fetch requests if needed.
    const controller = new AbortController()

    const fetchData = async (fetchOptions) => {
      setIsPending(true)
      
      try {
        const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
        
        // if there is a 404 error / if response is NOT ok.
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        // If there is no error
        const data = await res.json()
        setIsPending(false)
        setData(data)
        setError(null)

      } catch (err) {

        // If the fetch is interrupted
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError('Could not fetch the data')
        }
      }
    }

    if(method === 'GET'){
      fetchData()
    }
    if(method === 'POST' && options){
      fetchData(options)
    }

    // Cleanup function - to abort fetch requests - useEffect cleanup
    return () => {
      controller.abort()
    }

  }, [url, options, method])

  return { data, isPending, error, postData }
}