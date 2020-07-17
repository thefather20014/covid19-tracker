import React from 'react';
import { Select, FormControl, MenuItem } from '@material-ui/core';
import Styles from './CounterPicker.module.css';
import { GetCountriesData } from '../../hooks/GetApiHook';

const CounterPicker = ({ search, setSearch }) => {

    const countries = GetCountriesData();

    const handleSearch = e => setSearch(e.target.value);;
    return (
        <div>
            <FormControl className={Styles.formControl}>
                <Select
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    value={search}
                    onChange={handleSearch}
                >
                    {countries.map((country, index) => (
                        <MenuItem key={index} value={country}>
                            {country}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

        </div>
    )
}

export default CounterPicker
