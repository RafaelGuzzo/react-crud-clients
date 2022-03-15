import { AppBar, Toolbar, makeStyles  } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import React from 'react';

const useStyle = makeStyles({
    tabs: {
        color: '#FFFFFF',
        marginRight: 20,
        textDecoration: 'none',
        fontSize: 20
    }
})

function NavBar() {
    const classes = useStyle();
    return(
        <AppBar position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="/">Home</NavLink>
                <NavLink className={classes.tabs} to="all" >All Clients</NavLink>
                <NavLink className={classes.tabs} to="add">Add Client</NavLink>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;