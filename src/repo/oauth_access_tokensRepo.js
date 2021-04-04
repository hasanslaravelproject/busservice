import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getOauth_Access_Tokens = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllOauth_Access_Tokens(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchOauth_Access_Tokens(pageNo+1,pageSize,search);
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


const addOauth_Access_Tokens = (data) => {
return api.post(`/oauth_access_tokens`,data)
}
const updateOauth_Access_Tokens = (id,data) => {
return api.put(`/oauth_access_tokens/${id}`,data)
}
const getAllOauth_Access_Tokens = (page,paginator) => {
return api.get(`/oauth_access_tokens/?page=${page}&paginator=${paginator}`)
}
const getOneOauth_Access_Tokens = (id) => {
return api.get(`/oauth_access_tokens/${id}`)
}
const searchOauth_Access_Tokens = (page,paginator,searchKey) => {
return api.get(`/oauth_access_tokens/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteOauth_Access_Tokens = (id) => {
return api.delete(`/oauth_access_tokens/${id}`)
}
export {getOauth_Access_Tokens,addOauth_Access_Tokens,updateOauth_Access_Tokens,getAllOauth_Access_Tokens,getOneOauth_Access_Tokens,searchOauth_Access_Tokens,deleteOauth_Access_Tokens}


