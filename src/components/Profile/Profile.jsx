/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import classes from'./Profile.module.css'


const Profile = () => {
    return (
        <div>
            <div>
                <img className={classes.img_fon} src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg' />
            </div>
            <div>
                ava + desription
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile