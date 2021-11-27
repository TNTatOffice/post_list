import Header from './components/Header'
import Posts from './components/Posts';
import {useState} from 'react'
import AddPost from './components/AddPost';

function App() {

  // toggle posts
  const [showPosts, setShowPosts] = useState(false)
  const [posts, setPosts] = useState([
    {
        id: 1,
        title: 'This is my first post',
        content: 'Hi, I am triying this out for the first time.',
        like: true
    },
    {
        id: 2,
        title: 'This is my second post',
        content: 'So far so good! Still alive...',
        like: false
    },
    {
        id: 3,
        title: 'This is my third post',
        content: 'The concept is cool. Will take a little while to get used to.',
        like: true
    }
    ])

    // Add a new post
    const addPost =(post) => {
     const id = Math.floor(Math.random() * 10000) +1
     const newPost = {id, ...post}
     setPosts([...posts, newPost])
    }

    
    // Delete a post
    const deletePost = (id) =>{
      setPosts(posts.filter((post) => post.id !== id))
    } 

    // Like a post
    const likePost =(id) => {
      setPosts(posts.map((post)=> post.id === id ? {...post, like: !post.like } : post ))
    }



  return (
    <div className="container">
     <Header onAdd ={() => setShowPosts(!showPosts)} showPosts={showPosts}/>  
     {showPosts &&<AddPost addPost={addPost}/>}
     {/* If there are posts, show them, otherwise show message */}
     {posts.length > 0 ? <Posts posts={posts} onDelete={deletePost} onToggle={likePost}/> : 'There are no posts' }   
    </div>
  );
}

export default App;
