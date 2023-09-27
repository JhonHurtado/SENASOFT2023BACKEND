import CategoryModel from '../models/categoryModel.js';

export const createCategory = async(req,res)=>{
    try {
        const data = req.body
        const category = new CategoryModel(data)
        await category.save()
        res.status(200).json({message:'category created successfully', category});
    } catch (error) {
        res.status(500).json({message:"unable to register category",error});
    }
}

export const getCategorys = async(req,res)=>{
    try {
        const categorysFound = await CategoryModel.find()
        if(!categorysFound){
            res.status(200).json({message:"categorys empty",categorysFound});
        }
        res.status(200).json({message:"categorys found",categorysFound});

    } catch (error) {
        res.status(500).json({message:"unable to get categorys",error});
    }
}

export const getCategory = async(req,res)=>{
    try {
        const {id} = req.params;
        const categoryFound = await CategoryModel.findById(id);
        if(!categoryFound){
            res.status(200).json({message:"category not found",categoryFound});
        }
        res.status(200).json({message:"category found",categoryFound});
    } catch (error) {
        res.status(500).json({message:"unable to get category",error});
    }
}

export const updateCategory = async(req,res)=>{
    try {
        const data = req.body
        const id = req.params.id
        
        const updatedcategory = await CategoryModel.updateOne({"_id":id},{$set:{...data}})
        res.status(200).json({message:'category updated successfully', updatedcategory});

    } catch (error) {
        res.status(500).json({message:"unable to update category",error});
    }
}

export const deleteCategory = async(req,res)=>{
    try {
        const id = req.params.id
        const deletedcategory = await CategoryModel.findByIdAndDelete(id)
        res.status(200).json({message:'category deleted successfully', deletedcategory});
    } catch (error) {
        res.status(500).json({message:"unable to delete category",error});
    }
}

