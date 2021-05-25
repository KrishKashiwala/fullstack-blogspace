import React  , {useState , useEffect} from 'react'
import Cards from './Cards'
function App() {
  const [apidata, setApiData]  = useState([{}])

    useEffect(() => {
        fetch('http://localhost:5000/').then(y => y.json()).then(data => setApiData(data))
    }, [])
    
  
   
  
  
  return (
    
    <div>
         <Cards data = {apidata}/>
          
    </div>
  );
}

export default App;
