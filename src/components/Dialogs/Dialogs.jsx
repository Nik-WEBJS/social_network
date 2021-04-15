/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem.jsx'
import Message from './Message/Message.jsx'

const Dialogs = (props) => {

    

    let dialogsElements = props.dialogs.map( d =>  <DialogItem  name={d.name} id={d.id} /> )

    let messagesElements = props.messages.map (m => <Message message={m.message}/>)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                { dialogsElements }

            </div>
            <div className={classes.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs
