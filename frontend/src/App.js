import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Temp from './Temp'
import Routes from './Routes'
import Cards from './Cards'
import CreateCard from './CreateCard'
function App() {
  return (
    <div>

      <Router>

        <Route exact path='/' component={Cards} />
        <Route exact path='/create' component={CreateCard} />
        <Route exact path='/blog' component={Temp} />
        <Route exact path='/routes' component={Routes} />


      </Router>


    </div>

  );
}

export default App;
