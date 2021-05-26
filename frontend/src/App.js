import React  , {useState } from 'react'
import Cards from './Cards'
import styled from 'styled-components'
import {BrowserRouter , Link, Route} from 'react-router-dom'
import CreateCard from './CreateCard'
import './App.css'

const Header = styled.header`
position : relative;
margin : 10px;
display : flex; 
gap : 80%;
`
const NewBlog = styled.button`
color  : #DEE3EA;
background :#FD4233; 
border-radius : 60px;
padding : 0 20px;

`
function App() {
  const [apidata, setApiData]  = useState([{}])
  return (
    <BrowserRouter>   
    <div>
    
    <Header>         
         <h1>Blogspace</h1>
          <Route path = '/create' exact component = {CreateCard}></Route>
          <Route path = '/' exact commponent = {App}></Route>
         <Link to = '/create'>
        <NewBlog>New blog</NewBlog>
        </Link>
    </Header>

         <Cards data = {apidata}  setData = {setApiData}/>
          
    </div>
    </BrowserRouter>

  );
}

export default App;
