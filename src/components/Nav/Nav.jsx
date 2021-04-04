/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './Nav.module.css';


const Nav = () => {
    return (<nav className={classes.nav}>
        <div> <a href='/Profile'>Profile</a> </div>
        <div> <a href='/Dialogs'>Messages</a>  </div>
        <div> <a href='/News'>News</a>  </div>
        <div> <a href='/Music'>Music</a>  </div>
        <div> <a href='/Settings'>Settings</a>  </div>

    </nav>
    )
}


export default Nav