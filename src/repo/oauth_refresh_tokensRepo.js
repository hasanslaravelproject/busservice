import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getOauth_Refresh_Tokens = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllOauth_Refresh_Tokens(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchOauth_Refresh_Tokens(pageNo+1,pageSize,search);
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


const addOauth_Refresh_Tokens = (data) => {
return api.post(`/oauth_refresh_tokens`,data)
}
const updateOauth_Refresh_Tokens = (id,data) => {
return api.put(`/oauth_refresh_tokens/${id}`,data)
}
const getAllOauth_Refresh_Tokens = (page,paginator) => {
return api.get(`/oauth_refresh_tokens/?page=${page}&paginator=${paginator}`)
}
const getOneOauth_Refresh_Tokens = (id) => {
return api.get(`/oauth_refresh_tokens/${id}`)
}
const searchOauth_Refresh_Tokens = (page,paginator,searchKey) => {
return api.get(`/oauth_refresh_tokens/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteOauth_Refresh_Tokens = (id) => {
return api.delete(`/oauth_refresh_tokens/${id}`)
}
export {getOauth_Refresh_Tokens,addOauth_Refresh_Tokens,updateOauth_Refresh_Tokens,getAllOauth_Refresh_Tokens,getOneOauth_Refresh_Tokens,searchOauth_Refresh_Tokens,deleteOauth_Refresh_Tokens}


