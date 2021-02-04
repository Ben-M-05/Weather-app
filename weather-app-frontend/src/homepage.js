import {useState} from 'react';
import SearchWeather from './SearchWeather';
import Axios from 'axios';
import {Popup} from 'reactjs-popup';

function Homepage() {
    const [toggle, isToggled] = useState(false);
    const [err, setErr] = useState(false)
    const [errDesc, setErrDesc] = useState("")
    const [errTitle, setErrTitle] = useState("")

    function test() {
      Axios.get('http://localhost:5000/nope/lol').catch(err => {
        console.log(err.response)
        setErrTitle(err.response.status)
        setErrDesc(err.response.statusText)
        setErr(true)
      })
    }
      
    

    function toggleButton() {
      if(!toggle) {
        isToggled(true)
      }else {
        isToggled(false)
      }
    }

    return (
      <div className="App">
      <header>
       <SearchWeather />
      </header>
      <body>
        <div className="your-favorites">
          <h1 className="your-favorites-text">
            Your favorites:
          </h1>
          <div className="your-favorites-body">
            
          </div>
        </div>
        <div className="local-weather-info">
          <button onClick={() => test()}>test</button>
        </div>
        <Popup open={err} position="center center" closeOnDocumentClick onClose={() => setErr(false)}>
          <h1>Alert</h1>
          <h2>{errTitle}</h2>
          <h3>{errDesc}</h3>
          <button onClick={() => setErr(false)}>Close</button>
        </Popup>
      </body>
    </div>
    )
}

export default Homepage