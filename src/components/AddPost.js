import React from 'react'
import {useState} from 'react'

function AddPost({addPost}) {
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const onSubmit = (e) => {
    // Prevent submission to another page
    e.preventDefault()
    if(!title)
    {
        alert('Please add a title')
        return
    }
    addPost({title, content})
    setTitle('')
    setContent('')
}

    return (
        <form className='addPost' onSubmit ={onSubmit}>
            <div className='postControl'>
                <label className='postControlLabel'>Title</label>
                <input type="text"  className='postControlInput' placeholder="Add Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className='postControl'>
                <label className='postControlLabel'>Content</label>
                <input type="text" className='postControlInput'placeholder="Add Content" value={content} onChange={(e) => setContent(e.target.value)}/>
                </div>
            <input type="submit" value="Post!" className='btn btn-block'/>
        </form>
    )
}

export default AddPost
