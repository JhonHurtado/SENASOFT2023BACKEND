import {Schema,model} from 'mongoose';

const testSchema = new Schema({
    question:{type:String,required:true},
    consecutive:{type:Number,required:true}
},{
    versionKey:false,
    timestamps:true
})


export default model('Test',testSchema);





