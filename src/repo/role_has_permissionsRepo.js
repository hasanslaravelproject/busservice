import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getRole_Has_Permissions = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllRole_Has_Permissions(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchRole_Has_Permissions(pageNo+1,pageSize,search);
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


const addRole_Has_Permissions = (data) => {
return api.post(`/role_has_permissions`,data)
}
const updateRole_Has_Permissions = (permission_id,role_id,data) => {
return api.put(`/role_has_permissions/${permission_id}/${role_id}`,data)
}
const getAllRole_Has_Permissions = (page,paginator) => {
return api.get(`/role_has_permissions/?page=${page}&paginator=${paginator}`)
}
const getOneRole_Has_Permissions = (permission_id,role_id) => {
return api.get(`/role_has_permissions/${permission_id}/${role_id}`)
}
const searchRole_Has_Permissions = (page,paginator,searchKey) => {
return api.get(`/role_has_permissions/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteRole_Has_Permissions = (permission_id,role_id) => {
return api.delete(`/role_has_permissions/${permission_id}/${role_id}`)
}
export {getRole_Has_Permissions,addRole_Has_Permissions,updateRole_Has_Permissions,getAllRole_Has_Permissions,getOneRole_Has_Permissions,searchRole_Has_Permissions,deleteRole_Has_Permissions}


