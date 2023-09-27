import {Schema,model} from 'mongoose';

const answerSchema = new Schema({
    answer:{type:String, required:true},
    identifier:{type:String, required:true},
    questionId:{type:Schema.Types.ObjectId, ref:'Test', required:true}
},{
    versionKey:false,
    timestamps:true
})


export default model('Answer',answerSchema);