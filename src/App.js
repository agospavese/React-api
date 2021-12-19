import './App.css';
import React,{useEffect, useState} from 'react'
import Country from './components/Country';

function App() {
  const [countries,setCountry] = useState([])

 
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountry(data));
  },[])
  console.log(countries);
  return (
    <div className='container'>
        {
          countries.map(country => <Country {...country}></Country>)
        }
    </div>
  );
}

export default App;