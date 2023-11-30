import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error,setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': '7a49d4fe6bmsh816b13cd887ad72p14bf31jsn9c1cca5649a3',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query },
    };
      
    const fetchData = async () => {
        setIsLoading(true)

        try{
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        }catch(error){
            setError(error)
            alert("There is an error")
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    },[])

    const reftch = () => {
        setIsLoading(true)
        fetchData()
    }
    return {data, isLoading, error, reftch}
}

export default useFetch