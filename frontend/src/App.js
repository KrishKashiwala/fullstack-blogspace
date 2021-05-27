import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cards from './Cards'
import CreateCard from './CreateCard'
import UpdateCard from './UpdateCard'
function App() {
  return (
    <div>

      <Router>

        <Route exact path='/' component={Cards} />
        <Route exact path='/create' component={CreateCard} />
        <Route exact path='/update/:id' component={UpdateCard} />


      </Router>


    </div>

  );
}

export default App;
