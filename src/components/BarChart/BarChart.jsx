import React, {useState, useEffect} from 'react';
import Bar from 'react-chartjs-2';

import {fetchDailyData} from '../../api';

import styles from './BarChart.module.css';

const BarChart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState({});
  
    useEffect(() => {
      const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();
  
        setDailyData(initialDailyData);
      };
  
      fetchMyAPI();
    }, []);
  
    //bar chart

    const barChart = (

        //confirmed cases
        confirmed ? (
            <Bar data = {{
                
                type: 'bar',

                //bar values 
                labels:['Infected', 'Recovered', 'Deaths'],
                
                datasets:[{
                    label: 'People',

                    //color foreach bar
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    
                    // data foreach bar
                    data: [confirmed.value, recovered.value, deaths.value],
                },
            ],
            }}
            options={{
                legend: { display: true },
                title: { display: true, position: 'bottom', text: `Current world situation` },
              }}
            />
          ) : null
        );
    
        return (
            <div className={styles.container}>
                {barChart}
            </div>
         );
  };
  
  
  export default BarChart;