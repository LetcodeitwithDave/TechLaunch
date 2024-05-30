import { useState, useEffect } from "react";
import axios from "axios";
import { useInputContext } from "../authcontext/inputContext";



const useFetch = () => {
    const { searchInput } = useInputContext()

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const options = {
        method: 'GET',
        // make the endpoint dynamic
        url: 'https://jsearch.p.rapidapi.com/search',
        headers: {
            'X-RapidAPI-Key': '8ea29b4f1amshb945df4cfa16601p18b0b1jsnd5b1db74b6f4',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            query: searchInput || 'Django Developer',
            // query: `${searchInput}`,

            num_pages: '1'
        },
    };


    // fetch the data
    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options)
            console.log(response.data.data)
            setData(response.data.data);

        } catch (error) {
            setError(Error);
            console.log('there is an error somewhere');
        } finally {
            setIsLoading(false);
        }

    }
    useEffect(() => {
        fetchData();
    }, [searchInput])

    return { data, error, isLoading }
}

export default useFetch;
// fetchData is consuming option,
// useEffect is comsuming fetchData