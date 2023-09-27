import {Schema,model} from 'mongoose';
import Category from './categoryModel.js';

const moduleSchema = new Schema({
    nameModule:{type:String,required:true},
    description:{type:String,required:true},
    categoryId:{type:Schema.Types.ObjectId,required:true,ref:Category}
},{
    versionKey:false,
    timestamps:true
})


export default model('Modules',moduleSchema);