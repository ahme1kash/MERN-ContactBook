import User from '../model/userSchema.js'
export const getUsers = async (req,res)=>{
      try{
          let user = await User.find()
          res.json(user)

      }
      catch(error){
           res.json({message:error.message})
      }
    }


export const addUsers = async(req,res)=>{
    const user = req.body
    const newUser = new User(user)
    
    try{
      await newUser.save()
      res.json("Successfully registered")
    }
    catch(error){
        console.log(error)
        res.json(error)
    }
}

export const getUsersById = async(req,res)=>{
    const id = req.params.id

    try{
   const user = await User.findById(id)
   res.json(user)

    }
    catch(error){
        res.json({message:error.message}) 
    }

}

export const editUsersById = async(req,res)=>{
    const user = req.body
    const editUser = new User(user)
    
    try{
      await User.updateOne({_id:req.params.id},editUser) 
      res.json(editUser)
    }
    catch(error){
        console.log(error)
        res.json(error)
    }
}


export const deleteUsersById = async(req,res)=>{
    const user = req.body
    
    try{
      await User.deleteOne({_id:req.params.id}) 
      res.json("User deleted successfully")
    }
    catch(error){
        console.log(error)
        res.json(error)
    }
}
