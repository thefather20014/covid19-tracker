import React from 'react';
import { GetDailyData } from '../../hooks/GetApiHook';
import { Line, Bar } from 'react-chartjs-2';
import Styles from './Chart.module.css'
import cx from 'classnames';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

    const data = GetDailyData();

    const lineChart = (
        data.length ? <Line
            data={{
                labels: data.map(({ date }) => date),
                datasets: [{
                    data: data.map(({ confirmed }) => confirmed),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true,
                },
                {
                    data: data.map(({ deaths }) => deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, .5)',
                    fill: true,
                }],
            }}
        /> : null
    );

    const barChart = (
        confirmed ?
            (<Bar

                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, .5)',
                            'rgba(0, 255, 0, .5)',
                            'rgba(255, 0, 0, .5)',
                        ],
                        data: [ confirmed.value, recovered.value, deaths.value ]
                    }]
                }}

                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` }
                }}
            />)
            : null
    );

    return (
        <div className={cx(Styles.container, 'animate__animated animate__fadeIn animate__delay-2s')}>
            { country === 'Global' ? lineChart: barChart }
        </div>
    )
}

export default Chart
