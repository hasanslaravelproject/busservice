import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getModel_Has_Permissions = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllModel_Has_Permissions(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchModel_Has_Permissions(pageNo+1,pageSize,search);
        } catch(err) {
            return {
                data:[],
                total:0
            }
        }
    }
    if (
    res &&
    res.data &&
    res.data.data &&
    res.data.data.data &&
    res.data.data.data.length > 0) {
    return res.data.data;
    } else {
        return {
            data:[],
            total:0
        }
    }
}


const addModel_Has_Permissions = (data) => {
return api.post(`/model_has_permissions`,data)
}
const updateModel_Has_Permissions = (permission_id,model_type,model_id,data) => {
return api.put(`/model_has_permissions/${permission_id}/${model_type}/${model_id}`,data)
}
const getAllModel_Has_Permissions = (page,paginator) => {
return api.get(`/model_has_permissions/?page=${page}&paginator=${paginator}`)
}
const getOneModel_Has_Permissions = (permission_id,model_type,model_id) => {
return api.get(`/model_has_permissions/${permission_id}/${model_type}/${model_id}`)
}
const searchModel_Has_Permissions = (page,paginator,searchKey) => {
return api.get(`/model_has_permissions/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteModel_Has_Permissions = (permission_id,model_type,model_id) => {
return api.delete(`/model_has_permissions/${permission_id}/${model_type}/${model_id}`)
}
export {getModel_Has_Permissions,addModel_Has_Permissions,updateModel_Has_Permissions,getAllModel_Has_Permissions,getOneModel_Has_Permissions,searchModel_Has_Permissions,deleteModel_Has_Permissions}


