import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from '@env'

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint) => {


    const options = {
        method: 'GET',
        // make the endpoint dynamic
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            query: 'Python developer in Texas, USA',
            page: '1',
            num_pages: '1'
        },
    };

    // fetch the data
    const fetchData = () => {

    }
}