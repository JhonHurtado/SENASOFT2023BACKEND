import {Schema,model} from 'mongoose';
import bcryptjs from 'bcryptjs';
import Role from './roleModel.js';
import TypeLearn from './typeLearn.js';

const userSchema = new Schema({
    name:{type:String, required:true},
    lastName:{type:String, required:true},
    dateBirth:{type:Date, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    course:{type:Number, required:true},
    program:{type:String, required:true},
    numberDocument:{type:String, required:true},
    typeDocument:{type:String, required:true},
    roleId:{type:Schema.Types.ObjectId,ref:Role,default:"651429763cdfa17cb5fc0757"},
    typeLearnId:{type:Schema.Types.ObjectId,ref:TypeLearn,default:null},
    status:{type:Boolean, default:true}
},{
    versionKey:false,
    timestamps:true
})

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcryptjs.genSalt(10);
    return await bcryptjs.hash(password, salt);
}

userSchema.methods.comparePassword = async function(password,candidatePassword) {
  try {
    console.log()
    return await bcryptjs.compare(password,candidatePassword);
  } catch (error) {
    console.log(error+"dhdhd")
    throw error;
  }
};

export default model('User',userSchema);






