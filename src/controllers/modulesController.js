import ModulesModel from '../models/modulesModel.js';

export const createModule = async(req,res)=>{
    try {
        const data = req.body
        const module = new ModulesModel(data)
        await module.save()
        res.status(200).json({message:'module created successfully', module});
    } catch (error) {
        res.status(500).json({message:"unable to register module",error});
    }
}

export const getModules = async(req,res)=>{
    try {
        const modulesFound = await ModulesModel.find()
        if(!modulesFound){
            res.status(200).json({message:"modules empty",modulesFound});
        }
        res.status(200).json({message:"modules found",modulesFound});

    } catch (error) {
        res.status(500).json({message:"unable to get modules",error});
    }
}

export const getModule = async(req,res)=>{
    try {
        const {id} = req.params;
        const moduleFound = await ModulesModel.findById(id);
        if(!moduleFound){
            res.status(200).json({message:"module not found",moduleFound});
        }
        res.status(200).json({message:"module found",moduleFound});
    } catch (error) {
        res.status(500).json({message:"unable to get module",error});
    }
}

export const updateModule = async(req,res)=>{
    try {
        const data = req.body
        const id = req.params.id
        
        const updatedmodule = await ModulesModel.updateOne({"_id":id},{$set:{...data}})
        res.status(200).json({message:'module updated successfully', updatedmodule});

    } catch (error) {
        res.status(500).json({message:"unable to update module",error});
    }
}

export const deleteModule = async(req,res)=>{
    try {
        const id = req.params.id
        const deletedmodule = await ModulesModel.findByIdAndDelete(id)
        res.status(200).json({message:'module deleted successfully', deletedmodule});
    } catch (error) {
        res.status(500).json({message:"unable to delete module",error});
    }
}

