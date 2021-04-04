import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getOauth_Clients = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllOauth_Clients(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchOauth_Clients(pageNo+1,pageSize,search);
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


const addOauth_Clients = (data) => {
return api.post(`/oauth_clients`,data)
}
const updateOauth_Clients = (id,data) => {
return api.put(`/oauth_clients/${id}`,data)
}
const getAllOauth_Clients = (page,paginator) => {
return api.get(`/oauth_clients/?page=${page}&paginator=${paginator}`)
}
const getOneOauth_Clients = (id) => {
return api.get(`/oauth_clients/${id}`)
}
const searchOauth_Clients = (page,paginator,searchKey) => {
return api.get(`/oauth_clients/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteOauth_Clients = (id) => {
return api.delete(`/oauth_clients/${id}`)
}
export {getOauth_Clients,addOauth_Clients,updateOauth_Clients,getAllOauth_Clients,getOneOauth_Clients,searchOauth_Clients,deleteOauth_Clients}


