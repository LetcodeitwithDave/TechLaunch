import { useState, useEffect } from "react";
import axios from "axios";



const useFetch = () => {

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



const { searchInput } = useInputContext()
const url = `https://jsearch.p.rapidapi.com/search?query=${searchInput || 'Django Developer'}&page=1&num_pages=1&date_posted=all`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8ea29b4f1amshb945df4cfa16601p18b0b1jsnd5b1db74b6f4',
		'x-rapidapi-host': 'jsearch.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}