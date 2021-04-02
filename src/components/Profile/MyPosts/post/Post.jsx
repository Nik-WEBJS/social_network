/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import classes from './Post.module.css'


const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://www.blast.hk/attachments/64805/' />
                post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post