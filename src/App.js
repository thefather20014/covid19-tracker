import React, { useState } from 'react'
import { Cards, Chart, CounterPicker } from './components/components';
import './App.css';
import { CustomGetApi } from './hooks/GetApiHook';
import { Typography} from '@material-ui/core';
import image from './Images/image.png'

const App = () => {

    const [search, setSearch] = useState('Global');
    const { data, loading } = CustomGetApi(search);

    return (
        <div className="container">

            { loading ? null: <Typography variant="h2"> Loading.. </Typography> }

            <img src={ image } alt="covid-19"/>
            <Cards data={ data } />
            <CounterPicker search={ search } setSearch={ setSearch }/>
            <Chart data={ data } country={ search }/>

        </div>
    )
}

export default App
