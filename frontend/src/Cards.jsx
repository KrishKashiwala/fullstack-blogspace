import React , {useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'

import './App.css'

const AllCards = styled.div`
      background-color: #0B0E11;
      color : #DEE3EA;
      display : grid;
      grid-template-columns : repeat(auto-fill , 1fr);
      grid-template-rows : repeat(auto-fill , 1fr);
      
      grid-row : auto;
      margin-top : 10px;
        
`
const Temp = styled.div`
background-color : #151A21; 
border-radius : 10px;
display : grid;

margin : 20px;
padding : 10px;
`
const Title = styled.h1`
color : #FD4233;
background-size : cover;
width : 70%;
margin-right : 40px;

margin-right : 300px;
`
const Del = styled.a`
  margin-right : 40px;
  margin-top : 10px;
  float :right;
  cursor : pointer;
  color : #DEE3EA;
  font-size : 40px;
&:hover{
  color : #FD4233;
}
`
const Edit  = styled.i`
float : right;
cursor : pointer;
color : #DEE3EA;
font-size : 40px;
margin-right : 30px;
margin-top : 10px;
&:hover{
  color : #61DAFB;
}
`
const Combine = styled.div`
display : flex;
flex-direction : row;
flex-basis : 100%;
`



const Cards = ({data , setData}) => {
    useEffect(() => {
      getRequest();

    } , [])
    
    const getRequest = () => {
        fetch('http://localhost:5000/').then(y => y.json()).then(data => setData(data))
    }

    console.log(data)
  return (
    
    <AllCards>
      
          {
          data.length < 0 ? '.. loading' : data.map(datas => (
              <Temp>
              <Combine>              
              <Title key = {datas._id}>{datas.title}</Title>
              
              <Edit className = "fa fa-edit"></Edit>
              <Del className = "fa fa-trash" href = {`http://localhost:5000/getDelete/${datas._id}`}></Del>
              
              </Combine>
              <p key = {datas._id}>{datas.author} </p>
              
              <p key = {datas._id}>{datas.description}</p>
              <p>{datas._id}</p>
              </Temp>
          ))
          }
          
      </AllCards>
  )
}

export default Cards
