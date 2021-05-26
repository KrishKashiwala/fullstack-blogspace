import React  , {useState } from 'react'
import Cards from './Cards'
function App() {
  const [apidata, setApiData]  = useState([{}])
  return (
    
    <div>
         <Cards data = {apidata}  setData = {setApiData}/>
          
    </div>
  );
}

export default App;
