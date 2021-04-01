/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import classes from'./Profile.module.css'


const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                <img className={classes.img_fon} src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg' />
            </div>
            <div>
                ava + desription
            </div>
            <div>
                my post
            </div>
            <div>
                new post
            </div>
            <div className={classes.posts}>
            <div className={classes.posts__item}>
                post 1
            </div>
            <div className={classes.posts__item}>
                post 2
            </div>
            </div>
        </div>
    )
}

export default Profile