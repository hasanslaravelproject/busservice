import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getOauth_Personal_Access_Clients = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllOauth_Personal_Access_Clients(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchOauth_Personal_Access_Clients(pageNo+1,pageSize,search);
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


const addOauth_Personal_Access_Clients = (data) => {
return api.post(`/oauth_personal_access_clients`,data)
}
const updateOauth_Personal_Access_Clients = (id,data) => {
return api.put(`/oauth_personal_access_clients/${id}`,data)
}
const getAllOauth_Personal_Access_Clients = (page,paginator) => {
return api.get(`/oauth_personal_access_clients/?page=${page}&paginator=${paginator}`)
}
const getOneOauth_Personal_Access_Clients = (id) => {
return api.get(`/oauth_personal_access_clients/${id}`)
}
const searchOauth_Personal_Access_Clients = (page,paginator,searchKey) => {
return api.get(`/oauth_personal_access_clients/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteOauth_Personal_Access_Clients = (id) => {
return api.delete(`/oauth_personal_access_clients/${id}`)
}
export {getOauth_Personal_Access_Clients,addOauth_Personal_Access_Clients,updateOauth_Personal_Access_Clients,getAllOauth_Personal_Access_Clients,getOneOauth_Personal_Access_Clients,searchOauth_Personal_Access_Clients,deleteOauth_Personal_Access_Clients}


