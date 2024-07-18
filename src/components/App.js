
import React, { useState, useEffect } from "react";
import './../styles/App.css';


const CityList = ({ cities }) => {
    return (
        <div> 
      <h2> Cities in India: </h2>
        <ol>
        { cities.map( (city) => ( 
            <li key={city.key}>{city.name}</li>   
            ))}
        
        </ol>
    </div>
 );  
};
const App = () => {
    const cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    { name: 'Brandenburg Gate', country: 'Germany' },
    { name: 'Reichstag Building', country: 'Germany' },
    { name: 'Museum Island', country: 'Germany' },
    { name: 'Munnar', country: 'India' },
    { name: 'Leh Ladakh', country: 'India' },
    { name: 'Goa', country: 'India' },
    { name: 'Agra', country: 'India' },
    { name: 'Dalhousie', country: 'India' },
    { name: 'Coorg', country: 'India' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Milan', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    { name: 'Varanasai', country: 'India' },
    { name: 'Jaipur', country: 'India' },
    { name: 'The Hofburg', country: 'Austria' },
    { name: 'Belvedere Palace', country: 'Austria' },
    { name: 'St. Stephen Cathedral', country: 'Austria' },
    { name: 'Kahna National Park', country: 'India' },
    { name: 'Amritsar', country: 'India' },
    { name: 'Mussoorie', country: 'India' },
    { name: 'Mount Abu', country: 'India' },
    { name: 'Tirupati', country: 'India' },
    ]


    const filteredCity = cityList.filter( (city) => city.country === 'India');

    const filteredCityWithKey = filteredCity.map( (city, index) => ({
        ...city, 
        key: `location${ index + 1}`
    }));
                                                
                                                );
    
  return (
    <div id="main">
               {/*SGN, Do not remove the main div */}
        <CityList cities={filteredCityWithKey} />

    </div>
  );
};

export default App
