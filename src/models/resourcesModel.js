import {Schema,model} from 'mongoose';
import Modules from './modulesModel.js';


const resourceSchema = new Schema({
    nameResource:{type:String,required:true},
    description:{type:String,required:true},
    urlResource:{type:String,required:true},
    typeResource:{type:String,required:true},
    moduleId:{type:Schema.Types.ObjectId,required:true,ref:Modules}
},{
    versionKey:false,
    timestamps:true
})


export default model('Resource',resourceSchema);