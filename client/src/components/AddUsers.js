import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import { addUsers } from '../Service/api'
const AddUsers = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [username, setUsername] = useState("")

   const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (name && email && username && phone) {
            // const newEntry = { name, email, phone, username }
            await addUsers( { name, email, phone, username })
            history.push('./allusers')

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
            <h2 style={{ paddingTop: '1rem' }}>Enter the Contact Information</h2>
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
                    <button type="submit" className="">Add User</button>
                    <div style={{ color: "black" }}>
                        {/* Not having Account? Click here to <Link style={{color:"blue"}}to='/candidatesignup'>Signup</Link> */}
                    </div>
                </form>
            </div>

        </>

    )
}

export default AddUsers
