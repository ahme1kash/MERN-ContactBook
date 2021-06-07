import axios from 'axios'
const url ='http://localhost:5000' 
// export const getUsers = async(id)=>{
//     id = id || ''
//     return await axios.get(`${url}/${id}`)
// }

export const getUsers = async()=>{
    
    return await axios.get(url)
}

export const getsingleUser = async(id)=>{
    
    return await axios.get(`${url}/${id}`)
}
export const addUsers = async(newEntry)=>{
    return await axios.post(`${url}/addusers`,newEntry)
}
export const editUsers = async(id,newEntry)=>{
    return await axios.put(`${url}/${id}`,newEntry)
}

export const deleteUsers = async(id)=>{
    return await axios.delete(`${url}/${id}`)
}