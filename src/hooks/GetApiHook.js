import { useState, useEffect } from 'react';
import { getData, getFilterData } from '../helpers/GetApi';
import { getCountries } from '../helpers/GetApi';

export const CustomGetApi = (country) => {
    const [api, setApi] = useState({
        data: [],
        loading: false
    });

    useEffect(() => {

        getData(country)
            .then(res => setApi({ data: res, loading: true }))
            .catch(err => console.log(err));

    }, [country]);

    return api
};

export const GetDailyData = () => {
    const [daily, setDaily] = useState([]);

    useEffect(() => {
        getFilterData()
            .then(res => setDaily(res))
            .catch(err => console.log(err));
    }, []);

    return daily
};

export const GetCountriesData = ( country ) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries( country )
            .then(res => {
                res.unshift('Global')
                setCountries(res);
            })
            .catch(err => console.log(err));
    }, [country]);

    return countries
};


