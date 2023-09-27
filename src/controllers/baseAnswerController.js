import BaseAnswerModel from '../models/baseAnswerModel.js';

export const createBaseAnswer = async(req,res)=>{
    try {
        const data = req.body
        const baseAnswer = new BaseAnswerModel(data)
        await baseAnswer.save()
        res.status(200).json({message:'Base Answer created successfully', baseAnswer});
    } catch (error) {
        res.status(500).json({message:"unable to register Base Answer",error});
    }
}

export const getBaseAnswers = async(req,res)=>{
    try {
        const baseAnswersFound = await BaseAnswerModel.find()
        if(!baseAnswersFound){
            res.status(200).json({message:"Base Answers empty",baseAnswersFound});
        }
        res.status(200).json({message:"Base Answer found",baseAnswersFound});

    } catch (error) {
        res.status(500).json({message:"unable to get Base Answer",error});
    }
}

export const getBaseAnswer = async(req,res)=>{
    try {
        const {id} = req.params;
        const baseAnswersFound = await BaseAnswerModel.findById(id);
        if(!baseAnswersFound){
            res.status(200).json({message:"Base Answer not found",baseAnswersFound});
        }
        res.status(200).json({message:"Base Answer found",baseAnswersFound});
    } catch (error) {
        res.status(500).json({message:"unable to get Base Answer",error});
    }
}

export const updateBaseAnswer = async(req,res)=>{
    try {
        const data = req.body
        const id = req.params.id
        
        const updatedBaseAnswer = await BaseAnswerModel.updateOne({"_id":id},{$set:{...data}})
        res.status(200).json({message:'Base Answer updated successfully', updatedBaseAnswer});

    } catch (error) {
        res.status(500).json({message:"unable to update Base Answer",error});
    }
}

export const deleteBaseAnswer = async(req,res)=>{
    try {
        const id = req.params.id
        const deletedBaseAnswer = await BaseAnswerModel.findByIdAndDelete(id)
        res.status(200).json({message:'Base Answer deleted successfully', deletedBaseAnswer});
    } catch (error) {
        res.status(500).json({message:"unable to delete Base Answer",error});
    }
}

