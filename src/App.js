// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Countries from './Components/Countries/Countries';
// import { useEffect, useState } from 'react';


function App() {
    return (
      <div className="App">
        <Countries></Countries>
      </div>
    );
  }





























  // {/* <Countries></Countries> */}



  // function Countries() {
  //   const [countries, setCountries] = useState([]);
  //   useEffect(() => {
  //     fetch('https://restcountries.com/v3.1/all')
  //       .then(res => res.json())
  //       .then(data => setCountries(data))
  //   }, [])
  //   return (
  //     <div>
  //       <h1>Travelling around the world!!!!</h1>
  //       <h3>Countries Available: {countries.length}</h3>
  //     </div>
  //   )
  // }
  export default App;
