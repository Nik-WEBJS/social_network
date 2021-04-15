/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import classes from './../Dialogs.module.css'



const Message = (props) => {
    return(
        <div className={classes.message}>{props.message}</div>
    )
}


export default Message
