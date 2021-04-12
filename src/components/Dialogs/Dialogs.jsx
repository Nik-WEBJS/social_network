/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let orl = "/Dialogs/" + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={orl}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id:1, name: 'Sveta'},
        {id:2, name: 'Olya'},
        {id:3, name: 'Oleg'},
        {id:4, name: 'Mari'},
    ]

    let messagesData = [
        {id:1, message: 'message'},
        {id:2, message: 'Hi'},
        {id:3, message: 'you'},
        {id:4, message: 'young'},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[0].id}/>
                <Message message={messagesData[2].message} id={messagesData[0].id}/>
                <Message message={messagesData[3].message} id={messagesData[0].id}/>
            </div>
        </div>
    )
}

export default Dialogs
