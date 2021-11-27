import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Post({post, onDelete, onToggle}) {
    return (
        <div 
        className={`post ${post.like ? 'like' : ''}`} 
        onDoubleClick={() => onToggle(post.id)}>
        <h3>{post.title} <FaTimes style ={{color:'red', cursor:'pointer'}} 
        onClick={() => onDelete(post.id)}/>
        </h3>
        <p>{post.content}</p>
        </div>
    )
}

export default Post
