import React from 'react'
import Post from './Post'


function Posts({posts, onDelete, onToggle}) {


    return (
        <div>
            {posts.map((post) => (
            <Post key={post.id} post={post} 
            onDelete={onDelete}
            onToggle={onToggle}/>
            ))}


        </div>
    )
}

export default Posts
