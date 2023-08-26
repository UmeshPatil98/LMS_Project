import User from "../models/user.model.js";
import AppError from "../utils/appError.js";



const register = async (req,res) =>{
     const{fullName, email , password} = req.body;

     if (!fullName || !email || !password) {
        return next(new AppError('All fields are required' , 400));
     }

     const userExists = await User.findone({email});

     if (userExists) {
        return next(new AppError('Email Already Exist' , 400));       
     }
}

const login = () =>{

}

const logout = () =>{

}
 
const getProfile = () =>{

}

export {
    register,
    login,
    logout,
    getProfile
}