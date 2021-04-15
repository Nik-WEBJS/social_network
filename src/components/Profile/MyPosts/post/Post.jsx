/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import classes from './Post.module.css'


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://www.blast.hk/attachments/64805/' />
                {props.message}
            <div>
                <span>like 1</span> {props.likes}
            </div>
        </div>
    )
}

export default Post