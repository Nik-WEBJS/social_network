/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Post from './post/Post.jsx'
import classes from './MyPosts.module.css'


const MyPosts = (props) => {

    
    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)


    return (
        <div className={classes.my_post_item}>
           <h2>my post</h2> 
            <div >
              <div><textarea></textarea></div>  
              <div> <button>Add posts</button></div> 
            </div>
            <div className={classes.posts}>
                { postsElement }
            </div>
        </div>

    )
}

export default MyPosts