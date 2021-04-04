import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getModel_Has_Roles = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllModel_Has_Roles(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchModel_Has_Roles(pageNo+1,pageSize,search);
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


const addModel_Has_Roles = (data) => {
return api.post(`/model_has_roles`,data)
}
const updateModel_Has_Roles = (role_id,model_type,model_id,data) => {
return api.put(`/model_has_roles/${role_id}/${model_type}/${model_id}`,data)
}
const getAllModel_Has_Roles = (page,paginator) => {
return api.get(`/model_has_roles/?page=${page}&paginator=${paginator}`)
}
const getOneModel_Has_Roles = (role_id,model_type,model_id) => {
return api.get(`/model_has_roles/${role_id}/${model_type}/${model_id}`)
}
const searchModel_Has_Roles = (page,paginator,searchKey) => {
return api.get(`/model_has_roles/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteModel_Has_Roles = (role_id,model_type,model_id) => {
return api.delete(`/model_has_roles/${role_id}/${model_type}/${model_id}`)
}
export {getModel_Has_Roles,addModel_Has_Roles,updateModel_Has_Roles,getAllModel_Has_Roles,getOneModel_Has_Roles,searchModel_Has_Roles,deleteModel_Has_Roles}


