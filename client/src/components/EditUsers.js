import React, { useState,useEffect } from 'react'
import {useHistory, useParams} from "react-router-dom"
import {getsingleUser} from '../Service/api'
import { editUsers } from '../Service/api'
const EditUsers = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [username, setUsername] = useState("")
    
    
    //Filling the data in the form of editusers
    
    const {id} = useParams()
    const history = useHistory()
    useEffect(()=>{
        loadUserData()
       },[])
    const loadUserData = async()=>{
        const response = await getsingleUser(id)
        setName(response.data.name)
        setEmail(response.data.email)
        setUsername(response.data.username)
        setPhone(response.data.phone)
    }

    //Submitting the data
   
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (name && email && username && phone) {
            // const newEntry = { name, email, phone, username }
            await editUsers(id, { name, email, phone, username })
            
            history.push('/allusers')
     
            setName("")
            setEmail("")
            setUsername("")
            setPhone("")

        }
        else {
            alert("Please enter data in all input fields")
        }
    }

    return (
        <>
            <h2 style={{ paddingTop: '1rem' }}>Edit the Contact Information</h2>
            <div className="sign-up-form" style={{ marginTop: "50px", height: "380px" }}>

                <form method="POST" onSubmit={handleSubmit} autoComplete="off">
                    <input type="name" className="input-box" placeholder="Your Name"
                        name="name" autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input type="email" className="input-box" placeholder="Your Email"
                        name="email" autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="username" className="input-box" placeholder="Your Username"
                        name="username" autoComplete="off"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input type="phone" className="input-box" placeholder="Your Phone Number"
                        name="phone" autoComplete="off"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button type="submit" className="">Edit User</button>
                    <div style={{ color: "black" }}>
                        {/* Not having Account? Click here to <Link style={{color:"blue"}}to='/candidatesignup'>Signup</Link> */}
                    </div>
                </form>
            </div>

        </>

    )
}

export default EditUsers
