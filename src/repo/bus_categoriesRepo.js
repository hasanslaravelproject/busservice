import api from "../api/axios";


//This function is asynchronous and always returns the result of the call
//If Search contains anything, Search users is called, else Get All is called
const getBus_Categories = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllBus_Categories(pageNo+1,pageSize);
    }

    else{
        try {
            res = await searchBus_Categories(pageNo+1,pageSize,search);
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


const addBus_Categories = (data) => {
return api.post(`/bus_categories`,data)
}
const updateBus_Categories = (id,data) => {
return api.put(`/bus_categories/${id}`,data)
}
const getAllBus_Categories = (page,paginator) => {
return api.get(`/bus_categories/?page=${page}&paginator=${paginator}`)
}
const getOneBus_Categories = (id) => {
return api.get(`/bus_categories/${id}`)
}
const searchBus_Categories = (page,paginator,searchKey) => {
return api.get(`/bus_categories/search/${searchKey}/?page=${page}&paginator=${paginator}`)
}
const deleteBus_Categories = (id) => {
return api.delete(`/bus_categories/${id}`)
}
export {getBus_Categories,addBus_Categories,updateBus_Categories,getAllBus_Categories,getOneBus_Categories,searchBus_Categories,deleteBus_Categories}


