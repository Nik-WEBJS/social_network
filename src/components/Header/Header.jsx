/* eslint-disable no-unused-vars */
import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
      <header className={classes.header}>
        <img className={classes.logo} src='https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png' alt='logo' />
      </header>
    )
}

export default Header