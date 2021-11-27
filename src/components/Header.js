import React from 'react'
import Button from './Button'

const Header = ({title, onAdd, showPosts}) => {

    return (
        <header className ='header'>
            <h1>{onAdd}Welcome! Click to add a post</h1>
            <Button color={showPosts? 'red' : 'green'} text={showPosts ? 'Close' : 'Post!'} onClick={onAdd}/>
            </header>
    )
}

// CSS in JS
// const headingStyle = {
//     color: 'blue',
//     backgroundColor: 'orange'
// }

export default Header
