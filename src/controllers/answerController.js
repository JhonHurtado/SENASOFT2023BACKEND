import AnswerModel from '../models/answersModel.js';

export const createAnswer = async(req,res)=>{
    try {
        const data = req.body
        const answer = new AnswerModel(data)
        await answer.save()
        res.status(200).json({message:'answer created successfully', answer});
    } catch (error) {
        res.status(500).json({message:"unable to register answer",error});
    }
}

export const getAnswers = async(req,res)=>{
    try {
        const answersFound = await AnswerModel.find()
        if(!answersFound){
            res.status(200).json({message:"answers empty",answersFound});
        }
        res.status(200).json({message:"answers found",answersFound});

    } catch (error) {
        res.status(500).json({message:"unable to get answers",error});
    }
}

export const getAnswer = async(req,res)=>{
    try {
        const {id} = req.params;
        const answerFound = await AnswerModel.findById(id);
        if(!answerFound){
            res.status(200).json({message:"answer not found",answerFound});
        }
        res.status(200).json({message:"answer found",answerFound});
    } catch (error) {
        res.status(500).json({message:"unable to get answer",error});
    }
}

export const updateAnswer = async(req,res)=>{
    try {
        const data = req.body
        const id = req.params.id
        
        const updatedanswer = await AnswerModel.updateOne({"_id":id},{$set:{...data}})
        res.status(200).json({message:'answer updated successfully', updatedanswer});

    } catch (error) {
        res.status(500).json({message:"unable to update answer",error});
    }
}

export const deleteAnswer = async(req,res)=>{
    try {
        const id = req.params.id
        const deletedanswer = await AnswerModel.findByIdAndDelete(id)
        res.status(200).json({message:'answer deleted successfully', deletedanswer});
    } catch (error) {
        res.status(500).json({message:"unable to delete answer",error});
    }
}

