import {Schema,model} from 'mongoose';
import User from './userModel.js';

const categorySchema = new Schema({
    nameCategory:{type:String,required:true},
    description:{type:String,required:true},
    userId:{type:Schema.Types.ObjectId,required:true,ref:User}
},{
    versionKey:false,
    timestamps:true
})


export default model('Category',categorySchema);