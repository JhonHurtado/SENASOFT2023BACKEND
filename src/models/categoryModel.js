import {Schema,model} from 'mongoose';

const categorySchema = new Schema({
    nameCategory:{type:String,required:true},
    description:{type:String,required:true},
    userId:{type:Schema.Types.ObjectId,required:true,ref:USer}
},{
    versionKey:false,
    timestamps:true
})


export default model('Category',categorySchema);