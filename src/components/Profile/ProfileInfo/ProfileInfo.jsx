/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.block_fon}>
                <img className={classes.img_fon} src='https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg' />
            </div>
            <div className={classes.description_block}>
                ava + desription
            </div>
        </div>
    )
}

export default ProfileInfo