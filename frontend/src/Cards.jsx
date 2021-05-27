import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import { Link } from 'react-router-dom'

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
font-family: 'Roboto', sans-serif;
margin-right : 300px;
`
const Del = styled.a`
  margin-right : 40px;
  margin-top : 10px;
  float :right;
  cursor : pointer;
  color : #DEE3EA;
  font-size : 20px;
&:hover{
  color : #FD4233;
}
`
const Edit = styled.i`
float : right;
cursor : pointer;
color : #DEE3EA;
font-size : 20px;
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
margin-bottom : 20px;
`

const Header = styled.header`
position : relative;
margin : 10px;
display : flex; 
gap : 73%;
margin-top : 20px;
margin-left : 30px;
`
const NewBlog = styled.button`
color  : #DEE3EA;
background :#FD4233; 
border-radius : 60px;
padding : 0 20px;
margin-right: 20px;
height : 50px;

`
const Des = styled.p`
font-family: 'Montserrat', sans-serif;

`
const Name = styled.h1`
font-family: 'Dancing Script', cursive;
`
const Author = styled.p`
font-family: 'Lobster', cursive;
`

const Cards = () => {
  const [data, setData] = useState([{}])
  useEffect(() => {
    getRequest();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getRequest = async () => {
    await fetch('http://localhost:5000/').then(y => y.json()).then(data => setData(data))
  }

  console.log(data)
  return (
    <>
      <Header>
        <Name>Blogspace</Name>
        <Link to='/create'>
          <NewBlog>New blog</NewBlog>
        </Link>

      </Header>
      <AllCards>

        {
          data.length <= 0 ? '.. loading' : data.map(datas => (
            <Temp>
              <Combine>
                <Title key={datas._id}>{datas.title}</Title>
                <Link to={`/update/${datas._id}`}>
                  <Edit className="fa fa-edit"></Edit>
                </Link>
                <Del className="fa fa-trash" href={`http://localhost:5000/getDelete/${datas._id}`}></Del>

              </Combine>

              <Des key={datas._id}>{datas.description}</Des>
              <Author key={datas._id}>{`- ${datas.author}`} </Author>
              <p>{datas._id}</p>
            </Temp>
          ))
        }

      </AllCards>
    </>
  )
}

export default Cards
