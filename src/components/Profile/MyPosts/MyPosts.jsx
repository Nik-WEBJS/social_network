/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Post from './post/Post.jsx'
import classes from './MyPosts.module.css'


const MyPosts = () => {
    return (<div >
        <div>
            my post
            </div>
        <div >
            <textarea></textarea>
            <button>Add posts</button>
            <button>Remove</button>
            </div>
        <div className={classes.posts}>
           <Post message='Hi you' likes='15'/>
           <Post message='firts'/>
           
        </div>
    </div>

    )
}

export default MyPosts