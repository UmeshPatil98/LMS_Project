
 const {schema,model} = require('mongoose');

const userschema = new schema({
    fullName: {
         type:String,
         required:[true,"Username is required"],
         minLength:[5,"Name must be at least 5 char"],
         maxLength:[50,"Name should be less than 50 chr"],
         lowercase:true,
         trim:true
    },

    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        lowercase:true,
        trim:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
             'please fill in a valid email address',
        ]
    },

    Password:{
        type:String,
        required:[true,"Password is required"],
        minLength:[8, "password must be atleast 8 char"],
        select: false  /// someone trying to access so it must false
    },

    role:{
        type:String,
        enum:['USER','ADMIN'],
        default:'USER',
        default:'ADMIN'
    },

    avatar:{
        public_id: {
            type:String
        },
        secure_url:{
            type:String
        }
       },
     forgrtPasswordToken:String,
     forgetPasswordExpiary: Date
}, {
     TimeRanges: true,
     
})

const User = model('User', userschema)

export default User;