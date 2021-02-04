import {useState} from 'react'
import Axios from 'axios'
import { useParams, NavLink } from 'react-router-dom'


function DataPage(props){
    let [data, setData] = useState('')

    let {name} = useParams();

    useState(() => {
     Axios.get(`http://localhost:5000/${name}`).then(data => {
        console.log(data.data)
        setData(data.data)
     })
    })
       
       

    return (
        <div className='data-page'>
        {data ? <div>
            <h3>{`Location: ${data.location.name}, ${data.location.region}`}</h3>
            <h3>{`Temperature: F ${data.current.temp_f}, C ${data.current.temp_c}`}</h3>
            <h3>{`${data.current.condition.text}`}</h3>
            <img src={data.current.condition.icon} alt="current-weather" />
            <div className="more-info">
                <h3>More info:</h3>
                <h4>Feels like: {data.current.feelslike_f}</h4> 
                <h4>Humidity: {data.current.humidity}</h4>
                <h4>Precipitation: {data.current.precip_in}</h4>
                <h4>Wind: {data.current.wind_mph}mph</h4>
            </div>
            <button><NavLink to="/">Go back</NavLink></button>
            </div>: null}
         </div>
    )
}

export default DataPage