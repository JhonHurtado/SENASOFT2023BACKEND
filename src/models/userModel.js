import {Schema,model} from 'mongoose';
import bcryptjs from 'bcryptjs';

const userSchema = new Schema({
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    dateBirth:{type:Date, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    course:{type:Number, required:true},
    program:{type:String, required:true},
    numberDocument:{type:String, required:true},
    typeDocument:{type:String, required:true},
    roleId:{type:Schema.Types.ObjectId,ref:'Role',required:true},
    typeLearnId:{type:Schema.Types.ObjectId,ref:'Role',required:true},
    status:{type:Number, default:1}
},{
    versionKey:false,
    timestamps:true
})

//encrypt passsword and compare password
userSchema.statics.encryptPassword = async (password)=>{
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password,salt);
}

userSchema.statics.comparePassword = async (password,receivedPassword)=>{
    return await bcryptjs.compare(password,receivedPassword);
}


export default model('User',userSchema);