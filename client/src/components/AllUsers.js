import { TableBody, TableCell, TableHead, TableRow, Table, makeStyles, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getUsers, deleteUsers } from '../Service/api'
import { Link } from 'react-router-dom'

const useStyle = makeStyles({
    table: {
        marginTop: "2.5%",
        marginLeft: "4.4%",
        marginRight: "3.5%",
        fontSize: 7,
        width: "90%"
    },

    tcontent: {
        fontSize: 22,

    },
    thead: {
        '& > *': {
            backgroundColor: "#000000",
            color: "#ffffff",
            fontSize: 20
            // marginLeft:"-59px"
        }

    },

    row: {

        '& >*': {
            fontSize: 20,
            color: "#ffffff",
            // justifyContent:"left"

        }


    },




})

const AllUsers = () => {

    const [users, setUsers] = useState([])
    const classes = useStyle()

    const getAllUsers = async () => {
        const response = await getUsers()
        // console.log(response.data)
        setUsers(response.data)

    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const deleteUserData = async (id) => {
        await deleteUsers(id)
        getAllUsers()
    }
    return (<>
        <Table className={classes.table} style={{ border: '1px solid black', backgroundColor: "#ccf5ff" }}>

            <TableHead className={classes.thead} >
                <TableRow className={classes.row} >
                    {/* <TableCell>ID</TableCell> */}
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell style={{ width: "10%" }} >Edit</TableCell>
                    <TableCell style={{ width: "3" }}>Delete</TableCell>


                </TableRow>
            </TableHead >

            <TableBody  >
                {
                    users.map(user => (
                        <TableRow  key={user._id}>
                            {/* <TableCell className = {classes.tcontent}>{user._id}</TableCell> */}
                            <TableCell className={classes.tcontent}>{user.name}</TableCell>
                            <TableCell className={classes.tcontent}>{user.username}</TableCell>
                            <TableCell className={classes.tcontent}>{user.email}</TableCell>
                            <TableCell className={classes.tcontent}>{user.phone}</TableCell>
                            <TableCell>
                                <div style={{ display: 'flex' }}>
                                    <Button style={{ backgroundColor: "green", color: "#ffffff" }} component={Link} to={`/editusers/${user._id}`}> Edit</Button>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
               &nbsp; &nbsp;&nbsp;

               <Button onClick={() => deleteUserData(user._id)} style={{ backgroundColor: "red", color: "#ffffff" }}>Delete</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>

        </Table>

    </>
    )
}


export default AllUsers
