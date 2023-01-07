
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './pages';
import 'mapbox-gl/dist/mapbox-gl.css';


function App() {
  return (
    <Router>
     <Home/>
     </Router>
   
  );
}

export default App;
