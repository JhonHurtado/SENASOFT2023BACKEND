import {Schema,model} from 'mongoose'; 

const typeLearnSchema = new Schema({
    nameTypeLearn:{type:String,required:true},
    description:{type:String,required:true},
    testId:{type:Schema.Types.ObjectId,required:true,ref:'Test'}
},{
    versionKey:false,
    timestamps:true
})

export default model('TypeLearn',typeLearnSchema);