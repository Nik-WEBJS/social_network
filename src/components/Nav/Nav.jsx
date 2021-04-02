/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classes from './Nav.module.css';


const Nav = () => {
    return  (<nav className={classes.nav}>
            <div clasName={classes.nav__item}> <a>Profile</a> </div>
            <div clasName={classes.nav__item}> <a>Messages</a>  </div>
            <div clasName={classes.nav__item}> <a>News</a>  </div>
            <div clasName={classes.nav__item}> <a>Music</a>  </div>
            <div clasName={classes.nav__item}> <a>Setting</a>  </div>
         
            </nav>
    )
}


export default Nav