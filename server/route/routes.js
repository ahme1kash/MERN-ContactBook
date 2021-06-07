import express  from 'express'
import {getUsers,addUsers,editUsersById,getUsersById,deleteUsersById}  from  '../Controller/userController.js'
const route = express.Router()
route.get('/',getUsers)
route.post('/addusers',addUsers)
route.get('/:id',getUsersById)
route.put('/:id',editUsersById)
route.delete('/:id',deleteUsersById)
export default route