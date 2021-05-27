
import React, { useState } from 'react'
import styled from 'styled-components'
const Heading = styled.h1`
color : #FD4233;
`
const UpdateCard = ({ match }) => {

    let [text, setText] = useState(() => {
        console.log('again')
        fetch(`http://localhost:5000/getPosts/${match.params.id}`).then(data => data.json()).then(res => res.map(data => setText(data.title)))
        
    })
    let [author, setAuthor] = useState(

        fetch(`http://localhost:5000/getPosts/${match.params.id}`).then(data => data.json()).then(res => res.map(data => setAuthor(data.author)))
    )
    let [des, setDes] = useState(

        fetch(`http://localhost:5000/getPosts/${match.params.id}`).then(data => data.json()).then(res => res.map(data => setDes(data.description)))
    )
    return (
        <div className="mt-4 ml-4 mr-4" >
            <Heading>
                Update Blog Post
            </Heading>
            <form className="form-group" onSubmit={(data) => console.log(data)} action={`http://localhost:5000/post/${match.params.id}/update`} method="post">
                <label htmlFor="title">Title</label>
                <input className="form-control" type="text" id="title" name="title" value={text} onChange={(e) => setText(e.target.value)} />

                <label htmlFor="author"  >Author Name</label>
                <input className="form-control" type="text" id="author" value={author} name="author" onChange={(e) => setAuthor(e.target.value)} />
                <label htmlFor="description">Description</label>
                <textarea className="form-control" type="text" id="description" value={des} name="description" onChange={(e) => setDes(e.target.value)} />
                <button type="Submit" className="btn btn-danger">Submit</button>
            </form>


        </div>
    )
}

export default UpdateCard
