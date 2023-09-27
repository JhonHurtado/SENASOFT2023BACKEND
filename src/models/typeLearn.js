import {Schema,model} from 'mongoose'; 

const typeLearnSchema = new Schema({
    nameTypeLearn:{type:String,required:true},
    description:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true
})

export default model('TypeLearn',typeLearnSchema);