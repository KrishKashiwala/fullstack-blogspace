import React from 'react'
import styled from 'styled-components'

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
`

const Cards = ({data}) => {
    console.log(data)
  return (
    
    <AllCards>
      
          {
          data.length < 0 ? '.. loading' : data.map(datas => (
              <Temp>
              <Title key = {datas._id}>{datas.title}</Title>
              <p key = {datas._id}>{datas.author}</p>
              
              <p key = {datas._id}>{datas.description}</p>
              </Temp>
          ))
          }
          
      
      </AllCards>
    
  )
}

export default Cards
