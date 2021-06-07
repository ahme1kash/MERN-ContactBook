import React from 'react'
import {NavLink} from 'react-router-dom'
import {AppBar,Toolbar,makeStyles} from '@material-ui/core'
// #F5FFFA
const useStyle = makeStyles({
    header:{
        background:"#F5FFFA"
    },

    tabs:{
        color:"#483D8B",
        textDecoration:"none",
        fontSize:18,
        
    },
    

})
const Navbar = () => {
    const classes = useStyle()
    return (
       <AppBar className={classes.header} position="static">
           <Toolbar>
<NavLink style={{marginRight:"63rem"}} className={classes.tabs} to = "/">MERN_CRUD </NavLink>
<NavLink style={{marginRight:"1rem"}}className={classes.tabs} to = "/allusers">All_Users </NavLink>
<NavLink className={classes.tabs } to = "/addusers">Add_Users </NavLink>

           </Toolbar>
       </AppBar>
    )
}

export default Navbar
