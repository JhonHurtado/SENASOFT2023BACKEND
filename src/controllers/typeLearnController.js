import TypeLearnModel from '../models/typeLearn.js';


export const createTypeLearn = async(req,res)=>{
    try {
        const data = req.body
        const typeLearn = new TypeLearnModel(data)
        await typeLearn.save()
        res.status(200).json({message:'typeLearn created successfully', typeLearn});
    } catch (error) {
        res.status(500).json({message:"unable to register typeLearn",error});
    }
}

export const getTypeLearns = async(req,res)=>{
    try {
        const typeLearnsFound = await TypeLearnModel.find()
        if(!typeLearnsFound){
            res.status(200).json({message:"typeLearns empty",typeLearnsFound});
        }
        res.status(200).json({message:"typeLearns found",typeLearnsFound});

    } catch (error) {
        res.status(500).json({message:"unable to get typeLearns",error});
    }
}

export const getTypeLearn = async(req,res)=>{
    try {
        const {id} = req.params;
        const typeLearnFound = await TypeLearnModel.findById(id);
        if(!typeLearnFound){
            res.status(200).json({message:"typeLearn not found",typeLearnFound});
        }
        res.status(200).json({message:"typeLearn found",typeLearnFound});
    } catch (error) {
        res.status(500).json({message:"unable to get typeLearn",error});
    }
}

export const updateTypeLearn = async(req,res)=>{
    try {
        const data = req.body
        const id = req.params.id
        
        const updatedtypeLearn = await TypeLearnModel.updateOne({"_id":id},{$set:{...data}})
        res.status(200).json({message:'typeLearn updated successfully', updatedtypeLearn});

    } catch (error) {
        res.status(500).json({message:"unable to update typeLearn",error});
    }
}

export const deleteTypeLearn = async(req,res)=>{
    try {
        const id = req.params.id
        const deletedtypeLearn = await TypeLearnModel.findByIdAndDelete(id)
        res.status(200).json({message:'typeLearn deleted successfully', deletedtypeLearn});
    } catch (error) {
        res.status(500).json({message:"unable to delete typeLearn",error});
    }
}

