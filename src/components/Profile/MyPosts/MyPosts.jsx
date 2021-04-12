/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Post from './post/Post.jsx'
import classes from './MyPosts.module.css'


const MyPosts = () => {

    let postData = [
        {id:1, message: 'Hi you', likesCount: 12},
        {id:2, message: 'firts', likesCount: 3} ,
    ]

    return (
        <div className={classes.my_post_item}>
           <h2>my post</h2> 
            <div >
              <div><textarea></textarea></div>  
              <div> <button>Add posts</button></div> 
            </div>
            <div className={classes.posts}>
                <Post message={postData[0].message} likes={postData[0].likesCount} />
                <Post message={postData[1].message} likes={postData[1].likesCount} />
            </div>
        </div>

    )
}

export default MyPosts