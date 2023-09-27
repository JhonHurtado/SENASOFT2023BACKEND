import resourcesModel from '../models/resourcesModel.js';

export const createResource = async(req,res)=>{
    try {
        const data = req.body
        const resource = new resourcesModel(data)
        await resource.save()
        res.status(200).json({message:'resource created successfully', resource});
    } catch (error) {
        res.status(500).json({message:"unable to register resource",error});
    }
}

export const getResources = async(req,res)=>{
    try {
        const resourcesFound = await resourcesModel.find()
        if(!resourcesFound){
            res.status(200).json({message:"resources empty",resourcesFound});
        }
        res.status(200).json({message:"resources found",resourcesFound});

    } catch (error) {
        res.status(500).json({message:"unable to get resources",error});
    }
}

export const getResource = async(req,res)=>{
    try {
        const {id} = req.params;
        const resourceFound = await resourcesModel.findById(id);
        if(!resourceFound){
            res.status(200).json({message:"resource not found",resourceFound});
        }
        res.status(200).json({message:"resource found",resourceFound});
    } catch (error) {
        res.status(500).json({message:"unable to get resource",error});
    }
}

export const updateResource = async(req,res)=>{
    try {
        const data = req.body
        const id = req.params.id
        
        const updatedresource = await resourcesModel.updateOne({"_id":id},{$set:{...data}})
        res.status(200).json({message:'resource updated successfully', updatedresource});

    } catch (error) {
        res.status(500).json({message:"unable to update resource",error});
    }
}

export const deleteResource = async(req,res)=>{
    try {
        const id = req.params.id
        const deletedresource = await resourcesModel.findByIdAndDelete(id)
        res.status(200).json({message:'resource deleted successfully', deletedresource});
    } catch (error) {
        res.status(500).json({message:"unable to delete resource",error});
    }
}

