import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getCompanies = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllCompanies(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchCompanies(pageNo+1,pageSize,search);
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


const addCompanies = (data) => {
return api.post(`/companies`,data)
}
const updateCompanies = (id,data) => {
return api.put(`/companies/${id}`,data)
}
const getAllCompanies = (page,paginator) => {
return api.get(`/companies/?page=${page}&paginator=${paginator}`)
}
const getOneCompanies = (id) => {
return api.get(`/companies/${id}`)
}
const searchCompanies = (page,paginator,searchKey) => {
return api.get(`/companies/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteCompanies = (id) => {
return api.delete(`/companies/${id}`)
}
export {getCompanies,addCompanies,updateCompanies,getAllCompanies,getOneCompanies,searchCompanies,deleteCompanies}


