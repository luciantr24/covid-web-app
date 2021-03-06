import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) =>{

    let changeableUrl = url;

    if(country){
        changeableUrl =  `${url}/countries/${country}`;
    }

    try
    {        
        const { data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);

        return {confirmed,
                recovered, 
                deaths, 
                lastUpdate};    

    }
    catch(err){
        console.log(err);

        return err;
    }
}

export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get(`${url}/daily`);
  
      return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (err) {
      return err;
    }
};
  

export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get(`${url}/countries`);
  
      return countries.map((country) => country.name);
    } catch (err) {
      return err;
    }
  };

//searh by country and return the number in the graph of cards
export const fetchCountry = async () =>{
  try{

  }catch(err){
    return err;
  }
}  