import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';
import {fetchData} from './api';
import {Cards, BarChart, Chart, CountryPicker} from './components';

class App extends React.Component{

    
    state = {
        //seted in didMount fetched
        data: {},
        country: ''
    }

    async componentDidMount(){
        //request to the fetchData
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});

        //console.log(dfetchedData);
    }

    handleCountryChange = async (country) =>{
        const data = await fetchData(country);

        console.log(data);

        this.setState({data, country: country});
    }

    render(){

        const {data, country} = this.state; //get the value seted in didmount

        return(
            <div className = {styles.container}>
               
               <div className = {styles.headerText}>
                 <h1>COVID-19 Real Time Data</h1>   
               </div> 
               <br></br> 

               <Cards data = {data}/>
               <BarChart data = {data}/> 
               <br></br>
               <CountryPicker handleCountryChange={this.handleCountryChange} />
               <Chart data={data} country={country} /> 
                <br></br> 
            </div>
        );
    }
}

export default App;