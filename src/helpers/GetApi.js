import axios from 'axios';

let API_URL = ' https://covid19.mathdro.id/api';

export const getData = async ( country ) => {

    let changeUrl = API_URL;

    if( country !== 'Global' ) {
        changeUrl = `${API_URL}/countries/${country}/`;
    } else if  ( country === 'Global' ) {
        changeUrl = API_URL;
    }
    
    try 
    {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeUrl); 
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        };
    }
    catch(err) 
    {
        console.error(err);
    } 

};

export const getFilterData = async () => {
    
    try 
    {
        const { data }  = await axios.get(`${ API_URL }/daily`); 
        const modifiedData = data.map(dailyData => ({
                confirmed: dailyData.confirmed.total,
                deaths: dailyData.deaths.total,
                date: dailyData.reportDate,
        }));
        return modifiedData;
    }
    catch(err) 
    {
        console.error(err);
    } 

};

export const getCountries = async () => {

    try 
    {
        const { data: { countries } } = await axios.get(`${ API_URL }/countries`); 
        return countries.map( ({ name }) => name );
    }
    catch(err) 
    {
        console.error(err);
    } 

};
