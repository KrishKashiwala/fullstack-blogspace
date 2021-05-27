import React from 'react'
import styled from 'styled-components'
const Heading = styled.h1`
color : #FD4233;
`
const CreateCard = () => {
  return (
    <>
      <Heading>
        Create A Blog Post
      </Heading>
        <form action="http://localhost:5000/create" method="post">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" />
          <label htmlFor="author">Author Name</label>
          <input type="text" id="author" />
          <label htmlFor="description">Description</label>
          <input type="text" id="description" />
          <button type="Submit" className="btn btn-danger" />
        </form>
    

    </>
  )
}

export default CreateCard
