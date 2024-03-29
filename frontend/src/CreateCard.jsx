import React, { useState } from 'react'
import styled from 'styled-components'
const Heading = styled.h1`
color : #FD4233;
`
const CreateCard = () => {
  const [text, setText] = useState()
  const [author, setAuthor] = useState()
  const [des, setDes] = useState()
  return (
    <div className="mt-4 ml-4 mr-4" >
      <Heading>
        Create A Blog Posts
      </Heading>
      <form className="form-group" onSubmit={(data) => console.log(data)} action='http://localhost:5000/create' method="post">
        <label htmlFor="title">Title</label>
        <input className="form-control" type="text" id="title" value={text} name="title" onChange={(e) => setText(e.target.value)} />
        <label htmlFor="author"  >Author Name</label>
        <input className="form-control" type="text" id="author" value={author} name="author" onChange={(e) => setAuthor(e.target.value)} />
        <label htmlFor="description">Description</label>
        <textarea className="form-control" type="text" id="description" value={des} name="description" onChange={(e) => setDes(e.target.value)} />
        <button type="Submit" className="btn btn-danger">Submit</button>
      </form>


    </div>
  )
}

export default CreateCard
