import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getServices = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllServices(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchServices(pageNo+1,pageSize,search);
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


const addServices = (data) => {
return api.post(`/services`,data)
}
const updateServices = (id,data) => {
return api.put(`/services/${id}`,data)
}
const getAllServices = (page,paginator) => {
return api.get(`/services/?page=${page}&paginator=${paginator}`)
}
const getOneServices = (id) => {
return api.get(`/services/${id}`)
}
const searchServices = (page,paginator,searchKey) => {
return api.get(`/services/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteServices = (id) => {
return api.delete(`/services/${id}`)
}
export {getServices,addServices,updateServices,getAllServices,getOneServices,searchServices,deleteServices}


