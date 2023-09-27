import RoleModel from '../models/roleModel.js';

export const createRole = async(req,res)=>{
    try {
        const data = req.body
        const role = new RoleModel(data)
        await role.save()
        res.status(200).json({message:'role created successfully', role});
    } catch (error) {
        res.status(500).json({message:"unable to register role",error});
    }
}

export const getRoles = async(req,res)=>{
    try {
        const rolesFound = await RoleModel.find()
        if(!rolesFound){
            res.status(200).json({message:"roles empty",rolesFound});
        }
        res.status(200).json({message:"roles found",rolesFound});

    } catch (error) {
        res.status(500).json({message:"unable to get roles",error});
    }
}

export const getRole = async(req,res)=>{
    try {
        const {id} = req.params;
        const roleFound = await RoleModel.findById(id);
        if(!roleFound){
            res.status(200).json({message:"role not found",roleFound});
        }
        res.status(200).json({message:"role found",roleFound});
    } catch (error) {
        res.status(500).json({message:"unable to get role",error});
    }
}

export const updateRole = async(req,res)=>{
    try {
        const data = req.body
        const id = req.params.id
        
        const updatedrole = await RoleModel.updateOne({"_id":id},{$set:{...data}})
        res.status(200).json({message:'role updated successfully', updatedrole});

    } catch (error) {
        res.status(500).json({message:"unable to update role",error});
    }
}

export const deleteRole = async(req,res)=>{
    try {
        const id = req.params.id
        const deletedrole = await RoleModel.findByIdAndDelete(id)
        res.status(200).json({message:'role deleted successfully', deletedrole});
    } catch (error) {
        res.status(500).json({message:"unable to delete role",error});
    }
}

