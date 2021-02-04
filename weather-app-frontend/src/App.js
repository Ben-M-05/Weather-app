import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import DataPage from './DataPage';
import Homepage from './homepage';


function App() {
  
  
   

  return (
    <BrowserRouter>
    <Route exact path="/results/:name" component={DataPage}/>
    <Route exact path='/' component={Homepage} />
   </BrowserRouter>
  );
}

export default App;
