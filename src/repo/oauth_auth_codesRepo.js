import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getOauth_Auth_Codes = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllOauth_Auth_Codes(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchOauth_Auth_Codes(pageNo+1,pageSize,search);
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


const addOauth_Auth_Codes = (data) => {
return api.post(`/oauth_auth_codes`,data)
}
const updateOauth_Auth_Codes = (id,data) => {
return api.put(`/oauth_auth_codes/${id}`,data)
}
const getAllOauth_Auth_Codes = (page,paginator) => {
return api.get(`/oauth_auth_codes/?page=${page}&paginator=${paginator}`)
}
const getOneOauth_Auth_Codes = (id) => {
return api.get(`/oauth_auth_codes/${id}`)
}
const searchOauth_Auth_Codes = (page,paginator,searchKey) => {
return api.get(`/oauth_auth_codes/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteOauth_Auth_Codes = (id) => {
return api.delete(`/oauth_auth_codes/${id}`)
}
export {getOauth_Auth_Codes,addOauth_Auth_Codes,updateOauth_Auth_Codes,getAllOauth_Auth_Codes,getOneOauth_Auth_Codes,searchOauth_Auth_Codes,deleteOauth_Auth_Codes}


