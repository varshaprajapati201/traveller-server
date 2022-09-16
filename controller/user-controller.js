const UserModel = require("../model/user-Schema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Token = require("../model/token.js");
dotenv.config();

const registerUser = async (req,res)=>{
    
    try{ 
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        const newUser = {username:req.body.username, name:req.body.name, password:hashedPassword};
        const result =  new UserModel(newUser);
        await result.save();
       return res.status(200).json({message:'register.success.message'});
       }
    catch(err){
        return res.status(500).json({message:'internal.server.error'});
       }

}

const loginUser = async (req,res)=>{
let user = await UserModel.findOne({username: req.body.username});
if(!user){
    return res.status(400).json({message:"username doesn't match"});
} 

try{
  let match =  await bcrypt.compare(req.body.password, user.password);
  if(match){
    const accessToken = jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY, { expiresIn: "15m" });
    const refreshToken = jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEY);
     
    const newToken = new Token({token:refreshToken})
    await newToken.save();

    return res.status(200).json({accessToken:accessToken, refreshToken:refreshToken, name: user.name, username: user.username});
  }else{
   return res.status(400).json({message:"password doesn't match"})
  }

}catch(error){
    return res.status(500).json({message:"error while login in user"});
}

}

module.exports = {registerUser,loginUser};