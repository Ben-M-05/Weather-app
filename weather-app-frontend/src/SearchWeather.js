import {useState} from 'react';
import {NavLink} from 'react-router-dom'

function SearchWeather(props) {
    let [input, setInput] = useState("")
  
    function getInput(e) {
      setInput(e.target.value)
    }
  


    return(
     <div className='search-window'>
      <input placeholder="input a city name here" className="city-input" onChange={e => getInput(e)}></input>
      
      <button><NavLink to={`/results/${input}`}>Search</NavLink></button>
      </div>
    )
}

export default SearchWeather